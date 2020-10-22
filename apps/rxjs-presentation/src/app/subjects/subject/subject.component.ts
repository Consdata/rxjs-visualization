import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StreamConfig } from '@arges/stream';

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
  stream$ = new Subject<{ value: number }>();
  counter = 1;

  config: StreamConfig<{ value: number }> = {
    stream: this.stream$,
    streamName: 'stream$',
    onEmitClick: () => this.stream$.next({ value: this.counter++ })
  };

  exampleCode = `stream$ = new Subject<number>();`;
}
