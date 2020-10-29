import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { randomColor, StreamValue } from '@arges/stream-data';
import { StreamConfig } from '@arges/stream';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'arges-with-latest-from',
  template: `
    <arges-stream-wrapper [description]="'WithLatestFrom operator'"
                          [exampleCode]="exampleCode"
                          [exampleUsages]="exampleUsages"
                          [config]="config"
                          [observableConfig]="[mergeConfig]">
    </arges-stream-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithLatestFromComponent {
  behaviorStream$ = new BehaviorSubject<StreamValue>({ value: 0, color: 'white' });
  simpleStream$ = new Subject<StreamValue>();
  withLatestFrom$ = this.behaviorStream$.pipe(
    withLatestFrom(this.simpleStream$.asObservable()),
    map(([main, withLatest]) => ({
      value: `${main.value},${withLatest.value}`,
      color: withLatest.color || main.color
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
  mergeConfig: StreamConfig<StreamValue> = {
    observable: this.withLatestFrom$,
    streamName: 'withLatestFrom$'
  };
  exampleCode = `
  behaviorStream$ = new BehaviorSubject<StreamValue>({value: 0, color: 'white'}); \n
  simpleStream$ = new Subject<StreamValue>();\n
  withLatestFrom$ = this.behaviorStream$.pipe(
    withLatestFrom(this.simpleStream$.asObservable()),
    map(([main, withLatest]) => ({
      value: \`$\{main.value},$\{withLatest.value}\`,
      color: withLatest.color || main.color
    })));
  `;

  exampleUsages = `
    When you have main stream that you want to enrich with values from other stream <br>for example: in NgRx effects, when you need latest State snapshot
  `;
}
