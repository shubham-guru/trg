import { Col, Row, Typography, Image } from "antd";
import divider from "../assets/images/divider.svg";
import downArrow from "../assets/images/down-arrow.png";
import "../css/home.css";
import ProductsBox from "../components/ProductsBox";

const Home = () => {
  const handleScroll = () => {
    window.scrollBy(0, 600);
  };

  return (
    <>
    <Row className="mainRow">
      <Col span={24}>
        <Typography.Title level={2} className="headText">
          The Royals of Golechas'
        </Typography.Title>

        <Typography.Title level={5} className="headText">
          Since 1955
        </Typography.Title>

        <Image src={divider} alt="divider" width={100} preview={false} />

        <Typography.Title level={5} className="tagLine">
          A luxury of class and substance
        </Typography.Title>
      </Col>

      <Col span={24}>
        <Image
          src={downArrow}
          className="downArrowIcon"
          onClick={handleScroll}
          alt="down-arrow"
          width={60}
          preview={false}
        />
      </Col>
    </Row>

    <ProductsBox />
    </>
  );
};

export default Home;
