import styled from "styled-components"

export const BlogItemsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
  justify-content: center;
  padding-top: var(--sectionPadding);
  padding-bottom: var(--sectionPadding);
`

export const BlogItemStyles = styled.article`
  flex: 1 1 auto;
  max-width: 375px;
  margin: 40px;

  h2 {
    font-weight: 700;

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
    transition: color 0.3s;
    cursor: pointer;
  }

  .blogitem__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const BlogSingleStyles = styled.article`
  padding: var(--sectionPadding) var(--borderSpacing);
  max-width: 750px;
  margin: 0 auto;
  box-sizing: content-box;

  .blogsingle {
    &__title {
      font-size: var(--h2);
      margin-bottom: 20px;
    }

    &__date {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__content {
      border-top: 2px solid var(--primary);
      padding-top: 20px;
    }

    &__back {
      padding-top: 40px;
    }
  }
`
