import React, { Component, createContext } from 'react';
import { Product, products } from '../products';


export const CartContext = createContext<ContextValue>({
    addToCart: () => {},
    removeProduct: () => {},
    updateValue: () => {},
    cart:[],
    total: 0,
});

interface CartProduct extends Product {
    count: number;
}

interface State {
    cart: CartProduct[],
    total: number
}

interface ContextValue extends State {
    addToCart: (id: any) => void;
    removeProduct: (id: any) => void;
    updateValue: (value: number) => void;
}

class DataProvider extends Component<{}, State> {

    state: State = {
        cart: [],
        total: 0
     }


     addProductToCart = (id: string) => {
        const { cart } = this.state;
        const check = cart.every(item => {
            return item.productName !== id
        })
        
        if(check) {
            const product = products.find(product => {
                return product.productName === id
            })!

            const cartProduct: CartProduct = { ...product, count: 1 }

            this.setState({ cart: [...cart, cartProduct]})
        }else {
            alert("the product has already been added to cart")
        }

     }


    removeProductfromCart = (id: string) => {

        // if(window.confirm("Do you wanna delete this product")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if(item.productName === id) {
                    cart.splice(index, 1)
                } 
            
                })
                this.setState({ cart: cart })

        // }
    }
    
    updateValueCount = (value: number)  => {
        const { cart,total } = this.state;
        // const res = cart.reduce((prev, item) => {
        //     return prev + (item.price * value);
        // }, 0)
        // this.setState({ total: res })
        cart.every(item =>{
            const totalPrice = item.price * value;
            // return totalPrice
            this.setState({total: totalPrice})
        })
    }


    
    

    render() {

        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart,
                removeProduct: this.removeProductfromCart,
                updateValue: this.updateValueCount,
                total: this.state.total
            }
            }>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


export default DataProvider;