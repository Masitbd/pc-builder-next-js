import { AimOutlined, BlockOutlined, BulbOutlined, CalendarOutlined, ClusterOutlined, DesktopOutlined, GatewayOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import CategoryCard from '../Reusable/CategoryCard';


const categories = [
    { name: "CPU", value: "CPU", icon: <AimOutlined /> },
    { name: "Motherboard", value: "Motherboard", icon: <BlockOutlined /> },
    { name: "RAM", value: "RAM", icon: <ClusterOutlined />},
    { name: "Power Supply", value: "Power-Supply-Unit", icon: <BulbOutlined />},
    { name: "Storage", value: "Storage-Device", icon: <CalendarOutlined />},
    { name: "Monitor", value: "Monitor", icon: <DesktopOutlined />},
    { name: "Ohters", value: "Others", icon: <GatewayOutlined />},
]

const FeaturedCategory = () => {
    return (
        <div style={{margin:'30px'}} >
        <h1 style={{margin: 'auto', textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>Featured Category</h1>
       
       <div>
        <Row gutter={[16, 16]}>
       
            {
                categories.map(category => <CategoryCard key={categories.value} category={category} />)
            }
         
        </Row>   
         </div>
  
    </div>
    );
};

export default FeaturedCategory;