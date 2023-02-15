import React, { useEffect, useState } from 'react'
import styleHome from './home.module.css'
import img from '../imges/arrival-bg2-removebg-preview.png'
import Cards from './cards/CardComponent'
import axios from 'axios'

function Home() {

    const [api , setApi] = useState('')

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            setApi(res.data)
        })
    },[])
    
    

    const Styles = {
        height: "calc(100vh - 82px)"
    }

    const style2 = {
        objectFit: "cover",
        zIndex: "0",
        position: "absolute",
        width: "100%",
        height: "100%",
        objectPosition: 'top center'
    }


    const DataText = [
        {
            id: 1,
            title: "Sale 30% Off",
            about: "On Everything",
            p: "quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto"
        },
        {
            id: 2,
            title: "Sale 40% Off",
            about: "On Everyday",
            p: "esse amet tempora quibusdam laudantium,giat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto."
        },
    ]

    const DataCards = [
        {
            id: 1,
            svg: "fa-solid fa-truck",
            title: "Fast Delivery",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi."
        },
        {
            id: 2,
            svg: "fa-brands fa-freebsd",
            title: "Free Shiping",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi."
        },
        {
            id: 3,
            svg: "fa-solid fa-medal",
            title: "Best Quality",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi."
        },
    ]


    

    return (
        <>
            <section style={Styles}>
                <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <span data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></span>
                        <span data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></span>
                        <span data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></span>
                    </div>
                    <div className="carousel-inner h-100">
                        <img style={style2} src="https://wallpaperaccess.com/full/427324.jpg" alt="" />
                        <div className="carousel-item active h-100 ">
                            <div className={`d-flex justify-content-end h-100 ${styleHome.parentText}`}>
                                <div className={`h-100 d-flex flex-column justify-content-center me-5 ${styleHome.text}`}>
                                    <h3 className={styleHome.h3}>Sale 20% Off</h3>
                                    <h2 className={styleHome.h2}>On Everything</h2>
                                    <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit </p>
                                </div>
                            </div>
                        </div>

                        {DataText.map((item) => {
                            return (
                                <div key={item.id} className="carousel-item h-100">
                                    <div className={`d-flex justify-content-end h-100 ${styleHome.parentText}`}>
                                        <div className={`h-100 d-flex flex-column justify-content-center me-5 ${styleHome.text}`}>
                                            <h3 className={styleHome.h3}>{item.title}</h3>
                                            <h2 className={styleHome.h2}>{item.about}</h2>
                                            <p>{item.p}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
            <div>
                <h1 className='text-center my-5 fw-bold'>why shop with us</h1>
                <div>
                    <div className='container'>
                        <div className='row w-100 m-0'>
                            {DataCards.map((item) =>
                                <div key={item.id} className="col-lg-4 mb-4">
                                    <div className={styleHome.card}>
                                        <div className="card-img d-flex justify-content-center mb-4">
                                            <i className={`${item.svg}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p className="card-text text-center px-5">{item.p}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styleHome.NewArrival}>

                <div className='container p-4 h-100'>
                    <div className='row h-100 d-flex align-items-center'>

                        <div className='col-md-5 d-none d-md-block h-100'>
                            <div className="left h-100">
                                <img className='w-100 h-100' src={img} alt="" />
                            </div>
                        </div>

                        <div className='col-md-6 col-12 h-100'>
                            <div className="right d-flex flex-column align-items-start justify-content-center h-100">
                                <h2 className='mb-4'>#NewArrivals</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatem, maxime aliquid nulla obcaecati consequatur nobis dolorem delectus eos modi?</p>
                                <a href='#Cards' className='btn btn-danger mt-2 text-white'>Shop Now</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Cards  Data={api}/>
            
        </>
    )
}

export default Home
