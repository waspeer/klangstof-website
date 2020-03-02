import classNames from '@sindresorhus/class-names';
import React from 'react';

import { ListWrapper, NoItemsWrapper } from './_styles';

interface Props<I = any> {
  bordered?: boolean;
  createKey?: (item: I) => string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  items?: I[];
  large?: boolean;
  loading?: boolean;
  renderItem?: (item: I, key: string) => React.ReactNode;
  small?: boolean;
  split?: boolean;
}

const List = ({
  bordered,
  createKey,
  footer,
  header,
  items = [],
  large,
  loading,
  renderItem,
  small,
  split = true,
}: Props) => {
  const classes = classNames({ bordered, large, loading, small, split });

  return (
    <ListWrapper className={classes} data-testid="list">
      {header && <div className="header">{header}</div>}
      <div className="loadContainer">
        {items.length ? (
          <ul>
            {items.map((item, index) => {
              let key: string;

              if (createKey) key = createKey(item);
              else if (item.id) key = `list-item-${item.id}`;
              else key = `list-item-${index}`;

              return <li key={key}>{renderItem ? renderItem(item, key) : item}</li>;
            })}
          </ul>
        ) : (
          <NoItemsWrapper data-testid="noItems">
            <span role="img" aria-label="Shrug">
              🤷‍♂️
            </span>{' '}
            no items
          </NoItemsWrapper>
        )}
      </div>
      {footer && <div className="footer">{footer}</div>}
    </ListWrapper>
  );
};

export default List;
