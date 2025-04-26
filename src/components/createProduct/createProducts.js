import React,{useState} from "react";
import ProductForm from "./productForm";

function CreateProducts(props){
    function createProduct(product){
        props.createNewProduct(product);
    }
    let [showForm,updateShowForm] = useState(false);
    function createPrdct(){
        updateShowForm(true);
    }
    function clearProductForm(){
        updateShowForm(false);
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-8 mx-auto" style={{backgroundColor : 'ghostwhite','padding':'20px'}}>
                    {!showForm && <button className="btn btn-primary" onClick={createPrdct}>Create Product</button>}
                     {showForm && <ProductForm createProduct = {createProduct} clearProductForm={clearProductForm}></ProductForm>}
                </div>
            </div>
        </div>
    )
}

export default CreateProducts;