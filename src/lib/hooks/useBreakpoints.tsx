/* eslint-disable consistent-return */
import React, { useContext, useEffect, useState, createContext } from 'react';
import { ThemeContext } from 'styled-components';

//
// HOOK
//

function registerMediaQuery(query: string, cb: () => void) {
  const mql = window.matchMedia(query);
  const listener = ({ matches }: { matches: boolean }) => {
    if (matches) cb();
  };

  mql.addListener(listener);
  listener(mql);

  return () => mql.removeListener(listener);
}

interface Theme {
  breakpoints: Record<string, number>;
}

export function useBreakpoints() {
  const { breakpoints: unsortedBreakpoints } = useContext<Theme>(ThemeContext);
  const firstBreakpointName = Object.keys(unsortedBreakpoints)[0];
  const [breakpoint, setBreakpoint] = useState<string>(firstBreakpointName);

  useEffect(() => {
    if (!window) return;

    const removeListenerFns: (() => void)[] = [];

    Object.keys(unsortedBreakpoints)
      .map((name) => [name, unsortedBreakpoints[name]] as [string, number])
      .sort(([, a], [, b]) => a - b)
      .forEach(([name, value], i, breakpoints) => {
        if (i === 0) {
          removeListenerFns.push(
            registerMediaQuery(`(max-width: ${value}px)`, () => {
              setBreakpoint(name);
            }),
          );
        } else if (i === breakpoints.length - 1) {
          removeListenerFns.push(
            registerMediaQuery(`(min-width: ${value}px)`, () => {
              setBreakpoint(name);
            }),
          );
        } else {
          const [, prevValue] = breakpoints[i - 1];
          removeListenerFns.push(
            registerMediaQuery(`(min-width: ${prevValue}px) and (max-width: ${value}px)`, () => {
              setBreakpoint(name);
            }),
          );
        }
      });

    return () => {
      removeListenerFns.forEach((removeListenerFn) => removeListenerFn());
    };
  }, [unsortedBreakpoints]);

  return breakpoint;
}

//
// CONTEXT
//

interface BreakpointProviderProps {
  children: React.ReactNode;
}

export const BreakpointContext = createContext('');

export const BreakpointProvider = ({ children }: BreakpointProviderProps) => {
  const breakpoint = useBreakpoints();

  return <BreakpointContext.Provider value={breakpoint}>{children}</BreakpointContext.Provider>;
};
