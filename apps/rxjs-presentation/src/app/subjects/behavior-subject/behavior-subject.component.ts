import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamConfig } from '@arges/stream';
import { randomColor, StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-behavior-subject',
  template: `
    <arges-stream-wrapper [description]="'Behavior subject'"
                          [exampleCode]="exampleCode"
                          [config]="[config]">
    </arges-stream-wrapper>
  `,
  styleUrls: ['./behavior-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BehaviorSubjectComponent {
  stream$ = new BehaviorSubject<StreamValue>({ value: 0 , color: 'white'});
  counter = 1;

  config: StreamConfig<StreamValue> = {
    stream: this.stream$,
    streamName: 'stream$',
    onEmitClick: () => this.stream$.next({ value: this.counter++, color: randomColor() })
  };

  exampleCode = `stream$ = new BehaviorSubject<StreamValue>({ value: 0 });`;

}
