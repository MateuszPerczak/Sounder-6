import { useEffect, useState } from "react";
import { debounceTime, Subject } from "rxjs";

const useDebounce = <T>(time: number, initialValue: T): [T, (v: T) => void] => {
  const [state, setState] = useState<T>(initialValue);
  const [subject] = useState(() => new Subject<T>());

  useEffect(() => {
    const subscription = subject.pipe(debounceTime(time)).subscribe(setState);
    return (): void => subscription.unsubscribe();
  }, [time, subject]);
  return [state, (v: T): void => subject.next(v)];
};

export default useDebounce;
