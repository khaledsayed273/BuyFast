import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Cards from './cards/CardComponent'

function Products() {

    const [api , setApi] = useState('')

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/women's clothing").then(res => {
            setApi(res.data)
        })
    },[])


    return (
        <Cards Data={api} />
    )
}

export default Products
