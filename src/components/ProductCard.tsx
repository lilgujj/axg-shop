import { Component } from "react";
import { Card } from "antd";
import "../css/ProductCard.css"

const { Meta } = Card;

interface Props {
  title: string,
  description: number,
  img: string
}

class ProductCard extends Component<Props> {

  render() {
    return (
      <div>
        <Card
          id="zIndex"
          hoverable
          className="product-card"
          style={{ margin: ".5rem" }}
          cover={
            <img
              alt="example"
              src={this.props.img}
            />
          }
        >
          <Meta title={this.props.title} description={this.props.description + "kr"} />
        </Card>
      </div>
    );
  }
}

export default ProductCard;
