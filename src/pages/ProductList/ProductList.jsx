import React, { useState } from 'react';

import CreateModal from '../../components/Modals/CreateModal/CreateModal';
import ConfirmModal from '../../components/Modals/ConfirmModal/ConfirmModal';
import ListItem from '../../components/ListItem/ListItem';
import Button from '../../components/Button/Button';

import classes from './ProductsList.module.scss';

function ProductList({ items, fetchProducts }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentDeletingId, setCurrentDeletingId] = useState('');

  const closeCreateModal = () => setIsCreateModalOpen(false);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  const deleteProducthandler = (id) => {
    setIsConfirmModalOpen(true);
    setCurrentDeletingId(id);
  };

  const deleteProduct = () => {
    fetch(`http://localhost:4000/products/${currentDeletingId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).catch((error) => {
      console.error('Error creating product:', error);
    });
    closeConfirmModal();
    fetchProducts();
  };

  const createProductHandler = (data) => {
    const { imageUrl, name, count, size, weight, comments } = data;
    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageUrl,
        name,
        count,
        size,
        weight,
        comments
      })
    })
      .then(() => {
        fetchProducts();
        closeCreateModal();
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
  };

  const content = !items.length ? (
    <div>
      <h1>No products</h1>
    </div>
  ) : (
    <>
      {isCreateModalOpen ? (
        <CreateModal
          onClose={closeCreateModal}
          onCreate={createProductHandler}
        />
      ) : (
        ''
      )}
      {isConfirmModalOpen ? (
        <ConfirmModal
          onClose={closeConfirmModal}
          onDelete={() => deleteProduct(currentDeletingId)}
        />
      ) : (
        ''
      )}
      <div className={classes.container}>
        <h1 className={classes.header}>Products List</h1>
        <Button secondary onClick={() => setIsCreateModalOpen(true)}>
          Add product +
        </Button>
        <ul className={classes.productsList}>
          {items.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              onDelete={deleteProducthandler}
            />
          ))}
        </ul>
      </div>
    </>
  );

  return content;
}

export default ProductList;
