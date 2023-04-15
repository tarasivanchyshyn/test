import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './ProductView.module.scss';
import Button from '../../components/Button/Button';
import EditModal from '../../components/Modals/EditModal/EditModal';

function ProductView({ products, fetchProducts }) {
  const { productId } = useParams();
  const [editModalIsShown, setEditModalIsShown] = useState(false);
  const product = products?.find((el) => el.id === +productId);

  const toggleEditModal = () => setEditModalIsShown(!editModalIsShown);

  const editProductHandler = (data) => {
    const { imageUrl, name, count, size, weight } = data;
    fetch(`http://localhost:4000/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageUrl,
        name,
        count,
        size,
        weight
      })
    })
      .then(() => {
        fetchProducts();
        toggleEditModal();
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
  };

  const editModal = editModalIsShown ? (
    <EditModal
      product={product}
      onClose={toggleEditModal}
      onEdit={editProductHandler}
    />
  ) : (
    ''
  );

  return (
    <div className={classes.container}>
      {product ? (
        <>
          {editModal}
          <section className={classes.productCard}>
            <div style={{ display: 'flex' }}>
              <div className={classes.info}>
                <h1 className={classes.infoHeader}>{product.name}</h1>
                <ul>
                  <li className={classes.infoListItem}>
                    <h3>In stock:</h3>
                    <p>{product.count}</p>
                  </li>
                  <li className={classes.infoListItem}>
                    <h3>Sizes:</h3>
                    <ul>
                      <li>Width: {product.size.width}</li>
                      <li>Height: {product.size.height}</li>
                    </ul>
                  </li>
                  <li className={classes.infoListItem}>
                    <h3>Weight:</h3>
                    <p>{product.weight}</p>
                  </li>
                </ul>
              </div>
              <div>
                <img src={product.imageUrl} width={300} alt='product' />
              </div>
            </div>
            <div>
              <Button style={{ width: '5rem' }} onClick={toggleEditModal}>
                Edit
              </Button>
            </div>
          </section>
          <section className={classes.comments}>
            <h4 className={classes.commentsHeader}>Comments</h4>
            {product?.comments?.map((comment) => (
              <div key={comment.id} className={classes.comment}>
                <div className={classes.commentText}>{comment.description}</div>
                <p className={classes.commentDate}>{comment.date}</p>
              </div>
            ))}
          </section>
        </>
      ) : (
        <div>Loading product...</div>
      )}
    </div>
  );
}

export default ProductView;
