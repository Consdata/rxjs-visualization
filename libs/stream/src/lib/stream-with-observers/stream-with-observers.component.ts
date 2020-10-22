import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { ConnectedPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'arges-stream-with-observers',
  template: `
    <div class="wrapper">
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px">
        <div class="stream-title">{{streamName}}</div>
        <div class="observers">
          <ng-container *ngFor="let observer of stream.observers; let index= index">
            <arges-observer [observer]="observer" [value]="observersValues[index]"></arges-observer>
          </ng-container>
        </div>
        <div style="display: flex; flex-direction: column">
          <arges-add-observer [disabled]="stream.isStopped"
                              (addedObserver)="onObserverAdd($event)"></arges-add-observer>
          <button mat-flat-button [color]="'primary'" [disabled]="stream.isStopped" (click)="emitClick.next()"
                  style="margin-top: 15px">
            Wyemituj
          </button>
          <button mat-flat-button [color]="'primary'" [disabled]="stream.isStopped" (click)="onStreamCompleteClick()"
                  style="margin-top: 15px">Zakończ strumień
          </button>
        </div>
      </div>
      <div class="stream-wrapper" cdk-overlay-origin #origin="cdkOverlayOrigin">
        <arges-stream [stream]="stream" (emitted)="onEmission($event)"></arges-stream>
      </div>
    </div>
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
export class StreamWithObserversComponent implements AfterViewChecked {
  @Input() streamName: string;
  @Input() stream: Subject<{ value: unknown }>;
  @Output() emitClick = new EventEmitter<void>();
  positions: ConnectedPosition[] = [{
    originX: 'end',
    originY: 'center',
    overlayX: 'center',
    overlayY: 'center'
  }];
  observersValues: { [key: string]: { value: unknown } } = {};

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    // coby obserwatorzy sie odswiezyli
    this.cdRef.detectChanges();
  }

  onObserverAdd(index: number) {
    this.observersValues = { ...this.observersValues, [index]: 123 };
    this.stream.subscribe(value => {
      this.observersValues = { ...this.observersValues, [index]: value };
    });
  }

  onStreamCompleteClick() {
    this.stream.complete();
  }

  onEmission(emitted: { value: unknown }) {
    this.observersValues = { ...this.observersValues, [0]: emitted };
  }
}
