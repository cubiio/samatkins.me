import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import * as Styles from './SocialLinks.style';
import config from '../../config/siteConfig';

const SocialLinks = props => {
  const { postNode } = props;
  const post = postNode.frontmatter;
  const url = config.siteUrl + post.path;

  return (
    <div>
      <Styles.SocialLinksIntroText>
        Sharing is caring
      </Styles.SocialLinksIntroText>
      <Styles.SocialLinksWrapper>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={36} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={36} />
        </FacebookShareButton>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={36} />
        </RedditShareButton>
        <WhatsappShareButton url={url} title={post.title}>
          <WhatsappIcon round size={36} />
        </WhatsappShareButton>
        <EmailShareButton body={url} subject={post.title}>
          <EmailIcon round size={36} />
        </EmailShareButton>
      </Styles.SocialLinksWrapper>
    </div>
  );
};

SocialLinks.propTypes = {
  postNode: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    frontmatter: PropTypes.objectOf.isRequired,
  }).isRequired,
};

export default SocialLinks;
