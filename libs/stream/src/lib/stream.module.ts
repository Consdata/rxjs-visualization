import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamWrapperComponent } from './stream-wrapper/stream-wrapper.component';
import { StreamComponent } from './stream/stream.component';
import { DataComponent } from './data/data.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StreamWrapperComponent, StreamComponent, DataComponent],
})
export class StreamModule {}
