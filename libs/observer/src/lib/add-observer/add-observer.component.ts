import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'arges-add-observer',
  template: `
    <button mat-flat-button [color]="'primary'" [disabled]="disabled" (click)="onAddClick()"> Dodaj
      obserwatora
    </button>
  `,
  styleUrls: ['./add-observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddObserverComponent {
  @Input() disabled;

  index = 0;
  @Output() addedObserver = new EventEmitter<number>();

  onAddClick() {
    this.index += 1;
    this.addedObserver.emit(this.index);
  }
}
