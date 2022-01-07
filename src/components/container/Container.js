import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Category, ProductList } from '..';

const { Header, Content, Footer, Sider } = Layout;
let productInfo={title:"ProductList"}
let categoryInfo={title:"CategoryList"}

export default class Container extends Component {
   
  state={currentCategory:"",products:[]}
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }
  getProducts=()=>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>this.setState({products:data}))
  }
  render() {
    return (
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" icon={<VideoCameraOutlined />} defaultSelectedKeys={['4']}>
          <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
          <Menu.Item key="2afda" icon={<UserOutlined />} >
            nav 2
          </Menu.Item>
         
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    )
  }
  }

