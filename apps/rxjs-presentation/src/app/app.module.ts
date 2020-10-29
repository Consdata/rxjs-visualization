import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { SubjectComponent } from './subjects/subject/subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './subjects/async-subject/async-subject.component';
import { ShareReplayComponent } from './operators/share-replay/share-replay.component';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { MergeComponent } from './operators/merge/merge.component';
import { WithLatestFromComponent } from './operators/with-latest-from/with-latest-from.component';
import { StreamModule } from '@arges/stream';

const routes: Routes = [
  { path: 'subject', component: SubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent },
  { path: 'share-replay', component: ShareReplayComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'with-latest-from', component: WithLatestFromComponent },
  { path: '**', redirectTo: 'subject' }
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    BehaviorSubjectComponent,
    AsyncSubjectComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    MergeComponent,
    WithLatestFromComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    StreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
