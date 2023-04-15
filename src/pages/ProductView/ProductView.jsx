import React from 'react';
import { useParams } from 'react-router-dom';

import classes from './ProductView.module.scss';

function ProductView({ products }) {
  const { productId } = useParams();
  const product = products?.find((el) => el.id === +productId);

  return (
    <div className={classes.container}>
      {product ? (
        <>
          <section className={classes.productCard}>
            <div className={classes.info}>
              <h1 className={classes.infoHeader}>{product.name}</h1>
              <ul>
                <li className={classes.infoListItem}>
                  <h3>Sizes:</h3>
                  <ul>
                    <li>Width: {product.size.width}</li>
                    <li>Height: {product.size.height}</li>
                  </ul>
                </li>
                <li className={classes.infoListItem}>
                  <h3>In stock:</h3>
                  <p>{product.count}</p>
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
          </section>
          <section className={classes.comments}>
            <h4 className={classes.commentsHeader}>Comments</h4>
            {product.comments.map((comment) => (
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
