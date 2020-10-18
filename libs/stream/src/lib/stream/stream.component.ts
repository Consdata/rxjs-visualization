import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arges-stream',
  template: `
    <p>
      stream works!
    </p>
  `,
  styleUrls: ['./stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamComponent {


}
