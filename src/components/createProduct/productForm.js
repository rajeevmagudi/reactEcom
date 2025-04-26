import React, {useState} from "react";

function ProductForm(props){
    let [pName,updatedPName] = useState('');
    let [pPrice,updatedPPrice] = useState('');
    let [pDesc,updatedPDesc] = useState('');
    let [pQnty,updatedPQnty] = useState(0);
    let [pImage,updatedPImage] = useState('');
    // let [userInput,updatedUserInput] = useState({
    //     pName:'',pDesc:'',pPrice:'',pQnty:0,pFile:''
    // });
    function nameChnaged(event){
        updatedPName(event.target.value);
        // updatedUserInput({...userInput,pName:event.target.value});
        // updatedUserInput((prevState)=>{ return {...prevState,pName:event.target.value}})
    }
    function priceChnaged(event){
        updatedPPrice(event.target.value);
        // updatedUserInput({...userInput,pPrice:event.target.value});
    }
    function descChnaged(event){
        updatedPDesc(event.target.value);
        // updatedUserInput({...userInput,pDesc:event.target.value});
    }
    function qntyChnaged(event){
        updatedPQnty(event.target.value);
        // updatedUserInput({...userInput,pQnty:event.target.value});
    }
    function fileChnaged(event){
        updatedPImage(event.target.value);
        // updatedUserInput({...userInput,pFile:event.target.value});
    }
    function submitForm(event){
        event.preventDefault();
        let product = { id: 2,
        name: pName,
        price: pPrice,
        image: pImage,
        qnty:pQnty}
        updatedPDesc('');
        updatedPImage('');
        updatedPName('');
        updatedPPrice('');
        updatedPQnty('');
        props.createProduct(product);
        props.clearProductForm();
    }
    return (<div>
        <form className="row g-3" onSubmit={submitForm}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    onChange={nameChnaged} value={pName}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" value={pPrice}
                    placeholder="Product Price" onChange={priceChnaged} />
        </div>
        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" value={pDesc}
                    placeholder="Product Description" onChange={descChnaged} />
        </div>
        <div className="form-group">
        <label for="qnty">Is product available in qnty</label>
            <input type="number" 
                    className="form-control" 
                    id="qnty" value={pQnty}
                    placeholder="Product Qnty" onChange={qntyChnaged} />
        </div>
        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" value={pImage} className="form-control" id="select-image" onChange={fileChnaged} />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Product</button>
        <button className="btn btn-warning" type="button" onClick={props.clearProductForm}>Cancel</button>
    </form>
    </div>)
}

export default ProductForm;