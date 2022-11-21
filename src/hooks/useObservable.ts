import { Observable } from 'rxjs';
import { useEffect, useState } from 'react';

export function useObservable<T>(observable?: Observable<T>): T | null {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    const subscription = observable?.subscribe(setValue);

    return function cleanup() {
      subscription?.unsubscribe();
    };
  }, [observable]);

  return value;
}
