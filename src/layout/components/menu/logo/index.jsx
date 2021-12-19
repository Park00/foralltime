import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import FatLogo from "../../../../assets/images/logo/fat-logo.png";
import Yoda from "../../../../assets/images/logo/logo.svg";
import YodaDark from "../../../../assets/images/logo/logo-dark.svg";
import YodaRtl from "../../../../assets/images/logo/logo-rtl.svg";
import YodaRtlDark from "../../../../assets/images/logo/logo-rtl-dark.svg";

import themeConfig from '../../../../configs/themeConfig.jsx';

export default function MenuLogo(props) {
  const customise = useSelector(state => state.customise)

  return (
    <Link
      to="/"
      className="da-header-logo da-d-flex da-align-items-end"
      onClick={props.onClose}
    >
      {
        (
          customise.theme == "light" ? (
            <img className="da-logo" src={FatLogo} alt="logo" />

          ) : (
            <img className="da-logo" src={YodaDark} alt="logo" />
          )
        )
      }

      <span className="h3 d-font-weight-800 da-text-color-primary-1 da-mb-6">
        For All Time
      </span>

      <span
        className="da-p1-body da-font-weight-500 da-text-color-black-40 da-mb-16 da-ml-4"
        style={{
          letterSpacing: -1.5
        }}
      >
        v.{themeConfig.version}
      </span>
    </Link>
  );
};
