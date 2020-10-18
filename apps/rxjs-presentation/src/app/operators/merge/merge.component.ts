import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arges-merge',
  template: `
    <p>
      merge works!
    </p>
  `,
  styleUrls: ['./merge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MergeComponent {

}
