import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
// import Loader from './Loader';
import { Spin } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "./index";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching, error } = useGetCryptosQuery(10);
  console.log(data);
  console.log(error);

  const globalStats = data?.data?.stats;

  if (isFetching) return <Spin />;

  return (
    <>
      <Title level={2} className="heading">
        Global crypto prices
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total cryptocurruencees"
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total excahnges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total market cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24 h vol"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepage;
