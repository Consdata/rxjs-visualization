import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {StreamConfig} from '@arges/stream';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'arges-take-until',
    template: `
      <arges-stream-wrapper [description]="'TakeUntil operator'"
                            [exampleCode]="exampleCode"
                            [exampleUsages]="exampleUsages"
                            [config]="config"
                            [observableConfig]="[takeUntilConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TakeUntilComponent {
    valuesStream$ = new BehaviorSubject<StreamValue>({value: 0, color: 'white'});
    untilSignal$ = new Subject<StreamValue>();
    takenUntil$ = this.valuesStream$.asObservable().pipe(takeUntil(this.untilSignal$));
    behaviorCounter = 1;
    simpleCounter = 1;

    config: StreamConfig<StreamValue>[] = [{
        stream: this.valuesStream$,
        streamName: 'valuesStream$',
        onEmitClick: () => {
            this.valuesStream$.next({value: this.behaviorCounter++, color: randomColor()});
        }
    }, {
        stream: this.untilSignal$,
        streamName: 'untilSignal$',
        onEmitClick: () => this.untilSignal$.next({value: this.simpleCounter++, color: randomColor()})
    }];
    takeUntilConfig: StreamConfig<StreamValue> = {
        observable: this.takenUntil$,
        streamName: 'takenUntil$'
    };
    exampleCode = `
      valuesStream$ = new BehaviorSubject<StreamValue>({value: 0, color: 'white'});
      untilSignal$ = new Subject<StreamValue>();
      takenUntil$ = this.valuesStream$.asObservable().pipe(takeUntil(this.untilSignal$));
  `;

    exampleUsages = `
    When you want to complete the observable based on signal - like sending signal in OnDestroy component lifecycle hook.
  `;

}
