import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arges-add-observer',
  template: `
    <p>
      add-observer works!
    </p>
  `,
  styleUrls: ['./add-observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddObserverComponent {

}
