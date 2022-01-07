import React, { Component } from 'react'
import { Table } from 'antd';
const { Column } = Table;



export default class ProductList extends Component {




  render() {
    const { products, allProducts, currentCategory, info, newproducts } = this.props
    console.log(allProducts);
    console.log("filterlenmis", products);
    return (


      <div>
        <h3>{info.title}-{currentCategory}</h3>
        {/* {allProducts?.map(item => <button key={item.id} onClick={() => newproducts(item.categoryId)}>sayhello</button>)} */}
        <Table dataSource={allProducts}
        >
          <Column title='productName' dataIndex="productName">

          </Column>
          <Column title='quantityPerUnit' dataIndex="quantityPerUnit">

          </Column>
          <Column title='unitPrice' dataIndex='unitPrice'>

          </Column>
          <Column title='unitsInStock' dataIndex='unitsInStock'>

          </Column>
        </Table>


      </div>
    )
  }
}
