import './filterProducts.css';

let FilterProducts = (props)=>{
    function onChangeFilterValue(event){
         props.filterdProduct(event.target.value) ;
    }
    return (<div className="filter-area"> 
            <select className='form-control' name="isAvailable" onChange={onChangeFilterValue}>
                <option value={"All"}>All</option>
                <option value={'Available'}>Available</option>
                <option value={'Unavailable'}>Unavailable</option>
            </select>
        </div>
    )
}

export default FilterProducts;