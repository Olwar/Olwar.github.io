// Writes the rendered page into dist/index.html (English) and
// dist/fi/index.html (Finnish), so crawlers that do not run JavaScript
// (AI crawlers, link previews) still see the full content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { render, fiHead } = await import(
  pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href
);

const template = fs.readFileSync(path.join(root, "dist/index.html"), "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`${marker} not found in dist/index.html`);

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Puts `value` after the one match of `pattern` (its first group). A change
// to index.html that breaks a pattern stops the build, so the Finnish page
// never keeps an English tag by accident.
function swap(html, pattern, value) {
  const count = html.match(new RegExp(pattern.source, "g"))?.length ?? 0;
  if (count !== 1) throw new Error(`${pattern} matched ${count} times, not 1`);
  return html.replace(pattern, (_, start) => start + value);
}

function finnishHead(html) {
  const url = "https://olliairola.com/fi/";
  const meta = (attr, name) => new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*`);
  const tags = [
    [/(<html lang=")en/, "fi"],
    [/(<title>)[^<]*/, fiHead.title],
    [meta("name", "description"), fiHead.description],
    [/(<link rel="canonical" href=")[^"]*/, url],
    [meta("property", "og:url"), url],
    [meta("property", "og:title"), fiHead.title],
    [meta("property", "og:description"), fiHead.ogDescription],
    [meta("property", "og:image:alt"), fiHead.imageAlt],
    [meta("property", "og:locale"), "fi_FI"],
    [meta("property", "og:locale:alternate"), "en_US"],
    [meta("name", "twitter:title"), fiHead.title],
    [meta("name", "twitter:description"), fiHead.ogDescription],
    [meta("name", "twitter:image:alt"), fiHead.imageAlt],
  ];
  for (const [pattern, value] of tags) html = swap(html, pattern, esc(value));

  // The structured data gets a Finnish profile page; the person is the same.
  const ld = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
  if (!ld.test(html)) throw new Error("ld+json not found in dist/index.html");
  return html.replace(ld, (_, open, json, close) => {
    const data = JSON.parse(json);
    const page = data["@graph"].find((n) => n["@type"] === "ProfilePage");
    if (!page) throw new Error("ProfilePage not found in ld+json");
    Object.assign(page, {
      "@id": `${url}#profile`,
      url,
      name: fiHead.title,
      description: fiHead.description,
      inLanguage: "fi",
    });
    return open + JSON.stringify(data, null, 2) + close;
  });
}

const pages = [
  { url: "/", file: "dist/index.html", html: template },
  { url: "/fi/", file: "dist/fi/index.html", html: finnishHead(template) },
];

for (const page of pages) {
  const file = path.join(root, page.file);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(
    file,
    page.html.replace(marker, () => `<div id="root">${render(page.url)}</div>`)
  );
  console.log(`Prerendered ${file}`);
}
