import { Button } from "antd";

interface Props {
    productName: string,
    id: string,
    description: string,
    price: number,
    image: string,
    delete: (id: string) => void;
    edit: (id: string) => void;
}

function Crud(props: Props) {

    return (
    <tbody>
        <tr>
            <td>{props.productName}</td>
            <td>{props.id}</td>
            <td>{props.price}</td>
            <td id="buttons">
                <Button id="btn" onClick={() => props.edit(props.productName)}>Edit</Button>
                <Button id="btn" onClick={() => props.delete(props.productName)}>Delete</Button>
            </td>
        </tr>
    </tbody>
   

    )
}

export default Crud;