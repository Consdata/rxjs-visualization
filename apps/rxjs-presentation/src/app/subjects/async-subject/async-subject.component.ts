import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'arges-async-subject',
  template: `
    <p>
      async-subject works!
    </p>
  `,
  styleUrls: ['./async-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncSubjectComponent {

}
