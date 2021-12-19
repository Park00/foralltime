import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Menu, Dropdown, Col, Avatar } from "antd";
import {
  User,
  People,
  InfoSquare,
  Calendar,
  Discount,
  Logout,
} from "react-iconly";

import avatarImg from "../../../assets/images/memoji/memoji-1.png";

export default function HeaderUser() {
  const customise = useSelector(state => state.customise)

  const menu = (
    <Menu theme={customise.theme == "light" ? "light" : "dark"}>
      <Menu.Item
        key={0}
        icon={
          <User
            set="curved"
            className="remix-icon da-vertical-align-middle da-text-color-dark-0"
            size={16}
          />
        }
        className="da-text-color-dark-0"
      >
        <Link to="#">
          Profile
        </Link>
      </Menu.Item>

      <Menu.Item
        key={1}
        icon={
          <People
            set="curved"
            className="remix-icon da-vertical-align-middle da-text-color-dark-0"
            size={16}
          />
        }
        className="da-text-color-dark-0"
      >
        <Link to="#">
          Contact
        </Link>
      </Menu.Item>

      <Menu.Item
        key={2}
        icon={
          <Calendar
            set="curved"
            className="remix-icon da-vertical-align-middle da-text-color-dark-0"
            size={16}
          />
        }
        className="da-text-color-dark-0"
      >
        <Link to="#">
          Calendar
        </Link>
      </Menu.Item>

      <Menu.Item
        key={3}
        icon={
          <Discount
            set="curved"
            className="remix-icon da-vertical-align-middle da-text-color-dark-0"
            size={16}
          />
        }
        className="da-text-color-dark-0"
      >
        <Link to="#">
          Pricing
        </Link>
      </Menu.Item>

      <Menu.Item
        key={4}
        icon={
          <InfoSquare
            set="curved"
            className="remix-icon da-vertical-align-middle da-text-color-dark-0"
            size={16}
          />
        }
        className="da-text-color-dark-0"
      >
        <Link to="#">
          FAQ
        </Link>
      </Menu.Item>

      <Menu.Item
        key={5}
        icon={
          <Logout
            set="curved"
            className="remix-icon da-vertical-align-middle da-text-color-dark-0"
            size={16}
          />
        }
        className="da-text-color-dark-0"
      >
        <Link to="#">
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Col>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Col className="da-d-flex-center" onClick={(e) => e.preventDefault()}>
          <Avatar src={avatarImg} size={40} />
        </Col>
      </Dropdown>
    </Col>
  );
};
