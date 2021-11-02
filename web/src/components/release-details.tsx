/** @jsxImportSource solid-js */
/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/prevent-abbreviations */

import { format as formatDate } from 'date-fns';
import { Show } from 'solid-js';

import type { Release } from '../lib/types';

export function ReleaseDetails(props: { release: Release | undefined }) {
  return (
    <Show when={props.release !== undefined}>
      <section class="release-details">
        <section>
          <h3>{props.release.name}</h3>
          <time datetime={props.release.releaseDate}>
            {formatDate(new Date(props.release.releaseDate), 'MMMM yyyy')}
          </time>
        </section>

        <figure>
          <img src={props.release.artwork} />
        </figure>
      </section>
    </Show>
  );
}
