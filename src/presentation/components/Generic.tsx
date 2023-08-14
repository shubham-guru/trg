import React from 'react'
import { Row, Col, Typography } from 'antd'
import '../css/generic.css'

const Generic = () => {
    const { Text, Title } = Typography
  return ( 
    <Row className='genericNoteRow'>
        <Col span={16}>
            <Title level={5} className='genericNoteHeading'>GENERIC NOTE</Title>
            <Text className='genericNoteText'>
                If you desire a customized piece featuring specific gemstones of your choice, including a specific cut or shape, and personalized designs, our team is more than capable of fulfilling your request. To proceed, kindly contact our expert at the below-given contact number. Rest assured, our team will promptly reach out to you to provide personalised assistance tailored to your needs.
            </Text>
        </Col>
    </Row>
  )
}

export default Generic