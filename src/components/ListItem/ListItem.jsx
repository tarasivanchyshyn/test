import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import classes from './ListItem.module.scss';

function ListItem({ item, onDelete }) {
  return (
    <li className={classes.productListItem}>
      <h2 style={{ color: 'gray' }}>{item.name}</h2>
      <div className={classes.actions}>
        <Link to={`/products/${item.id}`} style={{ border: 'none' }}>
          <Button>Show Details</Button>
        </Link>
        <Button secondary onClick={() => onDelete(item.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default ListItem;
