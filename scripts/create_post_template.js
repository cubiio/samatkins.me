#!/usr/bin/env node

const fs = require("fs");
const yargs = require("yargs");

const { argv } = yargs
  .option("name", {
    alias: "n",
    description: "Title of the blog post",
    type: "string"
  })
  .help()
  .alias("help", "h");

console.log(`Creating template: "${argv.name}"`);

const date = new Date().toISOString();
const fileDate = date.slice(0, 10).replace(/-/g, "");
const parametizedTitle = argv.name.replace(/\s/g, "-").toLowerCase();

const outputFile = `./content/posts/${fileDate}---${parametizedTitle}.md`;
const contents = `---
title: "${argv.name}"
date: "${date}"
template: "post"
draft: true
slug: "/post/${parametizedTitle}/"
category: "programming"
tags:
- "programming"
description: ""
---
`;

const createPostTemplateFile = (outputFile, contents) => {
  fs.writeFile(outputFile, contents, err => {
    if (err) {
      return console.log("⚠️ Something went wrong");
    }
    return console.log("👍 file created");
  });
};

createPostTemplateFile(outputFile, contents);
