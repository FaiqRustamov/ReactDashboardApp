import React, { Component } from 'react'
import { Menu } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Category extends Component {



  render() {
    const {categories,info,changeCategory,currentCategory}=this.props
    return (

      <SubMenu key="sub1" icon={<LaptopOutlined />} title={info.title}>
     
        {
          categories?.map(category => (
            <Menu.Item onClick={() => changeCategory(category)} key={category.id}>
            {category.categoryName}
            </Menu.Item>

          ))
        }
        {currentCategory}

      </SubMenu>

    )
  }
}
