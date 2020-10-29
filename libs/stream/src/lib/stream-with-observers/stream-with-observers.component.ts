import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-stream-with-observers',
  template: `
    <mat-card>
      <div class="wrapper">
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; min-height: 150px">
          <div class="stream-title">{{streamName}}</div>
          <div class="observers">
            <ng-container *ngFor="let observer of observersValues | keyvalue; let index= index">
              <arges-observer [value]="observer.value"></arges-observer>
            </ng-container>
          </div>
          <div style="display: flex; flex-direction: column">
            <arges-add-observer [disabled]="stream.closed"
                                (addedObserver)="onObserverAdd($event)"></arges-add-observer>
            <button mat-flat-button [color]="'primary'" [disabled]="stream.isStopped" (click)="onStreamCompleteClick()"
                    style="margin-top: 15px">Complete stream
            </button>
          </div>
        </div>
        <div class="stream-wrapper"
             cdk-overlay-origin #origin="cdkOverlayOrigin"
             (click)="emitClick.next()"
             [class.closed]="stream.isStopped"
             [matTooltip]="stream.isStopped ? 'Stream completed' : 'Click to emit a value from stream'">
          <arges-stream [stream]="stream"></arges-stream>
        </div>
      </div>
    </mat-card>

    <ng-template cdk-connected-overlay
                 [cdkConnectedOverlayOrigin]="origin"
                 [cdkConnectedOverlayOpen]="stream.isStopped || stream.closed"
                 [cdkConnectedOverlayPositions]="positions">
      <div style="width: 1px; height: 5em;border: 12px solid black"></div>
    </ng-template>
  `,
  styleUrls: ['./stream-with-observers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamWithObserversComponent {
  @Input() streamName: string;
  @Input() stream: Subject<StreamValue>;
  @Output() emitClick = new EventEmitter<void>();
  positions: ConnectedPosition[] = [{
    originX: 'end',
    originY: 'center',
    overlayX: 'center',
    overlayY: 'center'
  }];
  observersValues: { [key: string]: StreamValue } = {};

  onObserverAdd(index: number) {
    this.observersValues = { ...this.observersValues, [index]: 123 };
    this.stream.subscribe(value => {
      this.observersValues = { ...this.observersValues, [index]: value };
    });
  }

  onStreamCompleteClick() {
    this.stream.complete();
  }
}
