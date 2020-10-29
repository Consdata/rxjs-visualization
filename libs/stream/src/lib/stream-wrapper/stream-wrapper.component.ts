import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { StreamConfig } from '@arges/stream';

@Component({
  selector: 'arges-stream-wrapper',
  template: `
    <ng-container *ngFor="let streamConfig of config; let index = index;">
      <arges-stream-with-observers *ngIf="streamConfig.stream"
                                   [style.grid-area]="streamConfig.gridPlacement + index|| 'left' + index"
                                   [streamName]="streamConfig.streamName"
                                   [stream]="streamConfig.stream"
                                   (emitClick)="streamConfig.onEmitClick()">
      </arges-stream-with-observers>
    </ng-container>
    <mat-card [style.grid-area]="'right0'" class="description-card">
      <mat-card-title>
        {{description}}
      </mat-card-title>
      <pre><code> {{exampleCode}}</code></pre>
      <div *ngIf="exampleUsages">
        <div>Example usages:
          <hr>
        </div>
        <span [innerHTML]="exampleUsages"></span>
      </div>
    </mat-card>
    <ng-container *ngFor="let observableConfig of observableConfig; let index = index;">
      <mat-card [style.grid-area]="observableConfig.gridPlacement + index || 'right1'"
                style="align-self: center;">
        <arges-observable-stream [stream]="observableConfig.observable"
                                 [streamName]="observableConfig.streamName">
        </arges-observable-stream>
      </mat-card>

    </ng-container>
  `,
  styleUrls: ['./stream-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamWrapperComponent<T> {
  @Input() config: StreamConfig<T>[];
  @Input() observableConfig: StreamConfig<T>[];
  @Input() stream: Subject<{ value: T }>;
  @Input() streamName: string;
  @Input() description: string;
  @Input() exampleCode: string;
  @Input() exampleUsages: string;

}
