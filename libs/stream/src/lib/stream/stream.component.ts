import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-stream',
  template: `
    <ng-container *ngIf="stream$ | async as stream">
      <ng-container *ngFor="let single of stream; let index=index">
        <arges-data [index]="index" [color]="single.color"> {{single.value}}</arges-data>
      </ng-container>
    </ng-container>
  `,
  styleUrls: ['./stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamComponent {

  stream$: Observable<StreamValue[]>;

  @Input('stream') set stream(stream: Observable<StreamValue>) {
    this.stream$ = stream.pipe(scan((acc, value) => [...acc, value], <StreamValue[]>[]));
  }

}
