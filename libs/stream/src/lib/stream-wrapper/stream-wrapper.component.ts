import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arges-stream-wrapper',
  template: `
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./stream-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamWrapperComponent {

}
