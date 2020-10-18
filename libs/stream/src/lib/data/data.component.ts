import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'arges-data',
  template: `
    <div class="circle">{{data}}</div>
  `,
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent {

  @Input() data: string | number;
}
