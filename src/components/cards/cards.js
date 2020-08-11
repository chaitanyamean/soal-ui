import React, {useEffect, useState} from 'react'

import CardItems from '../card-items/card-item';

import {products, categories, getProductsByCategoryId} from '../../api';
import './cards.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const Cards = () => {

const [productsData, setProducts] = useState([])
const [categoryData, setCategories] = useState([])
const [categoryId, setCategoryId] = useState([])
const [isLoading, setLoading] = useState(false)



const [sort, setSort] = React.useState('NONE');

const handleFilter = async (filteredId) => {
    setLoading(true)
    const response = await getProductsByCategoryId(filteredId)
    setProducts(response);
    setLoading(false)
}

    useEffect(()  => {
        async function fetchData() {
            const response = await products();
             setProducts(response)
          }
          fetchData();

          async function fetchCategories() {
            const response = await categories();
            setCategories(response);
          }
          fetchCategories();

    },[])


    const loadingMessage = (
        <div>Loading....</div>
    ) 

    const cards = (

            <React.Fragment>
                <div className="dropdown-cls">

            <DropdownButton id="dropdown-basic-button" title="select by category">
            <Dropdown.Item onClick={()=> handleFilter('All')}>All</Dropdown.Item> 
            {categoryData && categoryData.length > 0 ?
                categoryData.map((category) =>
                <Dropdown.Item onClick={()=> handleFilter(category.categoryId)}>{category.categoryName}</Dropdown.Item> )
                : null            
            }
            </DropdownButton>
            </div>
            <div className="container row">
             {productsData && productsData.length > 0 ? productsData.map((product) => <CardItems product={product}/>) :
              <div>Sorry No Products</div>}
            </div>
            </React.Fragment>
    )



    return isLoading ? loadingMessage : cards;
}


export default Cards