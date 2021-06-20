import styled from "styled-components"

export const FooterStyles = styled.footer`
  background-color: #000;
  padding: var(--sectionPadding) 25px 40px 25px;

  .container {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      align-items: center;
    }
  }

  .footer__menu {
    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;

      @media (min-width: 768px) {
        display: flex;
      }
    }

    li {
      margin-top: 5px;
      margin-bottom: 5px;

      @media (min-width: 768px) {
        margin-left: 6px;
        margin-right: 6px;
      }

      a {
        color: #fff;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 20px;
        transition: color 0.3s ease;

        @media (min-width: 375px) {
          font-size: 22px;
        }

        span {
          color: var(--primary);
        }
      }

      &:hover,
      &:focus {
        a {
          color: var(--primary);
        }
      }
    }
  }

  .social__menu {
    margin-bottom: 40px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;

      li {
        font-size: 25px;
        margin-right: 8px;

        @media (min-width: 768px) {
          margin-left: 5px;
          margin-right: 5px;
        }

        a {
          color: var(--primary);
          transition: color 0.3s ease;
        }

        &:hover,
        &:focus {
          a {
            color: #fff;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 13px;

    p {
      margin: 0;

      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover,
        &:focus {
          color: var(--primary);
        }

        span {
          color: var(--primary);
        }
      }
    }
  }
`
