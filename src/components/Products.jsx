import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Cards from './cards/CardComponent'

function Products() {

    const GetDataAPI = () => {
        return axios.get("https://fakestoreapi.com/products/category/women's clothing")
    }

    const {data} = useQuery(
        "Data-Cloth",
        GetDataAPI
    )


    return (
        <Cards Data={data?.data} />
    )
}

export default Products
