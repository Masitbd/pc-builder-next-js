import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

const CategoryDetail= ({category}) => {
    
  const {title, description, price, rating, category:productCategory} = category
  const image = 'https://img.freepik.com/free-psd/front-view-laptop-mockup-2_1135-276.jpg?w=1060&t=st=1690901558~exp=1690902158~hmac=c574deafbfd37165bb04a57a0cf2dfa33b2d9afb96f94e95fce693007c05b5be'
    return (
        <Card
           hoverable
           style={{width: 300}}
         >
           <img src={image} height='230' alt="product"/> 
            <Meta title={title}/>
            <p>Category:{productCategory}</p>
            <p>Price:{description}</p>
            <p>Rating:{price}</p>
            <p>Rating:{rating}</p>
            {/* <Link href={`/api/product/${product._id}`}> */}
            
            <Button type="primary">Read More</Button>
           
        </Card>
);
};

export default CategoryDetail;