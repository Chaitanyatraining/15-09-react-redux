import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Product() {
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
                    </div>
                </div>
                ):<p>loading...</p>
            }
    </div>
  )
}

export default Product