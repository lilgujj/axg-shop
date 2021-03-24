import { Button } from "antd";
import React from "react";
import { products } from "../products"


interface Props {
    productName: string,
    id: string,
    description: string,
    price: number,
    image: string,
    delete: (id: string) => void;
}

function Crud(props: Props) {
    return (
        
        <div className="flex space-between" style={{ width: '100%' }}>
            <div style={{width: "10rem"}}>{props.productName}</div>
            <div>{props.id}</div>
            <div>{props.price}</div>
            {/* <div>{props.description}</div> */}
            <div>
                <Button>Edit</Button>
                <Button onClick={() => props.delete(props.productName)}>Delete</Button>
            </div>
        </div>
        
    )
}

export default Crud;