import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import BackButton from '../../components/Reusable/BackButton'


const ProductDetails = ({product}) => {
    const {image, productName, category, price, rating } = product
    return (
       <div style={{display:'flex', justifyContent: 'center', alignItems:'center', height: '100vh'}}>
        <Row gutter={[16, 16]} style={{marginTop:'40px'}}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{display:'flex',justifyContent: 'flex-end'}}>
        <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={image} />}
            >
        </Card>
        </Col>
        <Card title="Product Information" bordered={false} style={{ width: 300 }}>
            <p>Category:{category}</p>
            <p>Price:{price}</p>
            <p>Rating:{rating}</p>
        </Card>
       <div style={{marginLeft: '50px'}}>
       <BackButton />
       </div>
        </Row>
       
       </div>
    
  );
};

export default ProductDetails

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:3000/api/product/${params?.id}`)
    const data = await res.json()

    return { props: { product: data.data } }
}