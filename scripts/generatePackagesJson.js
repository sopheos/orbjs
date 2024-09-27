/**
 * Generate package.json file for each sub package in the project
 * File is generated in a new folder on top-level
 * Package name is `@sopheos/orbjs/*`
 */
 const fs = require('fs-extra');
 const path = require('path');

 /**
  * Names of sub packages. Come from folders in /src.
  * Must be sync with `files` & `exports` in main package.json
  */
 const subPackagesList = [
  'format_helpers',
  'geo',
  'lang',
  'opening_hour',
  'rules',
  'upload',
 ];

 subPackagesList.map((alias) => path.resolve(__dirname, `../${alias}`)).forEach((alias) => {
   if (fs.existsSync(alias)) {
     fs.removeSync(alias);
   }
   fs.ensureDirSync(alias);
 });

 subPackagesList.forEach((alias) => {
   const packageJson = {
     "name": `@sopheos/orbjs/${alias}`,
     "types": `../dist/types/${alias}/index.d.ts`,
     "main": `../dist/cjs/${alias}/index.js`,
     "module": `../dist/esm/${alias}/index.js`,
     "es2015": `../dist/esm/${alias}/index.js`,
     "sideEffects": false
   };

   fs.writeJSON(path.resolve(__dirname, `../${alias}/package.json`), packageJson, { spaces: 2 });
 });
