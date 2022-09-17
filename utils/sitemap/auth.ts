import fs from "fs";

const BASE_URL = "https://thehive-ruby.vercel.app";
//fs
export const authPaths = () => {
  const paths = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
        test: "pages",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return !["_app.js", "_document.js", "sitemap.xml.js"].includes(
        staticPage
      );
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });
  console.log(paths, "paths");

  return paths;
};
// console.log(staticPaths, "staticPaths");
