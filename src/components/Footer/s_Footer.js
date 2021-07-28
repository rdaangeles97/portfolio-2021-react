import styled from "styled-components";
import footerPath from "../../assets/footer-path.png";
export const FooterSection = styled.section`
  height: 3rem;
  position: relative;
  background-color: white;
`;

export const FooterPath = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url(${footerPath});
  height: 100px;
  max-width: 10rem;
  width: 100%;
  object-fit: contain;
  background-repeat: no-repeat;
`;
