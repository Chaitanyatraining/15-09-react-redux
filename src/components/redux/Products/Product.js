import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../productActions/ProductActions';

function Product() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [product,setproduct] = useState({});

    const getProductData = async()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setproduct(data);        
    }

    useEffect(()=>{
        getProductData();
    },[])

  return (
    <div>
        <h2>Product details Page</h2>
            {
                Object.keys(product).length?(
                <div className='row border border-primary mt-4'>
                    <div className='col-md-6 p-5 mt-2'>
                        <div>
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className='col-md-6 p-5 mt-3'>
                        <div className='mt-2'>
                            <h2>{product.title}</h2>
                        </div>
                        <div className='product_price'>
                            <span className='bg-info text-light p-2 '>
                                Price : ${product.price}
                            </span>
                        </div>
                        <div className='product_category bg-secondary text-white p-1 mt-3'>
                            category:{product.category}
                        </div>
                        <div className='product_desc p-1 mt-3'>
                            <strong>description:</strong>{product.description}
                        </div>
                        <div>
                            <button className='btn btn-info px-3' onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                ):<p>loading...</p>
            }
    </div>
  )
}

export default Product