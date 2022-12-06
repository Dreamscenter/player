import { Observable, Subject } from 'rxjs';

export interface PlayerViewModel {
  progressPercentage?: Observable<number>;
  isPlaying: Observable<boolean>;

  play(): void;

  pause(): void;
  seek(progressPercentage: number): void;
}

export class MutablePlayerViewModel implements PlayerViewModel {
  progressPercentage = new Subject<number>();
  isPlaying = new Subject<boolean>();
  playEvent = new Subject<void>();
  pauseEvent = new Subject<void>();
  seekEvent = new Subject<number>();

  play(): void {
    this.playEvent.next();
  }

  pause(): void {
    this.pauseEvent.next();
  }

  seek(progressPercentage: number): void {
    this.seekEvent.next(progressPercentage);
  }
}
