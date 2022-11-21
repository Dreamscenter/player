import { Observable, Subject } from 'rxjs';

export interface PlayerViewModel {
  progressPercentage?: Observable<number>;
  isPlaying?: Observable<boolean>;

  play(): void;

  pause(): void;
}

export class MutablePlayerViewModel implements PlayerViewModel {
  progressPercentage?: Subject<number> = new Subject<number>();
  isPlaying?: Subject<boolean> = new Subject<boolean>();
  playEvent: Subject<void> = new Subject();
  pauseEvent: Subject<void> = new Subject();

  play(): void {
    this.playEvent.next();
  }

  pause(): void {
    this.pauseEvent.next();
  }
}
