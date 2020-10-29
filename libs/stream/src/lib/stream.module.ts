import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamWrapperComponent } from './stream-wrapper/stream-wrapper.component';
import { StreamComponent } from './stream/stream.component';
import { ObserverModule } from '@arges/observer';
import { MatButtonModule } from '@angular/material/button';
import { StreamWithObserversComponent } from './stream-with-observers/stream-with-observers.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ObservableStreamComponent } from './observable-stream/observable-stream.component';
import { MatCardModule } from '@angular/material/card';
import { StreamDataModule } from '@arges/stream-data';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    ObserverModule,
    MatButtonModule,
    OverlayModule,
    MatCardModule,
    StreamDataModule,
    MatTooltipModule
  ],
  declarations: [
    StreamWrapperComponent,
    StreamComponent,
    StreamWithObserversComponent,
    ObservableStreamComponent
  ],
  exports: [
    StreamWrapperComponent,
    StreamComponent,
    ObservableStreamComponent
  ]
})
export class StreamModule {
}
