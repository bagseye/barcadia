import React from 'react';
import {INLINES, BLOCKS, MARKS} from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const options = {
    renderMark: {
        [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
        [MARKS.ITALIC]: (text) => <em>{text}</em>,
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
        [MARKS.CODE]: (text) => <code>{text}</code>
    },
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const {gatsbyImageData, description} = node.data.target;

            return (
                <div className="contentimg">
                    <GatsbyImage image={getImage(gatsbyImageData)} alt={description ? description : null} />
                    {description && (
                        <div className="contentdescription">{description}</div>
                    )}
                </div>
            )
        },
        [INLINES.HYPERLINK]: (node, children ) => {
            if(node.data.uri.includes("player.vimeo.com/video")) {
                return <iframe title="Vimeo content" loading="lazy" src={node.data.uri} frameBorder="0" allowFullScreen></iframe>
            } else if (node.data.uri.includes("youtube.com/embed")) {
                <iframe title="YouTube content" loading="lazy" frameborder="0" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            } else if (node.data.uri.includes("giphy.com/embed")) {
                return <iframe title="Giphy content" loading="lazy" src={node.data.uri} frameborder="0" allowFullScreen></iframe>
            }
            else {
                return <a href={node.data.uri}>{children}</a>
            }
        }
    }
}

const RichText = ({richText}) => {
    return <div>{renderRichText(richText, options)}</div>;
}

RichText.propTypes = {
    richText: PropTypes.any.isRequired,
}
 
export default RichText;
