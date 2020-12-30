import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({product, hideButton}) {

  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: product.id
    })
  }

  return (
    
    <div className="checkoutProduct">
      <div className="checkoutProduct__img">
        <img 
          className="product__image"
          alt="product"
          src={product.image}
        />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{ product?.title }</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{ product.price }</strong>
        </p>
        <div className="product__rating">
          { Array(product.rating).fill().map((_,i) => ( <StarIcon key={i}/> )) }
          { Array(5 - product.rating).fill().map((_,i) => ( <StarBorderIcon key={i}/> )) }
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove from basket</button>}
      </div>
    </div>
  )
}

export default CheckoutProduct
