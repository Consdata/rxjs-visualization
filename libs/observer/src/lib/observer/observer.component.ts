import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'arges-observer',
  template: `
    <div style="display: flex; flex-direction: column">
      <div style="align-self: center">{{value?.value}}</div>
      <img src="/assets/human.png" alt="image" width="100px">
    </div>
  `,
  styleUrls: ['./observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserverComponent {

  @Input() value: { value: unknown };

  @Input() observer: Observer<{ value: number }>;

}
