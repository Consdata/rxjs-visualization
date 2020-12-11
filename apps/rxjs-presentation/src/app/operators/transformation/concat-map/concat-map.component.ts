import {ChangeDetectionStrategy, Component} from '@angular/core';
import {of, Subject} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {concatMap, delay} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';

@Component({
    selector: 'arges-concat-map',
    template: `
      <arges-stream-wrapper [description]="'ConcatMap operator'"
                            [exampleCode]="exampleCode"
                            [config]="config"
                            [exampleUsages]="exampleUsages"
                            [observableConfig]="[concatMapConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConcatMapComponent {
    values$ = new Subject<StreamValue>();
    concatMap$ = this.values$.asObservable()
        .pipe(
            concatMap(value => of({value: `${value.value}map`, color: value.color}).pipe(delay(1000))));
    simpleCounter = 1;
    config: StreamConfig<StreamValue>[] = [{
        stream: this.values$,
        streamName: 'values$',
        onEmitClick: () => {
            this.values$.next({value: this.simpleCounter++, color: randomColor()});
        }
    }];
    concatMapConfig: StreamConfig<StreamValue> = {
        observable: this.concatMap$,
        streamName: 'concatMap$'
    };
    exampleCode = `
    values$ = new Subject<StreamValue>();
    concatMap$ = this.values$.asObservable()
        .pipe(
            concatMap(value => of({value: \`\${value.value} mapped\`, color: value.color}).pipe(delay(1000))));
  `;

    exampleUsages = `
    When you want to react to every single value with creating another observable stream, like sending data straight to server, while waiting for every single emission to complete, then reacting to the next value emitted. For example: sending changes emitted from a form.valueChanges stream to server.
  `;
}
