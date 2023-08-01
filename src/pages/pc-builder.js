import RootLayout from '@/components/Layouts/RootLayout';
import CategoryItem from '@/components/Reusable/CategoryItem';
import { AimOutlined, BlockOutlined, BulbOutlined, CalendarOutlined, ClusterOutlined, DesktopOutlined, GatewayOutlined } from '@ant-design/icons';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Category from './category';


const categories = [
    { name: "CPU", value: "CPU", icon: <AimOutlined /> },
    { name: "Motherboard", value: "Motherboard", icon: <BlockOutlined /> },
    { name: "RAM", value: "RAM", icon: <ClusterOutlined />},
    { name: "Power Supply", value: "Power-Supply-Unit", icon: <BulbOutlined />},
    { name: "Storage", value: "Storage-Device", icon: <CalendarOutlined />},
    { name: "Monitor", value: "Monitor", icon: <DesktopOutlined />},
    { name: "Ohters", value: "Others", icon: <GatewayOutlined />},
]

export default function PcBuilder(){
    const {selectItems} = useSelector(state=> state.selectComponent)
    const router = useRouter()
    
    let totlalPrice = 0

    if (selectItems) {
        totlalPrice= selectItems.reduce((prev, item)=> prev + item.price, 0)
    }

    const onCompleteSubmit =()=>{
        toast.success('Cohratulation!! You have build new computer')
        router.push('/')
    }
    return (
       <>
       <Head>
        <tit>Pc Build</tit>
       </Head>
       <div>
       {
        categories.map(category=><CategoryItem key={category.name} category = {category} />)
       }
        <div style={{display:'flex', justifyContent:'space-between', width: '50%', margin:'10px auto'}}>
        <div>
        <p >Total Price: </p>
        <p >$ taka</p>
           </div>
           <div className='text-center mt-4 mb-8'>
                    <button onClick={onCompleteSubmit} disabled={selectItems.length < 5} className='btn btn-info btn-wide'>Complete Build</button>
                    {selectItems.length < 5 && <p className='text-error text-sm'>*Please select at least 6 items</p>}
            </div>
       </div>
       </div>
       </>
    );
};

PcBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};