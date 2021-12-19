import { Col } from "antd";
import { Document, Upload } from "react-iconly";

export default function HeaderText() {
  return (
    <Col
      xl={16}
      lg={14}
      className="da-header-left-text da-d-flex-center"
    >
      <Document
        set="curved"
        size="large"
        className="remix-icon da-update-icon da-text-color-primary-1 da-text-color-dark-0 da-p-4 da-bg-color-primary-4 da-bg-color-dark-70"
      />

      <p className="da-header-left-text-item da-input-label da-text-color-black-100 da-text-color-dark-0 da-ml-16 da-mb-0">
        위키를 만들어 볼까요? 🎉 &nbsp;
        <span className="da-font-weight-300 da-text-color-danger-3">
          For All Time Library!
        </span>

      </p>
    </Col>
  );
};
