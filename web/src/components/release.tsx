/** @jsxImportSource solid-js */
/* eslint-disable unicorn/prevent-abbreviations */
import { getYear } from 'date-fns';

import type { ReleaseWithImageUrl } from '../lib/types';
import styles from './release.module.scss';

export function Release(props: ReleaseWithImageUrl) {
  const releaseYear = getYear(new Date(props.releaseDate));

  return (
    <article class={styles.release}>
      <section>
        <h3>{props.name}</h3>
        <time datetime={props.releaseDate}>{releaseYear}</time>
      </section>

      <figure>
        <img src={props.artwork} />
      </figure>
    </article>
  );
}
