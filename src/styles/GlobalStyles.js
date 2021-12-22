import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root {  
  --bannerTitle: 34px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: #000;
  --primary: #ffc400;
  --inActive: #555;
  --letterSpacing: -0.075rem;
  --p: 15px;
  --h2: 20px;
  --h3: 19px;
  --h4: 18px;
  --h5: 17px;
  --h6: 16px;
  --gap: 40px;
  --sectionMargin: 60px;

  @media(min-width:375px) {
    --bannerTitle: 42px;    
    --p: 16px;
    --h2: 22px;
    --h3: 21px;
    --h4: 20px;
    --h5: 19px;
    --h6: 18px;
    --sectionMargin: 80px;
  }

  @media(min-width:414px) {
    --bannerTitle: 50px;    
    --p: 18px;
    --h2: 27px;
    --h3: 25px;
    --h4: 23px;
    --h5: 21px;
    --h6: 20px;
  }

  @media(min-width:768px) {
    --bannerTitle: 60px;    
    --blockquote: 26px;
    --p: 19px;
    --h2: 30px;
    --h3: 28px;
    --h4: 26px;
    --h5: 24px;
    --h6: 22px;
    --sectionMargin: 100px;
  }

  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --p: 20px;
    --h2: 36px;
    --h3: 32px;
    --h4: 29px;
    --h5: 27px;
    --h6: 25px;
    --sectionMargin: 120px;
  }
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}  


body {
    font-family: 'Heebo', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #fff;
    overflow-x: hidden;
    font-size: var(--p);
}

h1,
h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.25em;
    font-weight: 700;
    letter-spacing: var(--letterSpacing);

    @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
    }
}

h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

h1 {
    font-size: var(--h1);
}

h2 {
    font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}

p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

b,
strong {
  font-weight: 700;
}

i {
  font-style: italic;
}

u {
  text-decoration: underline;
}

hr {
  border: none;
  margin-top: var(--sectionMargin);
  margin-bottom: var(--sectionMargin);
  height: 2px;
  background-color: #333;
}

ul,
ol {
  margin-top: calc(var(--sectionMargin) / 2 );
  margin-bottom: calc(var(--sectionMargin) / 2);
}

a {
  color: var(--primary);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

blockquote {
  font-size: var(--blockquote);
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  margin-top: var(--sectionMargin);
  margin-bottom: var(--sectionMargin);
  margin-left: 0;
  border-left: 2px solid var(--primary);
  padding-left: var(--gap);
  
  p {
    color: #bbb;
  }
}

a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    font-family: 'Heebo', sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
    }

    &:focus {
      color: var(--primary);
    }

    @media(hover: hover) {
      cursor: pointer;
    }
  }

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }

  .container {
    margin-left: auto;
    margin-right: auto;

    &__scroll {
      overflow-x: scroll;
      display: flex;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        width: 14px;
        height: 14px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 0px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: var(--primary);
      }
      &::-webkit-scrollbar-track {
        background: var(--background);
        border-radius: 0px;
      }

      @media (min-width: 1200px) {
        overflow-x: visible;
      }
    }
  }

  .section {
      margin-top: var(--sectionMargin);
      margin-bottom: var(--sectionMargin);
      padding: 0 var(--borderSpacing);

      &.section__padding {
          padding-top: var(--sectionMargin);
          padding-bottom: var(--sectionMargin);
      }
  }

  .feed {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    >* {
      flex: 0 0 100%;

      @media(min-width:414px) {
        flex-basis: calc(50% - (calc(var(--gap) / 2)));
      }

      @media(min-width:1024px) {
        flex-basis: calc(33.333% - 27px);
      }
    }
  }
`
