import { Subject } from 'rxjs';

export interface StreamConfig<T> {
  stream: Subject<T>;
  streamName: string;
  onEmitClick: () => void;
}
