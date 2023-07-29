import React from 'react';
import { Button, Card } from 'antd';
const { Meta } = Card;

const ItemCard = () => {
    return (
        <Card
           hoverable
           style={{width: 300}}
         >
            <img width={150} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <p>Additional Field 1: Some value</p>
            <p>Additional Field 2: Another value</p>
            <p>Additional Field 3: Yet another value</p>
            <Button type="primary">Read More</Button>
        </Card>
);
};

export default ItemCard;