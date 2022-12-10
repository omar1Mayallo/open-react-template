import React from "react";
import logo from "../../utils/imgs/logo.svg";
import {Col, Container, Row} from "react-bootstrap";
import {FaTwitter, FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa";

const Footer = () => {
  const iconList = [FaFacebookF, FaTwitter, FaInstagram, FaGithub];
  const SocialListItems = iconList.map((Icon, idx) => {
    return (
      <li className="social-list-item" key={idx}>
        <Icon cursor={"pointer"} size={25} />
      </li>
    );
  });
  return (
    <footer className="p-4">
      <Container>
        <Row>
          <Col xs={6} md={8} lg={9}>
            <img src={logo} width="30" height="30" alt="Logo" />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <ul className="social-list d-flex align-items-center justify-content-between">
              {SocialListItems}
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="p-2 d-flex align-items-center justify-content-between">
          <p>
            Made By&nbsp;
            <a
              href="https://github.com/omar1Mayallo"
              target="_blank"
              rel="noopener noreferrer"
            >
              OTM
            </a>
          </p>
          <p className="footer-note">
            Template which I inspired from&nbsp;
            <a
              href="https://open.cruip.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
/**

 */
