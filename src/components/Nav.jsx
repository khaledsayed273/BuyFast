import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styleNav from "./nav.module.css"
import { Store } from '../store/store';
import { Button, CardHeader, Typography } from '@mui/material';


function Nav() {
    //   https://themewagon.github.io/famms/index.html

    const { Added } = useContext(Store)
    const { setAddToCart } = useContext(Store)


    const plus = (item) => {
        item.qut++
        setAddToCart([...Added])
    }

    const min = (item) => {
        item.qut--
        setAddToCart([...Added])
    }

    const Delete = (item) => {
        item.qut = 0
        setAddToCart([...Added])

    }

    const HandleTwostate = () => {
        setTogCart(Boolean(false))
        setTog(Boolean(!tog))
    }

    const stayls = {
        fontSize: "30px",
        cursor: "pointer",
        fontWeight: "bold"
    }

    const UL = useRef()

    const Carts = useRef()

    const [tog, setTog] = useState(false)

    const [togCart, setTogCart] = useState(false)

    useEffect(() => {
        const ul = UL.current.style

        if (tog === true) {
            ul.left = "0"

        } else {
            ul.left = "100%"
        }
    }, [tog])


    useEffect(() => {
        const Cart = Carts.current.style

        if (togCart === true) {
            Cart.height = "auto"
            Cart.maxHeight = "500px"
            Cart.visibility = "visible"

        } else {
            Cart.maxHeight = "44px "
            Cart.visibility = "hidden"
        }
    }, [togCart])







    return (
        <nav className="navbar navbar-expand-lg bg-white p-3">
            <div className="container">
                <div style={stayls} >
                    <Link className='p-0 logo' to="/"><p className='m-0' style={{ color: "black" }}>Buy<span className='text-danger'>F</span>ast</p></Link>
                </div>
                <button onClick={() => setTog(Boolean(!tog))} className={styleNav.buttonNav} >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="" >
                    <ul ref={UL} className={`navbar-nav ms-auto ${styleNav.ulNav}`}>
                        <div onClick={() => HandleTwostate()} className={styleNav.exit}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <li className="nav-item">
                            <NavLink onClick={() => setTog(!tog)} className={`nav-link ${styleNav.a}`} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setTog(!tog)} className={`nav-link ${styleNav.a}`} to="/cards">cards</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setTog(!tog)} to="/products" className={`nav-link ${styleNav.a}`} >Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styleNav.a} disabled`} to="/blog" >Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styleNav.a} disabled`} to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item align-items-center position-relative  d-flex ms-lg-2 me-lg-4 p-3 p-lg-0">
                            <div className='position-relative'>
                                <Badge onClick={() => setTogCart(Boolean(!togCart))} badgeContent={Added.length} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </div>
                            <div ref={Carts} className={styleNav.carts}>
                                {Added.length > 0 ? 'All items' : "No Added Items "}
                                <div className={styleNav.projects}>
                                    {Added.map((item) => {
                                        return (
                                            <div key={item.id} className='d-flex align-items-center justify-content-between mt-4'>
                                                <CardHeader
                                                    avatar={
                                                        <Typography sx={{ width: "50px", height: "50px" }}>
                                                            <img style={{ borderRadius: "50%" }} className='w-100 h-100' src={item.image} alt="" />
                                                        </Typography>
                                                    }
                                                    title={item.category.length <= 10 ? item.category : item.category.slice(0, 11)}
                                                    subheader={`$${(item.price * item.qut).toFixed(2)}`}

                                                />
                                                <span style={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
                                                    <Typography sx={{ display: "flex", alignItems: "center", marginRight: "20px" }} component="div">
                                                        <Button onClick={() => Delete(item)} sx={{ marginTop: "10px" }} variant='contained' size='small' color="error" >Delete</Button>
                                                    </Typography>
                                                    <Typography sx={{ marginTop: "10px" }} display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" component="div">
                                                        <button onClick={() => plus(item)} style={{ background: "green", outline: "0", border: "0", padding: "5px", color: "white", width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>+</button>
                                                        <Typography sx={{ margin: "7px 0" }}>
                                                            <Badge badgeContent={item.qut} color="secondary"></Badge>
                                                        </Typography>
                                                        <button onClick={() => min(item)} style={{ background: "red", outline: "0", border: "0", padding: "5px", color: "white", width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>-</button>
                                                    </Typography>
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item align-items-center position-relative d-none d-lg-flex">
                            <div><i className="fa-solid fa-magnifying-glass"></i></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav