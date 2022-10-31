import React from 'react'
import { useSelector } from 'react-redux'


function Cart() {
//we have a hook called as useSelector to access the redux state
    // we need to show the products if available else show the text
    //total price of the cart items

    const cart_data = useSelector((state) => state.ProductData.cartData);
    console.log(cart_data);

  return (
    <div>
      {
      cart_data && cart_data.length && (
        <div className='product_total'>
          <h2>Cart page</h2>
          <div className='mt-2'>
            <p>Total Price : {}</p>
            </div>
            </div>
      ) }
       
          <div className='container mt-2 border border-dark'>
            {
            cart_data && cart_data.length ? (
              cart_data.map((product)=>(
                <div className='row mt-3'>
                    <div className='col-md-4'>
                      <img src={product.image} alt={product.title} className="img-fluid" height="250px" />
                    </div>
                    <div className='col-md-6'>
                        <h2>Title: {product.title}</h2>
                        <div className='mt-2'>
                            <span>category : {product.category}</span>
                        </div>
                        <div className='mt-2'>
                            <span>description : {product.description}</span>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='p-3'>
                            <p>Price:{product.price}</p>
                        </div>
                        <button className='btn btn-danger'>Remove</button>
                    </div>
                </div>
              ))
            ):(<p>please add some products to the cart</p>)
            } 
          </div>
      
    </div>
  )
}

export default Cart