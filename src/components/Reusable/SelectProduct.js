import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addItem } from '@/redux/features/selectItem';
const { Meta } = Card;

const SelectProduct= ({category}) => {
const {title, description, price, rating, category:productCategory} = category
  const image = 'https://img.freepik.com/free-psd/front-view-laptop-mockup-2_1135-276.jpg?w=1060&t=st=1690901558~exp=1690902158~hmac=c574deafbfd37165bb04a57a0cf2dfa33b2d9afb96f94e95fce693007c05b5be'
   
  
 const dispatch = useDispatch()
  const router = useRouter()

  const onClickHandle = ()=>{
    dispatch(addItem(category))
    router.back()
  }

  const {selectItems} = useSelector(state=> state.selectComponent)
  const selected = selectItems.find(item=>item._id=== category._id) 
 
  console.log('redux', selected)
  
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
            
          <div>
          {
           selected? <Button type="primary">Selected</Button>:
           
          <Button onClick={onClickHandle} type="primary">Select</Button>
            }
          </div>
           
        </Card>
);
};

export default SelectProduct;