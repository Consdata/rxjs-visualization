import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'arges-data',
  template: `
    <div class="line" *ngIf="index > 0"></div>
    <arges-data-in-circle [color]="color">
      <ng-content></ng-content>
    </arges-data-in-circle>
  `,
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent {

  @Input() index = 0;
  @Input() color;

}
