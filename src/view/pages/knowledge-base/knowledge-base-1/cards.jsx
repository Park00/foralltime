import React from "react";

import { Row, Col, Card } from "antd";

import Callcenter from "../../../../assets/images/pages/knowledgebase/contact.png";
import Charts from "../../../../assets/images/pages/knowledgebase/analyse.png";
import Logistic from "../../../../assets/images/pages/knowledgebase/location.png";
import Mailing from "../../../../assets/images/pages/knowledgebase/newsletter.png";
import Finance from "../../../../assets/images/pages/knowledgebase/save-money.png";
import Seo from "../../../../assets/images/pages/knowledgebase/seo.png";

export default function KnowledgeBaseCards() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col xl={8} md={12} xs={24}>
        <Card className="da-text-center">
          <img src={Callcenter} alt="Call Center" />
          <h4>예신</h4>
          <p className="da-p1-body da-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="da-text-center">
          <img src={Logistic} alt="Shipping & Logistics" />
          <h4>로샤</h4>
          <p className="da-p1-body da-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="da-text-center">
          <img src={Finance} alt="Finance" />
          <h4>알카이드</h4>
          <p className="da-p1-body da-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="da-text-center">
          <img src={Charts} alt="Charts" />
          <h4>카이로스</h4>
          <p className="da-p1-body da-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="da-text-center">
          <img src={Mailing} alt="Mailings" />
          <h4>아인</h4>
          <p className="da-p1-body da-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="da-text-center">
          <img src={Seo} alt="SEO & Ads" />
          <h4>루카스</h4>
          <p className="da-p1-body da-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>
    </Row>
  );
}
