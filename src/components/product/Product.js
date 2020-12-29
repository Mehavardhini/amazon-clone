import React, { useState } from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckIcon from '@material-ui/icons/Check';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {

  const [state, dispatch] = useStateValue();
  const [showMessage, setShowMessage] = useState(false);

  const addToBasket = () => {
    setShowMessage(true);

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id, title, image, price, rating
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{ title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>
      </div>
      <div className="product__rating">
        { Array(rating).fill().map((_,i) => ( <StarIcon key={i}/> )) }
        { Array(5 - rating).fill().map((_,i) => ( <StarBorderIcon key={i}/> )) }
      </div>
      <img 
        className="product__image"
        alt="product"
        src={image}
      />
      <div className="product__incart" style={{ display: showMessage ? 'flex' : 'none' }}>
        <CheckIcon />
        <span>Added to cart</span>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
