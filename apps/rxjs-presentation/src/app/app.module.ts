import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {SubjectComponent} from './subjects/subject/subject.component';
import {ReplaySubjectComponent} from './subjects/replay-subject/replay-subject.component';
import {BehaviorSubjectComponent} from './subjects/behavior-subject/behavior-subject.component';
import {AsyncSubjectComponent} from './subjects/async-subject/async-subject.component';
import {ShareReplayComponent} from './operators/share-replay/share-replay.component';
import {CombineLatestComponent} from './operators/combine-latest/combine-latest.component';
import {MergeComponent} from './operators/transformation/merge/merge.component';
import {WithLatestFromComponent} from './operators/with-latest-from/with-latest-from.component';
import {StreamModule} from '@arges/stream';
import {ZipComponent} from './operators/zip/zip.component';
import {FirstComponent} from './operators/filtering/first/first.component';
import {LastComponent} from './operators/filtering/last/last.component';
import {TakeUntilComponent} from './operators/filtering/take-until/take-until.component';
import {DebounceTimeComponent} from './operators/filtering/debounce-time/debounce-time.component';
import {ThrottleTimeComponent} from './operators/filtering/throttle-time/throttle-time.component';
import {ScanComponent} from './operators/transformation/scan/scan.component';
import {ConcatMapComponent} from './operators/transformation/concat-map/concat-map.component';

const routes: Routes = [
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplaySubjectComponent},
    {path: 'behavior-subject', component: BehaviorSubjectComponent},
    {path: 'async-subject', component: AsyncSubjectComponent},
    {path: 'share-replay', component: ShareReplayComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'combine-latest', component: CombineLatestComponent},
    {path: 'with-latest-from', component: WithLatestFromComponent},
    {path: 'first', component: FirstComponent},
    {path: 'last', component: LastComponent},
    {path: 'take-until', component: TakeUntilComponent},
    {path: 'debounce-time', component: DebounceTimeComponent},
    {path: 'throttle-time', component: ThrottleTimeComponent},
    {path: 'concat-map', component: ConcatMapComponent},
    {path: 'zip', component: ZipComponent},
    {path: 'scan', component: ScanComponent},
    {path: '**', redirectTo: 'subject'}
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
        WithLatestFromComponent,
        ZipComponent,
        FirstComponent,
        LastComponent,
        TakeUntilComponent,
        DebounceTimeComponent,
        ThrottleTimeComponent,
        ScanComponent,
        ConcatMapComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true}),
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
