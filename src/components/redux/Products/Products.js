import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products,setProducts] = useState([]);
    const getProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(()=>{
        getProducts();
    },[])


  return (
    <div>
        <h2 className='text-primary'>Products</h2>
        <div className='container'>
            <div className='row'>
            {
            products.length>0 ? 
            products.map((product)=>(
                <div className='col-md-3'>
                    <Link to={`/product/${product.id}`}>
                    <div key={product.id} className='card my-3'>
                        <img src={product.image} class="card-img-top" alt={product.category} />
                    <div className='card-body'>
                    <h5 class="card-title">{product.title}</h5>

                    </div>
                    </div>
                    </Link>
                </div>
            )):<p>loading</p>
        }
            </div>
        </div>
        
    </div>
  )
}

export default Products