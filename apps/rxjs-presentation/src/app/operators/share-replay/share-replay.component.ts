import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { StreamValue } from '@arges/stream-data';
import { delay, share, shareReplay } from 'rxjs/operators';
import { StreamConfig } from '@arges/stream';

@Component({
  selector: 'arges-share-replay',
  template: `
    <arges-stream-wrapper [description]="'Share oraz ShareReplay operator'"
                          [exampleCode]="exampleCode"
                          [observableConfig]="shareReplayConfig">
    </arges-stream-wrapper>
  `,
  styleUrls: ['./share-replay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareReplayComponent {
  shared$ = of({ value: 9000, color: 'white' })
    .pipe(
      delay(5000),
      share()
    );
  sharedReplayed$ = of({ value: 999, color: 'white' })
    .pipe(
      delay(5000),
      shareReplay(1)
    );
  shareReplayConfig: StreamConfig<StreamValue>[] = [
    {
      observable: this.shared$,
      streamName: 'shared$',
      gridPlacement: 'left'
    },
    {
      observable: this.sharedReplayed$,
      streamName: 'sharedReplayed$',
      gridPlacement: 'left'
    }];
  exampleCode = `
    shared$ = of({ value: 9000, color: 'white' })
      .pipe(
        delay(5000),
        share()
      );
    sharedReplayed$ = of({ value: 999, color: 'white' })
      .pipe(
        delay(5000),
        shareReplay(1)
      );
  `;


}
