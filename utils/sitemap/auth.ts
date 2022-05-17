import fs from "fs";

const BASE_URL = "http://localhost:3000";
//fs
export const authPaths = () => {
  const paths = fs
    .readdirSync(
      {
        development: "pages/auth",
        production: "./next/server/pages/auth",
        test: "pages/auth",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return !["_app.js", "_document.js", "sitemap.xml.js"].includes(
        staticPage
      );
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/auth/${staticPagePath}`;
    });
  console.log(paths, "paths");

  return paths;
};
// console.log(staticPaths, "staticPaths");
