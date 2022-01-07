import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Category, ProductList, Users } from '..';

const { Header, Content, Footer, Sider } = Layout;
let productInfo = { title: "ProductList" }
let categoryInfo = { title: "CategoryList" }

export default class Container extends Component {

  state = { currentCategory: "", products: [], categories: [], filteredProducts: [] }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
  }
  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  changeCategory = (categoryID) => {
    let filteredProducts = this.state.products.filter(product => (product.categoryId === categoryID))
    this.setState({ filteredProducts: filteredProducts });

    
    return filteredProducts
    //  console.log(filteredProducts);

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
          <Menu theme="dark" mode="inline" icon={<VideoCameraOutlined />} defaultSelectedKeys={['sub1']}>
            <Category 
              categories={this.state.categories}
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo} />
            <Menu.Item key="2afda" icon={<UserOutlined />} >
              <Users></Users>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <ProductList
                allProducts={this.state.products}
                products={this.state.filteredProducts}
                currentCategory={this.state.currentCategory}
                info={productInfo}
                newproducts={this.changeCategory}

              />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2022 Created by Me</Footer>
        </Layout>
      </Layout>
    )
  }
}

