import React, { Component, ContextType } from "react";
import { Button, Card } from "antd";
import "../css/ProductCard.css"
import {CartContext} from "../context/CartContext";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface Props {
  title: string,
  description: number,
  img: string,
}

class ProductCard extends Component<Props> {
  context!: ContextType<typeof CartContext>;
  static contextType = CartContext;


  render() {
    return (
      <div>
        <Link to={`shop/product/${this.props.title}`}>
          <Card
            id="zIndex"
            hoverable
            className="product-card"
            style={{ margin: ".5rem" }}
            cover={<img alt="example" src={this.props.img} />}
          >
            <Meta
              title={this.props.title}
              description={this.props.description + "kr"}
            />
          </Card>
        </Link>
        <Button
          onClick={() => this.context.addToCart(this.props.title)}
          style={{ margin: ".5rem" }}
        >
          Buy Now
        </Button>
      </div>
    );
  }
}

export default ProductCard;
