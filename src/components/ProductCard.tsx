import { Component } from "react";
import { Card } from "antd";
import "../css/ProductCard.css"


const { Meta } = Card;

interface Props {
    title: string,
    description: number,
    img: string
}

class ProductCard extends Component <Props> {
  render() {
    return (
      <div>
        <Card
          hoverable
          style={{ width: 240, margin: ".5rem", borderRadius: "1rem" }}
          cover={
            <img style={{borderRadius: "1rem"}}
              alt="example"
              src={this.props.img}
            />
          }
          >
            <Meta title={this.props.title} description={this.props.description} />
        </Card>
      </div>
    );
  }
}

export default ProductCard;
