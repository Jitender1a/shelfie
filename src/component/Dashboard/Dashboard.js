import React from 'react'
import Product from '/ Product/Product'


export default function Dashboard(props){
    let {id,name,price,img}=props

    return(
    <div className='Dashboard'>
    <h4>Name</h4>
    <p>Price</p>
    <Product/>
    </div>
    
 )
}

