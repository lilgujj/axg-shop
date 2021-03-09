import { Component, CSSProperties } from "react";
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}

class ShoppingCartSidebar extends Component<Props> {


    render() {
        return (
            <aside 
                style={sidebarStyle(this.props)}
                    
            >
            <div style={arrowDivStyle}>

                <ArrowRightOutlined style={{ fontSize: '2rem' }} onClick={this.props.onSidebarClose}/>
                <Button>Check Out</Button>
            </div>

            </aside>
        );
    }
}

const sidebarStyle = (props: Props): CSSProperties => ({
    position: 'fixed',
    top: 0,
    width: props.isOpen ? '30rem' : 0,
    right: 0,
    height: '100%',
    overflow: 'hidden',
    background: 'lightgrey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 2s'
  
});

const arrowDivStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80%'
}

export default ShoppingCartSidebar;