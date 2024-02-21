import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
    let [Products, setProducts] = useState([
        {
            id: 1,
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",


        },
        {
            id: 2,
            title: "OPPOF19",
            description: "OPPO F19 is officially announced on April 2021.AI Night Charge adapts to your sleep habits",
            price: 280,
            discountPercentage: 17.91,
            rating: 4.3,
            stock: 123,
            brand: "OPPO",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",



        },
        {
            id: 3,
            title: "Huawei P30",
            description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in German...",
            price: 499,
            discountPercentage: 10.58,
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
            ,

        },
        {
            id: 4,
            title: "Samsung Universe9",
            description: "Samsung's new variant which goes..",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        },
        {
            id: 5,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://specifications-pro.com/wp-content/uploads/2020/03/iPhone-9-600x600.jpeg",
        }

    ])

    let [items, setItems] = useState([]);
    let [total, setTotal] = useState(0);



    let addtoCart = (card) => {
        setItems([...items, card]);
        setTotal(total + card.price);


    }



    let quantitytoCart = (card) => {
        setTotal(total + card.price)
    }

    let quantityfromCart = (card) => {
        setTotal(total - card.price)
    }




    return <UserContext.Provider value={{ Products, items, setItems, addtoCart, total, setTotal, quantitytoCart, quantityfromCart }}>
        {children}
    </UserContext.Provider>
}

export default UserContext