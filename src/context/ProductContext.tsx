import { Component, createContext } from "react";
import { Product, products } from "../products"

export const ProductContext = createContext<ProductValue>({
    products: [],
    addProduct: () => { },
    remove: () => { },
    confirmEdit: () => { },
})

interface State {
    products: Product[],
}

interface ProductValue extends State {
  addProduct: (values: Product) => void;
  remove: (id: string) => void;
  confirmEdit: (product: Product) => void;
}

class ProductProvider extends Component<{}, State> {
    state: State = {
        products: products,
    }


    //modal ok btn
    confirmEdit = (product: Product) => {
       let updatedProducts = products.map((item) => {
          if (item.id === product.productName) {
            return { ...item, product };
          }
          return item;
        });
    
        this.setState({products: updatedProducts});
        console.log(updatedProducts)
        console.log(this.state.products)
    }


    addProductContext = (product: Product) => {
        const updateProductList = [...this.state.products, product];
        this.setState({ products: updateProductList })
    }


    remove = (id: string) => {
        products.forEach((item, index) => {
            if (item.productName === id) {
                products.splice(index, 1);
            }
            this.setState({ products: [...products]})
        })
    }

    getRecord = (id: string) => {
        const product = this.state.products.find(item => item.productName === id)
        return product;
    }


    componentDidUpdate() {
        localStorage.setItem('products', JSON.stringify(this.state.products))
    }

    componentDidMount = () => {
        const res = localStorage.getItem('products')
        if (res) {
            const products = JSON.parse(res);
            this.setState({ products })
        }
    }

    render() {
        return (
            <ProductContext.Provider value={{
                products: this.state.products,
                addProduct: this.addProductContext,
                remove: this.remove,
                confirmEdit: this.confirmEdit,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export default ProductProvider;