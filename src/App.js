import React,{useState} from 'react';
import './App.css';
import Products from './components/products/products';
import CreateProducts from './components/createProduct/createProducts';
import FilterProducts from './components/filter/filterProducts';

function App() {
  
const products  = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 149.99,
    image: 'products/hd.jpg',
    qnty:7
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'products/sm.jpg',
    qnty:10
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: 'products/bts.jpg',
    qnty:0
  },
  {
    id: 4,
    name: 'Mobile phones',
    price: 12149.99,
    image: 'products/iphn.jpg',
    qnty:4
  },
  {
    id: 5,
    name: 'Mobile Covers',
    price: 199.99,
    image: 'products/cover.jpg',
    qnty:10
  },
  {
    id: 6,
    name: 'Temperd Glass',
    price: 23289.99,
    image: 'products/tmrd.jpg',
    qnty:0
  }
];
  let [newProduct,addnewProduct]=useState(products);
  let [filterdText,updateFilteredText] = useState("all");
  let filteredProduct = newProduct.filter((product)=>{
    if(filterdText === "Available"){
      return product.qnty > 0;
    }else if(filterdText === "Unavailable"){
      return product.qnty <= 0;
    }else{
      return product;
    }
  })

  function createProduct(product){
    addnewProduct([product,...newProduct]);
  }
  function filterdProductValue(filterValue){
    updateFilteredText(filterValue);
  }
  return (
    <div className='container'>
      <CreateProducts createNewProduct={createProduct}></CreateProducts>
      <FilterProducts filterdProduct={filterdProductValue}></FilterProducts>
      <Products newProduct={filteredProduct}></Products>
     </div>
  )
}

export default App;
