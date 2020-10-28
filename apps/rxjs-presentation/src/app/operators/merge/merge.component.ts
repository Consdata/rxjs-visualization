import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, merge, Subject } from 'rxjs';
import { StreamConfig } from '@arges/stream';
import { randomColor, StreamValue } from '@arges/stream-data';


@Component({
  selector: 'arges-merge',
  template: `
    <arges-stream-wrapper [description]="'Merge operator'"
                          [exampleCode]="exampleCode"
                          [config]="config"
                          [observableConfig]="[mergeConfig]">
    </arges-stream-wrapper>
  `,
  styleUrls: ['./merge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MergeComponent {
  behaviorStream$ = new BehaviorSubject<StreamValue>({ value: 0, color: 'white' });
  simpleStream$ = new Subject<StreamValue>();
  merged$ = merge(this.behaviorStream$.asObservable(), this.simpleStream$.asObservable());
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
    observable: this.merged$,
    streamName: 'merged$'
  };
  exampleCode = `
  behaviorStream$ = new BehaviorSubject<StreamValue>({value: 0, color: 'white'}); \n
  simpleStream$ = new Subject<StreamValue>();\n
  merged$ = merge(this.behaviorStream$.asObservable(),
                  this.simpleStream$.asObservable());
  `;


}
