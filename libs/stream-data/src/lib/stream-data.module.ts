import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataInCircleComponent } from './data-in-circle/data-in-circle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DataInCircleComponent],
  exports: [
    DataInCircleComponent
  ]
})
export class StreamDataModule {}
