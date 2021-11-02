/** @jsxImportSource solid-js */
/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/prevent-abbreviations */
import { createEffect, createMemo, createSignal, For } from 'solid-js';

import type { Release as ReleaseData } from '../lib/types';
import { Release } from './release';
import { ReleaseDetails } from './release-details';

interface Props {
  releases: ReleaseData[];
}

type Event = { type: 'select'; index: number };

export function ReleaseList(props: Props) {
  let listElement: HTMLUListElement;
  const [selected, setSelected] = createSignal<null | number>(null);
  const state = createMemo(() => (selected() === null ? 'list' : 'detail'));
  const selectedRelease = createMemo(() => props.releases[selected()]);

  function dispatch(event: Event) {
    if (state() === 'list' && event.type === 'select') {
      setSelected(event.index);
    }
  }

  createEffect(() => {
    if (!listElement) return;

    if (state() === 'detail') {
      console.log('detail transistion');
    }

    if (state() === 'list') {
      console.log('list transistion');
    }
  });

  return (
    <>
      <ul class="[ cluster ] [ ls-n ]" ref={listElement}>
        <For each={props.releases}>
          {(release, index) => (
            <li onClick={() => dispatch({ type: 'select', index: index() })}>
              <Release {...release} />
            </li>
          )}
        </For>
      </ul>

      <ReleaseDetails release={selectedRelease()} />
    </>
  );
}
