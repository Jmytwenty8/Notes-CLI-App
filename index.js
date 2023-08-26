#!/usr/bin/env node

const note = process.argv[2];

const data = {
  content: note,
  id: Date.now(),
};

console.log(data);
