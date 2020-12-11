import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {scan} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';

@Component({
    selector: 'arges-scan',
    template: `
      <arges-stream-wrapper [description]="'Scan operator'"
                            [exampleCode]="exampleCode"
                            [config]="config"
                            [exampleUsages]="exampleUsages"
                            [observableConfig]="[scanConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScanComponent {
    values$ = new Subject<StreamValue>();
    accumulated$ = this.values$.asObservable()
        .pipe(scan((acc, value) => ({value: `${acc.value}${value.value}`, color: value.color}), <StreamValue>{
            value: `init`,
            color: randomColor()
        }));
    simpleCounter = 1;
    config: StreamConfig<StreamValue>[] = [{
        stream: this.values$,
        streamName: 'values$',
        onEmitClick: () => {
            this.values$.next({value: this.simpleCounter++, color: randomColor()});
        }
    }];
    scanConfig: StreamConfig<StreamValue> = {
        observable: this.accumulated$,
        streamName: 'accumulated$'
    };
    exampleCode = `
    values$ = new Subject<StreamValue>();
    accumulated$ = this.values$.asObservable()
        .pipe(scan((acc, value) => ({value: \`\${acc.value}\${value.value}\`, color: value.color}), <StreamValue>{
            value: \`init\`,
            color: randomColor()
        }));
  `;

    exampleUsages = `
    When you want to create a redux-like behavior - you have access to every previously accumulated values and can include specific logic based on this historical data while handling a new value change.
  `;
}
