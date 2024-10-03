# my-portfolio-react

# to host in github pages

- `npm install --save-dev gh-pages`

- add in package.json at top level
  `"homepage": "https://your-username.github.io/repo-name"`

- add script in package.json

  ```"scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
      }
  ```

- build app
  `npm run build`

- deploy gh page
  `npm run deploy`

* noe we can verify the deployment at : https://your-username.github.io/repo-name

- If you make changes to your code, repeat the build and deploy steps using:
  `  npm run build
npm run deploy`

## deployed using google firebase

Project Console: https://console.firebase.google.com/project/hajimalung-77d29/overview
Hosting URL: https://hajimalung-77d29.web.app
