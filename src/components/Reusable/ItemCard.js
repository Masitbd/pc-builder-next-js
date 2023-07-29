import React from 'react';
import { Button, Card } from 'antd';
const { Meta } = Card;

const ItemCard = ({product}) => {
    const {image, productName, category, price, rating } = product
    return (
        <Card
           hoverable
           style={{width: 300}}
         >
           <img src={image} height='230' alt="product"/> 
            <Meta title={productName}/>
            <p>Category:{category}</p>
            <p>Price:{price}</p>
            <p>Rating:{rating}</p>
            <Button type="primary">Read More</Button>
        </Card>
);
};

export default ItemCard;