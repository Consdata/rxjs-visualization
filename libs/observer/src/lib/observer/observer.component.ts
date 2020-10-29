import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StreamValue } from '@arges/stream-data';

@Component({
  selector: 'arges-observer',
  template: `
    <div style="display: flex; flex-direction: column">
      <div style="align-self: center; height: 45px">
        <arges-data-in-circle *ngIf="value" [color]="value.color">
          {{value.value}}
        </arges-data-in-circle>
      </div>
      <img src="./assets/human.png" alt="image" width="90px">
    </div>
  `,
  styleUrls: ['./observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserverComponent {

  @Input() value: StreamValue;

}
