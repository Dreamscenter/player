import { Observable } from 'rxjs';
import { useEffect } from 'react';

export function useEvent<T>(observable: Observable<T>, callback: (arg: T) => void) {
  useEffect(() => {
    const subscription = observable.subscribe(callback);

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [observable, callback]);
}
