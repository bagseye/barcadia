import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import PostItem from "./PostItem"
import useLatestBlogPost from "../../hooks/use-latest-blog-post"
import Button from "../Button/Button"

const LatestPosts = ({ title, introduction }) => {
  const latestBlogPost = useLatestBlogPost()
  return (
    <div className="section">
      <div className="container container__tight">
        {title || introduction ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
                <span>.</span>
              </h2>
            )}
            {introduction && <p>{introduction}</p>}
          </div>
        ) : null}

        <PostItems>
          {latestBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} />
          })}
        </PostItems>
        <div className="learn__more">
          <Button text="All News Items" as={Link} to="/news" />
        </div>
      </div>
    </div>
  )
}

export default LatestPosts
