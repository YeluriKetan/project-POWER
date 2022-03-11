import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const aboutFilePath = path.join(process.cwd(), "lib", "about.md");

export async function getAboutData() {
  const fileContents = fs.readFileSync(aboutFilePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    contentHtml,
    ...matterResult.data,
  };
}
