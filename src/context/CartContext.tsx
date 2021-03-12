import React, { Component, createContext } from 'react';
import { Product, products } from '../products';


export const CartContext = createContext<ContextValue>({
    addToCart: () => {},
    removeProduct: () => {},
    decrease: () => {},
    increase: () => {},
    getTotal: () => {},
    cart:[],
    total: 0,
});

interface CartProduct extends Product {
    count: number;
}

interface State {
    cart: CartProduct[],
    total: any
}

interface ContextValue extends State {
    addToCart: (id: any) => void;
    removeProduct: (id: any) => void;
    decrease: (id: string) => void;
    increase: (id: string) => void;
    getTotal: () => void;
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
                this.getTotalPrice()
        // }
    }
    

    // decrease item count
    decreaseCount = (id: string) => {
        const { cart } = this.state;
        cart.forEach(item => {
            if(item.productName === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({cart: cart})
        this.getTotalPrice()
    }

    // increse item count
    increaseCount = (id: string) => {
        const { cart } = this.state;
        cart.forEach(item => {
            if(item.productName === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart })
        this.getTotalPrice()
    }

    getTotalPrice = () => {
        const {cart } = this.state;
        const total =  cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: total })
    }
    
    

    render() {

        console.log(this.state.total)

        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart,
                removeProduct: this.removeProductfromCart,
                total: this.state.total,
                increase: this.increaseCount,
                decrease: this.decreaseCount,
                getTotal: this.getTotalPrice,
            }
            }>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


export default DataProvider;