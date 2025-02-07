import { useEffect, RefObject } from 'react';

type Refs = RefObject<HTMLElement>[] | RefObject<HTMLElement>;

export const useClickOutside = (refs: Refs, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refsArray = Array.isArray(refs) ? refs : [refs];
      
      const isOutside = refsArray.every(ref => 
        !ref.current || !ref.current.contains(event.target as Node)
      );

      if (isOutside) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler]);
};