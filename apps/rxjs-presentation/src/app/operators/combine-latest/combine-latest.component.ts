import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { randomColor, StreamValue } from '@arges/stream-data';
import { StreamConfig } from '@arges/stream';

@Component({
  selector: 'arges-combine-latest',
  template: `
    <arges-stream-wrapper [description]="'CombineLatest operator'"
                          [exampleCode]="exampleCode"
                          [exampleUsages]="exampleUsages"
                          [config]="config"
                          [observableConfig]="[combineLatestConfig]">
    </arges-stream-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombineLatestComponent {
  behaviorStream$ = new BehaviorSubject<StreamValue>({ value: 0, color: 'white' });
  simpleStream$ = new Subject<StreamValue>();
  combineLatest$ = combineLatest(
    [this.behaviorStream$.asObservable(), this.simpleStream$.asObservable()])
    .pipe(map(([behaviorValue, simpleValue]) => ({
      value: `${behaviorValue.value},${simpleValue.value}`,
      color: simpleValue.color || behaviorValue.color
    })));
  behaviorCounter = 1;
  simpleCounter = 1;

  config: StreamConfig<StreamValue>[] = [{
    stream: this.behaviorStream$,
    streamName: 'behaviorStream$',
    onEmitClick: () => {
      this.behaviorStream$.next({ value: this.behaviorCounter++, color: randomColor() });
    }
  }, {
    stream: this.simpleStream$,
    streamName: 'simpleStream$',
    onEmitClick: () => this.simpleStream$.next({ value: this.simpleCounter++, color: randomColor() })
  }];
  combineLatestConfig: StreamConfig<StreamValue> = {
    observable: this.combineLatest$,
    streamName: 'combineLatest$'
  };
  exampleCode = `
  behaviorStream$ = new BehaviorSubject<StreamValue>({ value: 0, color: 'white' });
  simpleStream$ = new Subject<StreamValue>();
  combineLatest$ = combineLatest(
    [this.behaviorStream$.asObservable(), this.simpleStream$.asObservable()])
    .pipe(map(([behaviorValue, simpleValue]) => ({
      value: \`$\{behaviorValue.value},$\{simpleValue.value}\`,
      color: simpleValue.color || behaviorValue.color
    })));
  `;
  exampleUsages = `
    When you have multiple streams whose values are interdependent and you want to get array of those values anytime one of the combined streams emits
  `;
}
