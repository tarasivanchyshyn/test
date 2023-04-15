import React, { useState } from 'react';

import Button from '../Button/Button';
import classes from './CreateModal.module.scss';

function Modal({ onClose, fetchProducts, onCreate }) {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const imageChangeHandler = (e) => setImageUrl(e.target.value);
  const nameChangeHandler = (e) => setName(e.target.value);
  const countChangeHandler = (e) => setCount(e.target.value);
  const widthChangeHandler = (e) => setWidth(e.target.value);
  const heightChangeHandler = (e) => setHeight(e.target.value);
  const weightChangeHandler = (e) => setWeight(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      imageUrl,
      name,
      count,
      size: { width, height },
      weight,
      comments: []
    };
    onCreate(data);

    setName('');
    setCount('');
    setWidth('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <h2 className={classes.header}>Create Product</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formInput}>
            <label htmlFor='image'>Image URL:</label>
            <input
              type='text'
              id='image'
              value={imageUrl}
              onChange={imageChangeHandler}
              required
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={nameChangeHandler}
              required
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor='count'>Count:</label>
            <input
              type='number'
              id='count'
              min={0}
              value={count}
              onChange={countChangeHandler}
              required
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor='width'>Width:</label>
            <input
              type='text'
              id='width'
              value={width}
              onChange={widthChangeHandler}
              required
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor='height'>Height:</label>
            <input
              type='text'
              id='height'
              value={height}
              onChange={heightChangeHandler}
              required
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor='weight'>Weight:</label>
            <input
              type='text'
              id='weight'
              value={weight}
              onChange={weightChangeHandler}
              required
            />
          </div>
          <div className={classes.actions}>
            <Button type='submit'>Create</Button>
            <Button secondary onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
