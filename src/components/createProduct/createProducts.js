import React from "react";
import ProductForm from "./productForm";

function CreateProducts(props){
    function createProduct(product){
        props.createNewProduct(product);
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-8 mx-auto" style={{backgroundColor : 'ghostwhite','padding':'20px'}}>
                     <ProductForm createProduct = {createProduct}></ProductForm>
                </div>
            </div>
        </div>
    )
}

export default CreateProducts;