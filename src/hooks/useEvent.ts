import { Observable } from 'rxjs';
import { useEffect } from 'react';

export function useEvent(observable: Observable<void>, callback: () => void) {
  useEffect(() => {
    const subscription = observable.subscribe(callback);

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [observable, callback]);
}
