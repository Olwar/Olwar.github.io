// Writes the rendered page into dist/index.html so crawlers that do not run
// JavaScript (AI crawlers, link previews) still see the full content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { render } = await import(
  pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href
);

const file = path.join(root, "dist/index.html");
const html = fs.readFileSync(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error(`${marker} not found in ${file}`);

fs.writeFileSync(file, html.replace(marker, () => `<div id="root">${render("/")}</div>`));
console.log(`Prerendered ${file}`);
