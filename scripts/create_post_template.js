#!/usr/bin/env node

const fs = require("fs");
const yargs = require("yargs");

const { argv } = yargs
  .option("title", {
    alias: "t",
    description: "Title of the blog post",
    type: "string"
  })
  .help()
  .alias("help", "h");

console.log(`Creating template: "${argv.title}"`);

const date = new Date().toISOString();
const fileDate = date.slice(0, 10).replace(/-/g, "");
const parametizedTitle = argv.title.replace(/\s/g, "-").toLowerCase();

const outputFile = `./content/post/${fileDate}---${parametizedTitle}.md`;
const contents = `+++
title = "${argv.title}"
description = ""
author = "Sam Atkins"
date = "${date}"
tags = ["programming"]
draft = true
+++
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
