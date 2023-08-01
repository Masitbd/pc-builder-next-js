import {
    ProfileOutlined,
    MobileOutlined,
    UserOutlined,
    FacebookFilled,
    LinkedinFilled,
    GoogleSquareFilled,
    TwitterSquareFilled,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    SmileOutlined,
    DownOutlined,
} from "@ant-design/icons";
  import { Button, Dropdown, Layout, Space } from "antd";
  const { Header, Content, Footer } = Layout;
  import styles from "@/styles/Home.module.css";
  import Link from "next/link";
import { useState } from "react";
const items = [
  {
    key: '1',
    danger:true,
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
       <span style={{color: '	#353935'}}> CPU/Processor</span>
      </a>
    ),
  },
  {
    key: '2',
    danger:true,
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        <span style={{color: '#353935'}}>Motherbord</span>
      </a>
    ),
    icon: <SmileOutlined />,
   
  },
  {
    key: '3',
    danger:true,
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         <span style={{color: '#353935'}}>RAM</span>
      </a>
    ),
    },
    {
      key: '4',
      danger:true,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
           <span style={{color: '#353935'}}>Power Supply Unit</span>
        </a>
      ),
      },
      {
        key: '5',
        danger:true,
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
             <span style={{color: '#353935'}}>Storage Device</span>
           </a>
        ),
        },
        {
          key: '6',
          danger:true,
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
               <span style={{color: '#353935'}}>Monitor</span>
              
            </a>
          ),
          },
          {
            key: '7',
            danger:true,
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                 <span style={{color: '#353935'}}>Others</span>
                
              </a>
            ),
            },
];
 
  const RootLayout = ({ children }) => {
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


 return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: '100px'
          }}
        >
          <div className="brand-logo">
            <>
              <Link
                href="/"
                style={{
                  color: "white",
                  backgroundColor: "#404040",
                  padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                PC Builder Application
              </Link>
            </>
          </div>
          
        
         <div style={{display:'flex'}}>
        <span style={{marginRight:'20px'}}>
          <Link href='/pc-builder'>
        <Button style={{margin:'auto' }} type="primary" danger>PC Builder</Button>
        </Link>
        </span>
         <Dropdown
        
    menu={{
      items, 
      selectable: true,
      
      
     
     }}
     

    
  >
    <a 
     
     onClick={(e) => e.preventDefault()}>
      <Space  style={{color: 'white'}}>
        Categories
       <DownOutlined />
    
      </Space>
       </a>
      </Dropdown>
        </div>
        </Header>
  
        <Content
    
      style={{
            padding: "0 50px 50px",
            minHeight: "100vh",
            }}
        >
          {children}
        </Content>
  
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <div className={styles.line}></div>
          <h2
            style={{
              fontSize: "28px",
            }}
          >
            PC BUILDER PORTAL
          </h2>
          <p className={styles.social_icons}>
            <Link href="https://web.facebook.com/groups/programmingherocommunity">
              <FacebookFilled />
            </Link>
            <Link href="www.twitter.com">
              <TwitterSquareFilled />
            </Link>
            <Link href="https://web.programming-hero.com/home/">
              <GoogleSquareFilled />
            </Link>
            <Link href="www.linkedin.com">
              <LinkedinFilled />
            </Link>
          </p>
          Pc Builder Portal ©2023 Created by Murad Hossain Sarker
        </Footer>
      </Layout>
      </Space>
    );
  };
  export default RootLayout;