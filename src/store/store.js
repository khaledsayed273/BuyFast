import { createContext, useEffect, useState } from "react";

export const Store = createContext()

const Provider = ({ children }) => {

    const [AddToCart, setAddToCart] = useState([])    
    const [Added, setAdded] = useState([])
    
    // function to Return Data is have Qunt After Delete or Add New
    const filt = () => {
        const filter = AddToCart.filter((item) => {
            return item.qut
        })
        setAdded(filter)
    }

    // To Re Render When Data Update form Delete or Add New

    useEffect(() => {
        filt()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AddToCart])

    // function Add items to card

    const AdditemFun = (item) => {
        // return item in arr is have the same Date 

        const dataArr = Added.find((ite => ite.id === item.id))

        if (Added.length > 0) {
            if (dataArr !== undefined) {
                if (item.id === dataArr.id) {
                    dataArr.qut++
                    setAddToCart([...Added])
                }
            }
            else {
                setAddToCart([...Added, Object.assign(item, { qut: 1 })])
            }
        } else if (Added.length < 1) {
            setAddToCart([...Added, Object.assign(item, { qut: 1 })])
        }
    }

    return (
        <Store.Provider value={{ Added, setAddToCart, AdditemFun }}>
            {children}
        </Store.Provider>
    )
}

export default Provider