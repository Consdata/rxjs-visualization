import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './observer/observer.component';
import { AddObserverComponent } from './add-observer/add-observer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ObserverComponent, AddObserverComponent],
  exports: [
    ObserverComponent,
    AddObserverComponent
  ]
})
export class ObserverModule {}
