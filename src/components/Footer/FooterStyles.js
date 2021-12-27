import styled from "styled-components"

export const FooterStyles = styled.footer`
  &.section {
    padding: 0 var(--borderSpacing) var(--gap) var(--borderSpacing);

    .container {
      display: flex;
      flex-direction: column;
      gap: var(--gap);

      @media (min-width: 768px) {
        align-items: flex-start;
        flex-direction: row;
      }

      @media (min-width: 1200px) {
        gap: calc(var(--gap) * 2);
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        a {
          transition: color 0.3s ease;
        }
      }
    }
  }
`

export const FooterMenuStyles = styled.div`
  @media (min-width: 768px) {
    flex-grow: 1;
    width: 33.333%;
  }

  h5 {
    margin-top: 0;
    display: inline-block;
    border-bottom: 2px solid #333;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
  ul {
    margin-bottom: var(--gap);

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    margin-top: 5px;
    margin-bottom: 5px;

    a {
      color: var(--bodyColor);
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 700;

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

  &.social__menu {
    margin-bottom: var(--gap);

    ul {
      display: flex;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      li {
        font-size: var(--h6);
        margin-right: 8px;

        @media (min-width: 768px) {
          margin-left: 5px;
          margin-right: 5px;
        }

        a {
          color: var(--primary);
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
`

export const CopyrightStyles = styled.div`
  font-size: 13px;
  padding-top: var(--gap);

  p {
    margin: 0;

    a {
      color: #fff;
      font-weight: 700;
      text-decoration: none;

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }

    span {
      color: var(--primary);
    }
  }
`
