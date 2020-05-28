import React from 'react';

function hasChildren(item) {
  if (item.children.length) {
    return true;
  }
}

export function ItemsTree({ items }) {
  const itemsTree = items.map((item) => {
    return (
      <div key={item.id}>
        <li>{item.label}</li>
        {hasChildren(item) && <ItemsTree items={item.children} />}
      </div>
    );
  });

  return <ul>{itemsTree}</ul>;
}
