import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ListItem.module.scss';

function ListItem({ item, onDelete }) {
  return (
    <li className={classes.productListItem}>
      <h2 style={{ color: 'gray' }}>{item.name}</h2>
      <div className={classes.actions}>
        <Link to={`/products/${item.id}`} className={classes.link}>
          Show Details
        </Link>
        <button
          className={classes.buttonDelete}
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
