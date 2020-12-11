import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {throttleTime} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';

@Component({
    selector: 'arges-throttle-time',
    template: `
      <arges-stream-wrapper [description]="'ThrottleTime operator'"
                            [exampleCode]="exampleCode"
                            [config]="config"
                            [exampleUsages]="exampleUsages"
                            [observableConfig]="[throttleConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThrottleTimeComponent {
    throttled$ = new Subject<StreamValue>();
    throttledObservable$ = this.throttled$.asObservable().pipe(throttleTime(1000));
    simpleCounter = 1;
    config: StreamConfig<StreamValue>[] = [{
        stream: this.throttled$,
        streamName: 'throttled$',
        onEmitClick: () => {
            this.throttled$.next({value: this.simpleCounter++, color: randomColor()});
        }
    }];
    throttleConfig: StreamConfig<StreamValue> = {
        observable: this.throttledObservable$,
        streamName: 'throttledObservable$'
    };
    exampleCode = `
    throttled$ = new Subject<StreamValue>();
    throttledObservable$ = this.throttled$.asObservable().pipe(throttleTime(1000));
  `;

    exampleUsages = `
    When you want to react to a single value and ignore any other values in a parametrized, timed window. For example: button clicks, you want to react to a single button click, don't block/disable the button (let user click it) and not react to any other clicks during the throttle window time.
  `;

}
