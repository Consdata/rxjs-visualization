import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

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

  stream$: Observable<{ value: string | number, color: string }[]>;

  @Input('stream') set stream(stream: Observable<{ value: string | number, color: string }>) {
    this.stream$ = stream.pipe(scan((acc, value) => [...acc, value], []));
  }

}
