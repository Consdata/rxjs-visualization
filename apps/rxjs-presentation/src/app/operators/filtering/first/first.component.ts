import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {first} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';

@Component({
    selector: 'arges-first',
    template: `
      <arges-stream-wrapper [description]="'First operator'"
                            [exampleCode]="exampleCode"
                            [config]="config"
                            [exampleUsages]="exampleUsages"
                            [observableConfig]="[firstConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {
    simpleCounter = 1;
    values$ = new Subject<StreamValue>();
    firstValue$ = this.values$.asObservable().pipe(first());
    config: StreamConfig<StreamValue>[] = [{
        stream: this.values$,
        streamName: 'values$',
        onEmitClick: () => {
            this.values$.next({value: this.simpleCounter++, color: randomColor()});
        }
    }];
    firstConfig: StreamConfig<StreamValue> = {
        observable: this.firstValue$,
        streamName: 'firstValue$'
    };
    exampleCode = `
    values$ = new Subject<StreamValue>();
    firstValue$ = this.values$.asObservable().pipe(first());
  `;

    exampleUsages = `
    When you subscribe to a hot stream that holds replayed/cached value and you don't care about any other values that the stream holds, you can fetch only the first value and close/unsubscribe the observable.
  `;
}
