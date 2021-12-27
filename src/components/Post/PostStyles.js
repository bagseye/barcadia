import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: calc(var(--gap) / 2);

  @media (min-width: 1200px) {
    gap: var(--gap);
  }

  @media (min-width: 1200px) {
    gap: var(--gap);
  }
`

export const PostItemStyles = styled(Link)`
  flex: 0 0 100%;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  transition: border-color 0.6s ease, background-color 0.6s ease,
    box-shadow 0.6s ease;

  &:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 1024px) {
    flex-basis: calc(33.333% - 27px);
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 1200px) {
    width: calc(33.333% - 54px);
    padding: 50px 30px;
  }

  h4 {
    margin-top: 0;
  }

  p {
    font-size: var(--p);
  }

  > p {
    margin-bottom: var(--gap);
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .blogitem__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--gap) / 2);
    margin-top: auto;

    p {
      color: #777;
      font-weight: 700;
      font-size: 16px;
    }

    > * {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &:hover {
    color: #fff;
    border-color: var(--primary);
    background-color: #151515;
    box-shadow: var(--boxShadow);
  }
`

export const PostSingleStyles = styled.article`
  padding: var(--sectionMargin) var(--borderSpacing) 0 var(--borderSpacing);
  max-width: 750px;
  margin: 0 auto;
  box-sizing: content-box;

  .blogsingle {
    &__title {
      font-size: var(--h2);
      font-weight: 700;
    }

    &__content {
      border-top: 2px solid var(--primary);
      padding-top: calc(var(--gap));
    }

    &__back {
      padding-top: var(--gap);
    }
  }
`
