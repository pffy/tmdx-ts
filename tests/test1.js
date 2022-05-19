#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for IdxToneMarks
 * git      : https://github.com/pffy/tmdx-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { IdxToneMarks } = require('../.');

const str = 'hao3';
const key = 'ao3';

console.log('good? %s?: %s', str, str.replace(key, IdxToneMarks.tmdx[key]));
console.log('done.');
