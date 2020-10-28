import { Observable, Subject } from 'rxjs';

export interface StreamConfig<T> {
  stream?: Subject<T>;
  observable?: Observable<T>
  streamName: string;
  onEmitClick?: () => void;
  gridPlacement?: 'left' | 'right';
}
