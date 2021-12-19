import React from "react";

import { Row, Col, Input, Tag } from "antd";

import ActionButton from "../../../../layout/components/content/action-button/index";
import BreadCrumbs from "../../../../layout/components/content/breadcrumbs/index";
import KnowledgeBaseCards from "./cards";

const { Search } = Input;

export default function KnowledgeBase1() {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Row gutter={[32, 32]} justify="space-between">
          <BreadCrumbs
            breadCrumbParent="Library"
            breadCrumbActive="Soul"
          />
        </Row>
      </Col>

      <Col xxl={10} xl={14} span={24}>
        <Search
          className="da-xl-search-button"
          placeholder="Search for anything"
          allowClear
          enterButton="Search"
          size="large"
        />

        <Row align="middle" className="da-mt-24">
          <p className="da-p1-body da-mb-0 da-mb-xs-8 da-mr-8">For Example:</p>

          <Col>
            <Row gutter={[0, 8]}>
              <Col>
                <Tag>예신</Tag>
              </Col>

              <Col>
                <Tag>알카이드</Tag>
              </Col>

              <Col>
                <Tag>아인</Tag>
              </Col>
              <Col>
                <Tag>로샤</Tag>
              </Col>
              <Col>
                <Tag>카이로스</Tag>
              </Col>

            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <KnowledgeBaseCards />
      </Col>
    </Row>
  );
}
