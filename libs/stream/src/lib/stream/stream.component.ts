import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'arges-stream',
  template: `
    <ng-container *ngIf="stream$ | async as stream">
      <arges-data> {{stream.value}}</arges-data>
    </ng-container>
  `,
  styleUrls: ['./stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamComponent {

  stream$;
  @Output() emitted = new EventEmitter<{ value: unknown }>();

  @Input('stream') set stream(stream: Subject<{ value: unknown }>) {
    this.stream$ = stream.pipe(tap(x => {
      console.log(x);
      this.emitted.emit(x);
    }));
  }

}
