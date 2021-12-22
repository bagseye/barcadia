import styled from "styled-components"

export const PostItemsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--gap);
`

export const PostItemStyles = styled.article`
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 27px);
  }

  h2 {
    &:hover,
    &:focus {
      a {
        color: var(--primary);
      }
    }
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
  }
`

export const PostSingleStyles = styled.article`
  padding: var(--sectionMargin) var(--borderSpacing);
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
