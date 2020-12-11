import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';
import {randomColor, StreamValue} from '@arges/stream-data';

@Component({
    selector: 'arges-debounce-time',
    template: `
      <arges-stream-wrapper [description]="'DebounceTime operator'"
                            [exampleCode]="exampleCode"
                            [config]="config"
                            [exampleUsages]="exampleUsages"
                            [observableConfig]="[debounceConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebounceTimeComponent {
    debounced$ = new Subject<StreamValue>();
    simpleCounter = 1;
    debouncedObservable$ = this.debounced$.asObservable().pipe(debounceTime(1000));
    config: StreamConfig<StreamValue>[] = [{
        stream: this.debounced$,
        streamName: 'debounced$',
        onEmitClick: () => {
            this.debounced$.next({value: this.simpleCounter++, color: randomColor()});
        }
    }];
    debounceConfig: StreamConfig<StreamValue> = {
        observable: this.debouncedObservable$,
        streamName: 'debouncedObservable$'
    };
    exampleCode = `
    debounced$ = new Subject<StreamValue>();
    debouncedObservable$ = this.debounced$.asObservable().pipe(debounceTime(1000));
  `;

    exampleUsages = `
    When you need to wait parametrized amount of time between emission of a value and actually receiving it while ignoring all the other values emitted by that stream during the wait time. For example: you can create and observable from 'onscroll' DOM event - you shouldn't react to all the scroll events (there can be plenty!) and only to the last one, delayed by the debounced time.
  `;


}
