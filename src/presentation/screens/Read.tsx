import { Row, Col, Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import Generic from '../components/Generic'
import '../css/read.css'

const Read = () => {
    const location = useLocation()
    const { Title, Text } = Typography

  return (
    <Row gutter={[0, 50]} className='readCol'>
        <Col style={{backgroundImage: `url(${location.state.src})`}} className='headingCol'>
            <Title level={2} className='heading'>{location.state.route}</Title>
        </Col>

        <Col span={20}>
          <Text className='collectionText'>{location.state.data}</Text>
        </Col>

        <Generic />
    </Row>
  )
}

export default Read