import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Category, ProductList } from '..';
const Container = () => {
    
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <div>
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                    <Breadcrumb.Item>Products</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" icon={<LaptopOutlined />} title="Products">
                            <Category/>

                            </SubMenu>
                            <SubMenu key="sub2" icon={<UserOutlined />} title="Users">
                                <Menu.Item>
                                    Users
                                </Menu.Item>

                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                       <ProductList/>

                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Dashboard ©2022 Created by me</Footer>
        </Layout>
    </div>
    )
}

export default Container
