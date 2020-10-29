import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataInCircleComponent } from './data-in-circle/data-in-circle.component';
import { DataComponent } from './data/data.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DataInCircleComponent, DataComponent],
  exports: [
    DataInCircleComponent,
    DataComponent
  ]
})
export class StreamDataModule {
}
