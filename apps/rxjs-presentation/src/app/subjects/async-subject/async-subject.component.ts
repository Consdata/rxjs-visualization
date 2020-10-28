import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { StreamConfig } from '@arges/stream';
import { randomColor, StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-async-subject',
  template: `
    <arges-stream-wrapper [description]="'Async subject'"
                          [exampleCode]="exampleCode"
                          [config]="[config]">
    </arges-stream-wrapper>
  `,
  styleUrls: ['./async-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncSubjectComponent {
  stream$ = new AsyncSubject<StreamValue>();
  counter = 1;

  config: StreamConfig<StreamValue> = {
    stream: this.stream$,
    streamName: 'stream$',
    onEmitClick: () => this.stream$.next({ value: this.counter++, color: randomColor() })
  };

  exampleCode = `stream$ = new AsyncSubject<StreamValue>();`;
}
