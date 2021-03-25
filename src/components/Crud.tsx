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
        
        <div className="flex space-between" style={{ width: '100%' }}>
            <div style={{width: "10rem"}}>{props.productName}</div>
            <div>{props.id}</div>
            <div>{props.price}</div>
            {/* <div>{props.description}</div> */}
            <div>
                <Button onClick={() => props.edit(props.productName)}>Edit</Button>
                <Button onClick={() => props.delete(props.productName)}>Delete</Button>
            </div>
        </div>
        
    )
}

export default Crud;