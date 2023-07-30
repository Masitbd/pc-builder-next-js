import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';
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
            {/* <Link href={`/api/product/${product._id}`}> */}
            <Link href={`/product/${product._id}`}>
            <Button type="primary">Read More</Button>
            </Link>
        </Card>
);
};

export default ItemCard;