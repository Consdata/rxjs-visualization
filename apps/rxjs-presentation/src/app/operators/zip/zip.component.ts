import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, Subject, zip} from 'rxjs';
import {randomColor, StreamValue} from '@arges/stream-data';
import {map} from 'rxjs/operators';
import {StreamConfig} from '@arges/stream';

@Component({
    selector: 'arges-zip',
    template: `
      <arges-stream-wrapper [description]="'Zip operator'"
                            [exampleCode]="exampleCode"
                            [exampleUsages]="exampleUsages"
                            [config]="config"
                            [observableConfig]="[zipConfig]">
      </arges-stream-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZipComponent {
    behaviorStream$ = new BehaviorSubject<StreamValue>({value: 0, color: 'white'});
    simpleStream$ = new Subject<StreamValue>();
    zip$ =
        zip(this.behaviorStream$.asObservable(), this.simpleStream$.asObservable())
            .pipe(
                map(([behaviorValue, simpleValue]) => (
                    {value: `${behaviorValue.value}+${simpleValue.value}`, color: simpleValue.color})))
    behaviorCounter = 1;
    simpleCounter = 1;

    config: StreamConfig<StreamValue>[] = [{
        stream: this.behaviorStream$,
        streamName: 'behaviorStream$',
        onEmitClick: () => {
            this.behaviorStream$.next({value: this.behaviorCounter++, color: randomColor()});
        }
    }, {
        stream: this.simpleStream$,
        streamName: 'simpleStream$',
        onEmitClick: () => this.simpleStream$.next({value: this.simpleCounter++, color: randomColor()})
    }];
    zipConfig: StreamConfig<StreamValue> = {
        observable: this.zip$,
        streamName: 'zip$'
    };
    exampleCode = `
  behaviorStream$ = new BehaviorSubject<StreamValue>({value: 0, color: 'white'}); \n
  simpleStream$ = new Subject<StreamValue>();\n
    zip$ =
        zip(this.behaviorStream$.asObservable(), this.simpleStream$.asObservable())
            .pipe(
                map(([behaviorValue, simpleValue]) => (
                    {value: \`\${behaviorValue.value}+\${simpleValue.value}\`, color: simpleValue.color})))
  `;

    exampleUsages = `
    When you want to combine emissions of observables into an array. You can use it as an alternative to forkJoin when listening to observables returned for example by httpClient.
  `;

}
