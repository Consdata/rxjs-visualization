import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'arges-data-in-circle',
  template: `
    <div class="circle" [style.background-color]="color || 'white'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./data-in-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataInCircleComponent {

  @Input() color;

}
