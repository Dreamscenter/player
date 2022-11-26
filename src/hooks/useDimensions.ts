import { useCallback, useEffect, useState } from 'react';

export class Dimensions {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

export function useDimensions(): [Dimensions | undefined, (arg: Element | null) => void] {
  const [element, setElement] = useState<Element>();
  const [dimensions, setDimensions] = useState<Dimensions>();

  useEffect(() => {
    if (element) {
      setDimensions(new Dimensions(element.clientWidth, element.clientHeight));

      const resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        setDimensions(new Dimensions(entry.contentRect.width, entry.contentRect.height));
      });

      resizeObserver.observe(element);

      return function cleanup() {
        resizeObserver.disconnect();
      };
    }
  }, [element]);

  const ref = useCallback((value: Element | null) => setElement(value ?? undefined), []);

  return [dimensions, ref];
}
