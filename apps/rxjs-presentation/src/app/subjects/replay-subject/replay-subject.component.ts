import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { StreamConfig } from '@arges/stream';
import { randomColor, StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-replay-subject',
  template: `
    <arges-stream-wrapper [description]="'Replay subject'"
                          [exampleCode]="exampleCode"
                          [config]="[config]">
    </arges-stream-wrapper>
  `,
  styleUrls: ['./replay-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplaySubjectComponent {
  stream$ = new ReplaySubject<StreamValue>(1);
  counter = 1;

  config: StreamConfig<StreamValue> = {
    stream: this.stream$,
    streamName: 'stream$',
    onEmitClick: () => this.stream$.next({ value: this.counter++, color: randomColor() })
  };

  exampleCode = `stream$ = new ReplaySubject<StreamValue>(1);`;

}
