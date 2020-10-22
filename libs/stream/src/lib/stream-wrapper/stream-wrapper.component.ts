import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { StreamConfig } from '@arges/stream';

@Component({
  selector: 'arges-stream-wrapper',
  template: `
    <div class="description">
      <h1>{{description}}</h1>
      <code>{{exampleCode}}</code>
    </div>
    <ng-container *ngFor="let streamConfig of config">
      <arges-stream-with-observers [streamName]="streamConfig.streamName"
                                   [stream]="streamConfig.stream"
                                   (emitClick)="streamConfig.onEmitClick()">
      </arges-stream-with-observers>
    </ng-container>

  `,
  styleUrls: ['./stream-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamWrapperComponent<T> {
  @Input() config: StreamConfig<T>[];
  @Input() stream: Subject<{ value: T }>;
  @Input() streamName: string;
  @Input() description: string;
  @Input() exampleCode: string;

}
