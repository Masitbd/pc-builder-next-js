import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

const ItemCard = ({product}) => {
  const {title, description, price, status, rating, category  } = product
  const image = 'https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg?w=1380&t=st=1690757503~exp=1690758103~hmac=e1e8c71168cd318bc3ea531adcaa6a5424f0e935da226ffdac482db0c8f95d30'
    return (
        <Card
           hoverable
           style={{width: 300}}
         >
           <img src={image} height='230' alt="product"/> 
            <Meta title={title}/>
            <p>Category:{category}</p>
            <p>Price:{description}</p>
            <p>Rating:{price}</p>
            <p>Rating:{rating}</p>
            {/* <Link href={`/api/product/${product._id}`}> */}
            <Link href={`/product/${product._id}`}>
            <Button type="primary">Read More</Button>
            </Link>
        </Card>
);
};

export default ItemCard;