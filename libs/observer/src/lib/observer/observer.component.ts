import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arges-observer',
  template: `
    <p>
      observer works!
    </p>
  `,
  styleUrls: ['./observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserverComponent {


}
