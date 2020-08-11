import React from 'react'

import { Card, Button, Col, Image } from 'react-bootstrap';

import {connect} from 'react-redux'
import {addItem} from '../../redux/actions';

const styles = {
    productImg: {
        width: "287px",
        height: "100px",
        objectFit: "cover",
    }
  };

const CardItems = ({product, addItem, login}) => {

    return (
            <div className="col-md-4 mt-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image.url} style={{ height: '10rem' }}/>
                
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                            {product.productDesc}
                        </Card.Text>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                            {login && login.length > 0 ? 
                        <Button variant="primary"
                        onClick={() => addItem(product)}>Add to cart</Button> : null}
                    </Card.Body>
                </Card>
            </div>
    )
}


const mapStateToProps = state => ({
    login: state.login,
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
  });


export default connect(mapStateToProps, mapDispatchToProps)(CardItems);