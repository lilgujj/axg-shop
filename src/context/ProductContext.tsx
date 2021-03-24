import { Component, createContext } from "react";
import { Product, products } from "../products"


export const ProductContext = createContext<ProductValue>({
    products: [],
    addProduct: () => {},
    remove: () => {},
})


interface State {
    products: Product[],
}

interface ProductValue extends State {
    addProduct: (values: any) => void,
    remove: (id: string) => void,
}


class ProductProvider extends Component<{}, State> {
    
    state: State = {
        products: products
    }

     addProductContext = (values: any) => {
        const updateProductList: any = products.push({
            productName: values.productname,
            price: values.price,
            id: values.id,
            img: values.image,
            description: values.description
        })
        localStorage.setItem('products', JSON.stringify(this.state.products))

        this.setState({
            products: [...products, updateProductList]
        })
    }

    remove = (id: string) => {
        
        products.forEach((item, index) => {
            if(item.productName === id) {
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(this.state.products));
            } 
        this.setState({
            products: [...products]
        })
    })
}

    componentDidMount() {
        localStorage.setItem('products', JSON.stringify(this.state.products))
    }

    render() {
        console.log(this.state.products)
        return(
            <ProductContext.Provider value= {{
                products: this.state.products,
                addProduct: this.addProductContext,
                remove: this.remove

            }}>
                {this.props.children}
            </ProductContext.Provider>
        
        )
    }
}


export default ProductProvider;