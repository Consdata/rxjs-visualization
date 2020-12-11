import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {last} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';

@Component({
    selector: 'arges-last',
    template: `
      <arges-stream-wrapper [description]="'Last operator'"
                            [exampleCode]="exampleCode"
                            [config]="config"
                            [exampleUsages]="exampleUsages"
                            [observableConfig]="[lastConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastComponent {
    simpleCounter = 1;
    values$ = new Subject<StreamValue>();
    lastValue$ = this.values$.asObservable().pipe(last());
    config: StreamConfig<StreamValue>[] = [{
        stream: this.values$,
        streamName: 'values$',
        onEmitClick: () => {
            this.values$.next({value: this.simpleCounter++, color: randomColor()});
        }
    }];
    lastConfig: StreamConfig<StreamValue> = {
        observable: this.lastValue$,
        streamName: 'lastValue$'
    };
    exampleCode = `
    values$ = new Subject<StreamValue>();
    lastValue$ = this.values$.asObservable().pipe(last());
  `;

    exampleUsages = `
    Similarly to AsyncSubject - when you don't care about all other values except for last one. 
  `;
}
