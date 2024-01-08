import u from "unist-builder";
import { visit } from "unist-util-visit";
import getReadingTime from "reading-time";

export function remarkCodeSandbox() {
  return function (tree) {
    visit(tree, (node, index, parent) => {
      if (node.type !== "code") return;
      if (!node.data || !node.data.codesandboxUrl) return;
      const { codesandboxUrl } = node.data;
      const codesandbox = u("paragraph", [
        u("link", { url: codesandboxUrl }, "Open in CodeSandbox"),
      ]);
      parent.children.splice(index + 1, 0, codesandbox);
    });
  };
}
