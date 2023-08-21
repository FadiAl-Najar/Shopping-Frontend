import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
            <Column></Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">f.alnajar19@gmail.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="www.linkedin.com/in/fadi-al-najar-15a9b6250">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
            <FooterLink href="https://github.com/FadiAl-Najar">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
