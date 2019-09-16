"use strict";

module.exports = {
  url: "https://www.samatkins.com",
  pathPrefix: "/",
  title: "Blog by Sam Atkins",
  subtitle: "Father. Husband. Software Engineer.",
  copyright: `© Sam Atkins 2016-${new Date().getFullYear()}`,
  disqusShortname: "",
  postsPerPage: 4,
  googleAnalyticsId: "UA-103621072-1",
  useKatex: false,
  menu: [
    {
      label: "Articles",
      path: "/"
    },
    {
      label: "About me",
      path: "/pages/about"
    }
  ],
  author: {
    name: "Sam Atkins",
    photo: "/photo.jpg",
    bio: "Father. Husband. Software Engineer.",
    contacts: {
      github: "sam-atkins",
      linkedin: "atkinssam",
      twitter: "dev__sam"
    }
  }
};
