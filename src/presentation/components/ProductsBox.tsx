import React from 'react'
import { Row, Col, Typography } from 'antd'
import { ProductList } from '../../domain/constants/ProductsList'
import { useNavigate } from 'react-router-dom'
import productBg  from '../assets/images/productBg.jpg'
import pageRoutes from '../../routes/pageRoutes'
import '../css/productBox.css'

const ProductsBox = () => {
    const { Title, Text } = Typography
    const navigate = useNavigate() 
  return (
    <Row gutter={[0, 50]}>
        <Col span={24}>
            <Title level={2} className='collectionTitle'>TRG Collections</Title>
        </Col>
        <Row className='productListRow'>
            {
                ProductList.map((item: any, index: number) => {
                    return(
                        <Col xs={24} lg={11} style={{backgroundImage: `url(${productBg})` }} key={index} className='productImage'>
                            <Col lg={24}>
                             <Text className='imageText'>{item.name}</Text>
                            </Col>
                            <Col span={24} className='imageLinksCol'>
                                <Text className='imageTextLink' onClick={()=>navigate(pageRoutes.READ, {state: {route: item.name, src: item.src, data: item.data}})}>Read</Text>
                                <Text className='imageTextLink' onClick={()=>navigate(pageRoutes.VIEW_COLLECTIONS, {state: {route: item.name}})}>View Collection</Text>
                            </Col>
                        </Col>
                    )
                })
            }
        </Row>
    </Row>
  )
}

export default ProductsBox