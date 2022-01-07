import React, { Component } from 'react'
import { Table } from 'antd';
import {useState} from 'react';


const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Count of Submissions',
        dataIndex: 'Count',
        key: 'sub',
        width: '20%',
        ...this.getColumnSearchProps('sub'),
      },
      {
        title: 'Count of Interviews',
        dataIndex: 'Count',
        key: 'int',
        ...this.getColumnSearchProps('int'),
      },
      {
        title: 'Count of PO',
        dataIndex: 'Count',
        key: 'po',
        ...this.getColumnSearchProps('po'),
      },
    ];

const data = [
  {
    ID: 1,
    ProductName: 'John Brown'
  },
  {
    key: 2,
    name: 'Jim Green',
  
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];
const { posts } = this.state

export default class ProductList extends Component {
  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}))
  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
        <Table
    columns={columns}
   
    dataSource={this.state.posts}
  />
      </div>
    )
  }
}
