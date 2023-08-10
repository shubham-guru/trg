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
            {
                ProductList.map((item: {name: string, src: string}, index: number) => {
                    return(
                        <Col span={12}>
                            {/* <Text className='imageText'>{item.name}</Text> */}
                            <Image src={item.src} width={450} alt={item.name} className='productImage' key={index} preview={false} />
                        </Col>
                    )
                })
            }
    </Row>
  )
}

export default ProductsBox