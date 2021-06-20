import styled from "styled-components"

export const FaqStyles = styled.section`
  .question {
    min-height: 50px;
    border-radius: 5px;
    border: none;
    width: 100%;
    background-color: #272727;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    font-size: var(--p);
    cursor: pointer;

    .trigger {
      display: inline-flex;
      height: 40px;
      width: 50px;
      position: relative;
      font-size: 35px;
      justify-content: center;
      align-items: center;
      color: var(--primary);
      transform-origin: center;
      transition: transform 0.6s ease;
    }
  }

  .answer {
    padding: 20px;
    font-size: var(--p);
  }
  margin-bottom: 20px;

  &.faq-open {
    .trigger {
      transform: rotate(-180deg);
    }
  }
`
