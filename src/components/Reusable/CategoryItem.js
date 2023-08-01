import { Badge, Button, Tag } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CategoryItem = ({category}) => {
  const {selectItems} = useSelector(state=> state.selectComponent)
  const selected = selectItems.find(item => item.category === category.value)
  
    return (
        <>
       <div>
       <div style={{display:'flex', justifyContent:'space-between', width: '50%', margin:'10px auto'}}>
        <div>
          <Tag color="magenta">{category.name}</Tag>
           </div>
           <div>
            <Link href={`/select-item/${category.value}`}>
               <Button type='primary' >Select</Button>
           </Link>
           </div>

       </div>
      </div>
     
      </>
    );
};

export default CategoryItem;