import React from "react";
import Product from "./Product";


function Products(props){
  console.log(props.newProduct);
      return (
        <div>
            <h1 className='firstHeader'>This is My first react project</h1>
            <p className='firstPara'>This is Paragraph</p>
            <div className='container p-container'>
              {products.map(element => (
                <Product key={element.id} id={element.id} name={element.name}
                price={element.price} qnty = {element.qnty} image={element.image} />
              ))}
            </div>
         </div>
      )
}


export default Products;