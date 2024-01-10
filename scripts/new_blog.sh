#!/bin/bash

NC='\033[0m'        # No color
RED='\033[0;31m'    # Red color
GREEN='\033[0;32m'  # Green color

now=$(date +'%Y-%m-%d %H:%M:%S')

if [ -z "$1" ]; then
  printf "${RED}Failed: Please provide a blog title${NC}\n\n"
  exit 1
fi

slug=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

template="---
title: $1
date: $now
tags: []
slug: $slug
description: $1
---

## Table of Contents

Write your content here."

echo "$template" > "src/content/blogs/$1.mdx"
printf "${GREEN}Success: Blog created successfully${NC}\n\n"