import React,{useState} from 'react';
import './product.css';
import Button  from './button';

let style = {
    padding: '5px 10px',
    fontSize:15
}
function Product(pros){

    // let productCount = 0;
    let [productCount,UpdateProductCount] = useState(0);
    function productCountCheck(){
     return productCount > 0 ? productCount : "Zero";
    }
    function productIncrement(){
        UpdateProductCount(++productCount);
        console.log('clicked ',productCount);
    }
    function productDecrement(){
        UpdateProductCount(--productCount);
    }
    let classNme = 'badge ';
    classNme += pros.qnty > 0 ? 'bg-success' : 'bg-danger';
    return (
        <div >
            <div className="product-grid">
                <div className="product-card">
                    <span className={classNme}>{pros.qnty > 0 ? 'Available' : 'Unavailable'}</span>
                    <img className="product-image" src={(pros.image)} />
                    <h3 className="product-name">{pros.name}</h3>
                    <p className="product-price">{pros.price}</p>
                    <button className="buy-button">Buy Now</button>
                    <div className='d-flex product-count-box mt-2'>
                        <Button eventListner={productDecrement} >-</Button>
                        <span style={style}>{productCountCheck()}</span>
                        <Button eventListner={productIncrement} disable={pros.qnty === 0}>+</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;