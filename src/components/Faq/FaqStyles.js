import styled from "styled-components"

export const FaqStyles = styled.section`
  .question {
    min-height: calc(var(--gap) * 2);
    border-radius: 6px;
    width: 100%;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    font-size: var(--p);
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: var(--primary);
    }

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
    padding: calc(var(--gap) / 2);
    font-size: var(--p);
  }
  margin-bottom: calc(var(--gap) / 2);

  &.faq-open {
    .trigger {
      transform: rotate(-180deg);
    }
  }
`
