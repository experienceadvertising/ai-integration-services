import sharp from "sharp";
const out = "artifacts/consulting-site/public";
for (const item of [
  {
    file: "og-corporate-ai-training.png",
    lines: ["Corporate AI training", "for your team"],
    detail: "Practical workshops. Your tools. Your workflows.",
    footer: "Custom workshop quotes with Evan Weber",
  },
  {
    file: "og-hire-ai-developer.png",
    lines: ["Hire Evan Weber", "to build your next project"],
    detail: "Websites, apps, software, and useful online tools",
    footer: "Plan. Build. Test. Launch. Improve.",
  },
]) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#faf7f3"/><rect x="64" y="64" width="8" height="502" fill="#d4703a"/><text x="108" y="108" font-family="Arial,sans-serif" font-size="26" fill="#655950">LearnCowork • Evan Weber</text><text x="108" y="258" font-family="Arial,sans-serif" font-size="62" font-weight="bold" fill="#211b18">${item.lines[0]}</text><text x="108" y="334" font-family="Arial,sans-serif" font-size="56" font-weight="bold" fill="#211b18">${item.lines[1]}</text><text x="108" y="414" font-family="Arial,sans-serif" font-size="29" fill="#655950">${item.detail}</text><path d="M108 466 H1092" stroke="#dcd4cb"/><text x="108" y="520" font-family="Arial,sans-serif" font-size="27" fill="#9c441c">${item.footer}</text><text x="108" y="563" font-family="Arial,sans-serif" font-size="23" fill="#655950">learncowork.net</text></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`${out}/${item.file}`);
  console.log(
    item.file,
    await sharp(`${out}/${item.file}`)
      .metadata()
      .then(({ width, height }) => ({ width, height })),
  );
}
