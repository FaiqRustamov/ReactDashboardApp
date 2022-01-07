import React, { Component } from 'react'
import { Menu } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Category extends Component {


  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }

  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}))
  }
  render() {
    return (

      <SubMenu key="sub1" icon={<LaptopOutlined />} title={this.props.info.title}>
        {
          this.state.categories.map(category => (
            <Menu.Item onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}</Menu.Item>

          ))
        }
        {this.props.currentCategory}

      </SubMenu>

    )
  }
}
