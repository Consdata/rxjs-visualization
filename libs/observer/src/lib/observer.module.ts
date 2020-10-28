import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './observer/observer.component';
import { AddObserverComponent } from './add-observer/add-observer.component';
import { MatButtonModule } from '@angular/material/button';
import { StreamDataModule } from '@arges/stream-data';

@NgModule({
  imports: [CommonModule, MatButtonModule, StreamDataModule],
  declarations: [ObserverComponent, AddObserverComponent],
  exports: [
    ObserverComponent,
    AddObserverComponent
  ]
})
export class ObserverModule {
}
