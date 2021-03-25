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
    fieldsInfo: [],
    onChangeFields: () => {}
})


interface State {
    products: Product[],
    isModalVisible: boolean,
    fieldsInfo: any[]
}

interface ProductValue extends State {
    addProduct: (values: any) => void,
    remove: (id: string) => void,
    handleOk: () => void,
    showModal: (id: string) => void,
    handleCancel: () => void,
    onChangeFields: (allFields: any) => void
}


class ProductProvider extends Component<{}, State> {
    
    state: State = {
        products: products,
        isModalVisible: false,
        

        fieldsInfo: [
            {
                productNameModal: "",
                priceModal: 0,
                idModal: "",
                descriptionModal: "",
                imgModal: "",
            }
            

        ],
    }

     onChangeFields = (allFields: any) => {
        this.setState({fieldsInfo: allFields});
        console.log(this.state.fieldsInfo)
  };

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

    getRecord = (id: string) => {
        const product = this.state.products.find(item => item.productName === id)
        return product;
    }
    
    showModal = (id: string) => {
        this.setState({ isModalVisible: true })
        // const products = this.state.products;
        // const index = products.indexOf(this.getRecord(id));
        // const selectedProduct = products[index];
        // this.setState({

        // })
        

        
        products.forEach((item, index) => {
            if(item.productName === id) {
                this.setState({
                    fieldsInfo: [{
                        productNameModal: item.productName,
                        priceModal: item.price,
                        idModal: item.id,
                        descriptionModal: item.description,
                        imgModal: item.img
                    }
                    ]
                })
                console.log(this.state.fieldsInfo[0].productNameModal)
            }
            console.log(this.state.fieldsInfo)
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
                fieldsInfo: this.state.fieldsInfo,
                onChangeFields: this.onChangeFields
            

            }}>
                {this.props.children}
            </ProductContext.Provider>
        
        )
    }
}


export default ProductProvider;