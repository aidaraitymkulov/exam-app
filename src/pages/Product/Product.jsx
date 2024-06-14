import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.scss';
import { Card } from '../../components/Card';

export const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setProducts(response.data.slice(0, 20))
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

      fetchProducts()
  },[])


  return (
    <div className='container'>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Product;