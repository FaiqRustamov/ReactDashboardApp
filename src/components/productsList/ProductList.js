import React from 'react'
import  {Table,Button} from "antd"
const ProductList = () => {
    return (
        <div>
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity per Unit
                            </th>
                            <th>
                                Unit in Stock
                            </th>
                            <th>

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">
                                        {product.id}
                                    </th>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        {product.quantityPerUnit}
                                    </td>
                                    <td>
                                        {product.unitPrice}
                                    </td>
                                    <td>
                                        {product.unitsInStock}
                                    </td>
                                    <td>
                                        <Button onClick={() => this.props.addToCart(product)}
                                            color="info"
                                        >
                                            Add to Cart
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProductList
