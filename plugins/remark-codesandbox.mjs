import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import getReadingTime from "reading-time";

export function remarkCodeSandbox() {
  return function (tree) {
    visit(tree, (node, index, parent) => {
      if (node.type !== "code") return;
      if (!node.data || !node.data.codesandboxUrl) return;
      const url = node.data.codesandboxUrl;
      const textNode = u("text", "Edit in CodeSandbox");
      const linkNode = u("link", { url }, [textNode]);

      // set the link's className to customize the style
      linkNode.data = { hProperties: { class: "CodeSandbox" } };

      parent.children.splice(index + 1, 0, linkNode);
    });
  };
}
