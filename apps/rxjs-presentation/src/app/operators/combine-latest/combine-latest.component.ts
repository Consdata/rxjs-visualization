import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'arges-combine-latest',
  template: `
    <div style="margin-top: 100px; height: 400px; border: 1px solid black; width: 400px">
      {{withLatest | async}}
    </div>
  `,
  styleUrls: ['./combine-latest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombineLatestComponent {

  stream$ = of('gowno').pipe(tap(console.log));
  stream2$ = interval(1000);

  withLatest = this.stream2$
    .pipe(
      tap(console.log),
      withLatestFrom(this.stream$, (v1, v2) => `${v2} oraz ${v1}`),
      tap(console.log));


}
