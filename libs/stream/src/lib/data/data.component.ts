import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arges-data',
  template: `
    <div class="circle">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent {

}
