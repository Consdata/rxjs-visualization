import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { StreamValue } from '@arges/stream-data';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'arges-observable-stream',
  template: `
    <div class="wrapper">
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px; min-height: 150px">
        <div class="stream-title">{{streamName}}</div>
        <div class="observers">
          <ng-container *ngFor="let observer of observersValues | keyvalue; let index= index">
            <arges-observer [value]="observer.value"></arges-observer>
          </ng-container>
        </div>
        <div style="display: flex; flex-direction: column">
          <arges-add-observer (addedObserver)="onObserverAdd($event)"></arges-add-observer>
        </div>
      </div>
      <div class="stream-wrapper" cdk-overlay-origin #origin="cdkOverlayOrigin" (click)="emitClick.next()">
        <arges-stream [stream]="observable"></arges-stream>
      </div>
    </div>
    <ng-template cdk-connected-overlay
                 [cdkConnectedOverlayOrigin]="origin"
                 [cdkConnectedOverlayOpen]="streamClosed"
                 [cdkConnectedOverlayPositions]="positions">
      <div style="width: 1px; height: 5em;border: 12px solid black"></div>
    </ng-template>
  `,
  styleUrls: ['./observable-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableStreamComponent {
  @Input() streamName: string;
  observable: Observable<StreamValue>;
  @Output() emitClick = new EventEmitter<void>();
  positions: ConnectedPosition[] = [{
    originX: 'end',
    originY: 'center',
    overlayX: 'center',
    overlayY: 'center'
  }];
  streamClosed = false;
  observersValues: { [key: string]: StreamValue } = {};

  constructor(private cdRef: ChangeDetectorRef) {
  }

  @Input() set stream(value: Observable<StreamValue>) {
    this.observable = value.pipe(finalize(() => {
      this.streamClosed = true;
      this.cdRef.markForCheck();
    }));
  }

  onObserverAdd(index: number) {
    this.observersValues = { ...this.observersValues, [index]: 123 };
    this.observable.subscribe(value => {
      this.observersValues = { ...this.observersValues, [index]: value };
    });
  }
}
