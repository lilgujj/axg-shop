import { Button } from "antd";
import { Product } from "../products";

interface Props {
    product: Product;
    delete: (id: string) => void;
    edit: (product: Product) => void;
}

function Crud(props: Props) {
    const { productName, id, price } = props.product
    return (
        <tr>
            <td>{productName}</td>
            <td>{id}</td>
            <td>{price}</td>
            <td id="buttons">
                <Button id="btn" onClick={() => props.edit(props.product)}>Edit</Button>
                <Button id="btn" onClick={() => props.delete(productName)}>Delete</Button>
            </td>
        </tr>
    )
}

export default Crud;