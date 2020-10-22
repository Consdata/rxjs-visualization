import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamConfig } from '@arges/stream';

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
  stream$ = new BehaviorSubject<{ value: number }>({ value: 0 });
  counter = 1;

  config: StreamConfig<{ value: number }> = {
    stream: this.stream$,
    streamName: 'stream$',
    onEmitClick: () => this.stream$.next({ value: this.counter++ })
  };

  exampleCode = `stream$ = new Subject<number>();`;

}
