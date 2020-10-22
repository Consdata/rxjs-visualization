import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamWrapperComponent } from './stream-wrapper/stream-wrapper.component';
import { StreamComponent } from './stream/stream.component';
import { DataComponent } from './data/data.component';
import { ObserverModule } from '@arges/observer';
import { MatButtonModule } from '@angular/material/button';
import { StreamWithObserversComponent } from './stream-with-observers/stream-with-observers.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, ObserverModule, MatButtonModule, OverlayModule],
  declarations: [StreamWrapperComponent, StreamComponent, DataComponent, StreamWithObserversComponent],
  exports: [
    StreamWrapperComponent,
    StreamComponent
  ]
})
export class StreamModule {}
