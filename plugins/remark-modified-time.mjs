import process from "process";
import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const output = execSync(`git --no-pager log -1 --pretty=%cI "${filepath}"`);
    file.data.astro.frontmatter.lastModified = output.toString().replace('\n', '');
  };
}
