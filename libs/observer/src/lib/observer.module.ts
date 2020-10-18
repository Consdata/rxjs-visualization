import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './observer/observer.component';
import { AddObserverComponent } from './add-observer/add-observer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ObserverComponent, AddObserverComponent],
})
export class ObserverModule {}
