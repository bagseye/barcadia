import styled from "styled-components"

export const NavModuleStyles = styled.nav`
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 20px var(--borderSpacing) 0 var(--borderSpacing);

    @media (min-width: 1024px) {
      padding-top: 50px;
    }

    @media (min-width: 1440px) {
      padding-top: 70px;
    }
  }

  .hamburger {
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }

    .bar {
      display: block;
      background-color: #fff;
      height: 2px;
      border-radius: 2px;

      &:nth-of-type(2) {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }

  .logo {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.5px;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    @media (min-width: 1024px) {
      font-size: 25px;
    }

    span {
      color: var(--primary);
    }

    &:hover,
    &:focus {
      a {
        color: var(--primary);
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .menu {
    background-color: #000;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      text-transform: capitalize;
      letter-spacing: -0.5px;
      font-size: 28px;

      @media (min-width: 375px) {
        font-size: 36px;
      }

      @media (min-width: 414px) {
        font-size: 40px;
      }

      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
      }

      span {
        color: var(--primary);
      }
    }
  }
`
