import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (, file) {
    const filepath = file.history[0];
    const output = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.lastModified = output.toString();
  };
}
