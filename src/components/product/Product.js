import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product({ title, image, price, rating }) {
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
      <button>Add to basket</button>
    </div>
  )
}

export default Product
