import React from 'react'
import { Row, Col, Image, Typography } from 'antd'
import { ProductList } from '../../domain/constants/ProductsList'
import '../css/productBox.css'

const ProductsBox = () => {
    const { Title,Text } = Typography
  return (
    <Row gutter={[0, 50]}>
        <Col span={24}>
            <Title level={2} className='collectionTitle'>TRG Collections</Title>
        </Col>
        <Row className='productListRow'>
            {
                ProductList.map((item: {name: string, src: string}, index: number) => {
                    return(
                        <Col span={10} style={{backgroundImage: `url(${item.src})` }} key={index} className='productImage'>
                            <Text className='imageText'>{item.name}</Text>
                        </Col>
                    )
                })
            }
            </Row>
    </Row>
  )
}

export default ProductsBox