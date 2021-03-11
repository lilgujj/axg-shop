import React, { Component, createContext } from 'react';
import sunglass1 from "../images/glasses1.jpg";
import sunglass3 from "../images/glasses3.jpg";
import keps1 from "../images/keps1.jpg";
import keps2 from "../images/keps2.jpg";
import klocka1 from "../images/klocka1.jpg";
import klocka2 from "../images/klocka2.jpg";


export const DataContext = createContext<ContextValue>({
    addToCart: () => {},
    cart:[],
    products: []

});
    
interface ContextValue extends State {
    addToCart: (id: any) => void;
}


export interface Product {
    productName: string,
    price: number,
    id: number,
    img: any,
    description: string
}

interface State {
    products: Product[],
    cart: any[],
    
}

class DataProvider extends Component<{}, State> {

    state: State = {
        products: [
            {
                productName: 'Green Goblin Glasses',
                price: 399,
                id: 1,
                img: sunglass1,
                description: "Green handmade glasses from Sweden. Dark green opacity makes u feel one with nature"
            },
            {
                productName: 'Pink Lady Glasses',
                price: 299,
                id: 2,
                img: sunglass3,
                description: "Pink handmade glasses from Sweden. Soft pink opacity put your eyes in comfort zone"
            },
            {
                productName: 'LA Snapback',
                price: 299,
                id: 3,
                img: keps1,
                description: "LA Snapback. unisex and all fit"
            },
            {
                productName: 'Nike Snapback',
                price: 299,
                id: 4,
                img: keps2,
                description: "Nike Snapback. unisex and all fit"
            },
            {
                productName: 'Edifice',
                price: 1299,
                id: 5,
                img: klocka1,
                description: "Edifice watch water resistant 100m with rose/black design"
            },
            {
                productName: 'Maurice De Mauriac',
                price: 1899,
                id: 6,
                img: klocka2,
                description: "Maurice De Mauriac watch with date and timer functions to keep you updated."
            },
     
        ],
         
        cart: [],

     }


     addProductToCart = (id: any) => {
        const { products, cart } = this.state;
        const data = products.filter(product => {
            return product.productName === id
        })

        this.setState({cart: [...cart,...data]})
        console.log(this.state.cart)
     }
    
    

    

    render() {

        return (
            <DataContext.Provider value={{
                products: this.state.products,
                cart: this.state.cart,
                addToCart: this.addProductToCart
            }
            }>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


export default DataProvider;