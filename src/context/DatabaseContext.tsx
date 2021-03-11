import React, { Component, createContext } from 'react';
import sunglass1 from "../images/glasses1.jpg";
import sunglass3 from "../images/glasses3.jpg";
import keps1 from "../images/keps1.jpg";
import keps2 from "../images/keps2.jpg";
import klocka1 from "../images/klocka1.jpg";
import klocka2 from "../images/klocka2.jpg";


export const DataContext = createContext<ContextValue>({
    addToCart: () => {},
    removeProduct: () => {},
    cart:[],
    products: []

});
    
interface ContextValue extends State {
    addToCart: (id: any) => void;
    removeProduct: (id: any) => void;
}


export interface Product {
    productName: string,
    price: number,
    id: number,
    img: any,
    description: string,
    count: number
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
                description: "Green handmade glasses from Sweden. Dark green opacity makes u feel one with nature",
                count: 1
            },
            {
                productName: 'Pink Lady Glasses',
                price: 299,
                id: 2,
                img: sunglass3,
                description: "Pink handmade glasses from Sweden. Soft pink opacity put your eyes in comfort zone",
                count: 1
            },
            {
                productName: 'LA Snapback',
                price: 299,
                id: 3,
                img: keps1,
                description: "LA Snapback. unisex and all fit",
                count: 1
            },
            {
                productName: 'Nike Snapback',
                price: 299,
                id: 4,
                img: keps2,
                description: "Nike Snapback. unisex and all fit",
                count: 1
            },
            {
                productName: 'Edifice',
                price: 1299,
                id: 5,
                img: klocka1,
                description: "Edifice watch water resistant 100m with rose/black design",
                count: 1
            },
            {
                productName: 'Maurice De Mauriac',
                price: 1899,
                id: 6,
                img: klocka2,
                description: "Maurice De Mauriac watch with date and timer functions to keep you updated.",
                count:  1
            },
     
        ],
         
        cart: [],

     }


     addProductToCart = (id: any) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.productName !== id
        })
        
        if(check) {
                const data = products.filter(product => {
                return product.productName === id
            })
            this.setState({cart: [...cart,...data]})
        }else {
            alert("the product has already been added to cart")
        }

     }


    removeProductfromCart = (id: any) => {

        if(window.confirm("Do you wanna delete this product")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if(item.productName === id) {
                    cart.splice(index, 1)
                } 
            
                })
                this.setState({ cart: cart })

        }
    }
    

    

    render() {

        return (
            <DataContext.Provider value={{
                products: this.state.products,
                cart: this.state.cart,
                addToCart: this.addProductToCart,
                removeProduct: this.removeProductfromCart
            }
            }>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


export default DataProvider;