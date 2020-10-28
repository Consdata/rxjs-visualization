import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StreamConfig } from '@arges/stream';
import { randomColor, StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-subject',
  template: `
    <arges-stream-wrapper [description]="'Standardowy subject'"
                          [exampleCode]="exampleCode"
                          [config]="[config]">
    </arges-stream-wrapper>
  `,
  styleUrls: ['./subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectComponent {
  stream$ = new Subject<StreamValue>();
  counter = 1;

  config: StreamConfig<StreamValue> = {
    stream: this.stream$,
    streamName: 'stream$',
    onEmitClick: () => this.stream$.next({ value: this.counter++, color: randomColor() })
  };

  exampleCode = `stream$ = new Subject<StreamValue>();`;
}
