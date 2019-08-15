import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

class ProductView extends React.PureComponent {
  render() {
    const { id, name, imageURL, price } = this.props.product;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="card-tittle">
              <h5> {name}</h5>
            </CardTitle>
            <hr />
          </CardBody>
          <img className="img" width="100%" src={imageURL} alt="product-name" />
          <CardBody>
            <CardText className="card-detail">
              Price - &#x20b9; {price}
            </CardText>
            <hr />
            <Button
              color="primary"
              onClick={() => this.props.handleSubmit(id)}
              className="float-right"
            >
              Add Cart
            </Button>
          </CardBody>
        </Card>
        <br />
      </div>
    );
  }
}

export default ProductView;
