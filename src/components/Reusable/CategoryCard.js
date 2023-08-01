import { Card, Col } from 'antd';
import Link from 'next/link';
import React from 'react'

export default function CategoryCard({ category }) {
    return (
        <Col span={3} style={{display:'flex', justifyContent:'right', padding:'20px'}}>
       <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', marginTop:'20px', width:'150px'}}>
       <Link href={`/category/${category.value}`}> 
            <div className="card w-44 bg-base-200 shadow-xl cursor-pointer hover:bg-base-300 hover:translate-y-1 transition-transform">
                <div className="">
                    <div className='flex flex-col items-center gap-3'>
                        <div className='text-3xl' style={{margin: '10px'}}>{category.icon}</div>
                        <h5 className="text-lg font-semibold">{category.name}</h5>
                    </div>
                </div>
            </div>
       </Link>
       </Card>
        </Col>   
    )
}
