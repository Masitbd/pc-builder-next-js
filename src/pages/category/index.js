import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import RootLayout from '@/components/Layouts/RootLayout'
import { Button, Col, Row } from 'antd'
import ItemCard from '@/components/Reusable/ItemCard'
import FeaturedCategory from '@/components/UI/FeaturedCategory'

const inter = Inter({ subsets: ['latin'] })

export default function Category({category}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedCategory />
    
      <Row gutter={[16, 16]}>
        {
        products?.map((product, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
          {/* <p>{product.lenght}</p> */}
            <ItemCard product ={category} />
          </Col>
        ))
        }
      </Row>
    </>
  
  )
}

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
    const { params } = context
    const res = await fetch(`${process.env.BASE_URL}/category/${params?.id}`)
    const data = await res.json()

    return { props: { categories: data.data } }
}