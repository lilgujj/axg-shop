import { Button } from "antd";
import React from "react";
import { products } from "../products"


interface Props {
    productName: string,
    id: string,
    description: string,
    price: number,
    image: string,
}

function Crud(props: Props) {
    return (
        
        <div className="flex space-between" style={{ width: '100%' }}>
            <div>{props.productName}</div>
            <div>{props.id}</div>
            <div>{props.price}</div>
            <div>{props.description}</div>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
        
    )
}

export default Crud;