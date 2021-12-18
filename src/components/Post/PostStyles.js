import styled from "styled-components"

export const PostItemsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding-top: var(--sectionPadding);
  padding-bottom: var(--sectionPadding);
  gap: 40px;
`

export const PostItemStyles = styled.article`
  max-width: 375px;

  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 27px);
  }

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
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PostSingleStyles = styled.article`
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

export const LatestPostsStyles = styled.div`
  padding: 70px var(--borderSpacing);
  color: #fff;
  background-color: #000;

  @media (min-width: 375px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .container {
    @media (min-width: 768px) {
      width: 66vw;
      margin-left: 0;
    }
  }
`
