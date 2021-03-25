import { Component, createContext } from "react";
import { Product, products } from "../products"


export const ProductContext = createContext<ProductValue>({
    products: [],
    addProduct: () => {},
    remove: () => {},
    handleOk: () => {},
    showModal: () => {},
    handleCancel: () => {},
    isModalVisible: false,
})


interface State {
    products: Product[],
    isModalVisible: boolean
}

interface ProductValue extends State {
    addProduct: (values: any) => void,
    remove: (id: string) => void,
    handleOk: () => void,
    showModal: (id: string) => void,
    handleCancel: () => void,
}


class ProductProvider extends Component<{}, State> {
    
    state: State = {
        products: products,
        isModalVisible: false,
    }

    addProductContext = (product: Product) => {
        const updateProductList = [...this.state.products, product];
        this.setState({ products: updateProductList })
    }

    remove = (id: string) => {
        
        products.forEach((item, index) => {
            if(item.productName === id) {
                products.splice(index, 1);
            } 
        this.setState({
            products: [...products]
        })
    })
}

    handleOk = () => {
        this.setState({ isModalVisible: false })

    }
    
    showModal = (id: string) => {
        this.setState({ isModalVisible: true })
        
        products.forEach((item, index) => {
            if(item.productName === id) {
                console.log(item.productName, item.price)
            }
        })
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false })
    };

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
        return(
            <ProductContext.Provider value= {{
                products: this.state.products,
                addProduct: this.addProductContext,
                remove: this.remove,
                handleOk: this.handleOk,
                showModal: this.showModal,
                handleCancel: this.handleCancel,
                isModalVisible: this.state.isModalVisible,
            

            }}>
                {this.props.children}
            </ProductContext.Provider>
        
        )
    }
}


export default ProductProvider;