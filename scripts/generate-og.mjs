import sharp from "sharp";
import { writeFileSync } from "fs";

const W = 1200, H = 630;

// Claude-style swirl: 5 petals rotated around center
function petal(angle) {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  // petal in local coords, then rotate
  const pts = [
    [0, 0],
    [52, -26],  // cp1
    [104, 39],  // cp2
    [13, 117],  // end
    [-39, 91],  // cp1 back
    [-39, 26],  // cp2 back
  ];
  const r = ([x, y]) => [x * cos - y * sin, x * sin + y * cos];
  const [[x0,y0],[x1,y1],[x2,y2],[x3,y3],[x4,y4],[x5,y5]] = pts.map(r);
  return `M ${x0} ${y0} C ${x1} ${y1} ${x2} ${y2} ${x3} ${y3} C ${x4} ${y4} ${x5} ${y5} Z`;
}

const petals = Array.from({ length: 5 }, (_, i) =>
  petal((i / 5) * Math.PI * 2)
).map(d => `<path d="${d}" fill="url(#pg)" opacity="0.93"/>`).join("\n  ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="pg" x1="0%" y1="0%" x2="60%" y2="100%">
      <stop offset="0%" stop-color="#E8956A"/>
      <stop offset="100%" stop-color="#C45E2A"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#F5F0E8"/>

  <!-- Swirl logo, centered at 600,225 -->
  <g transform="translate(600,225)">
    ${petals}
    <!-- Center hole -->
    <circle r="20" fill="#F5F0E8"/>
  </g>

  <!-- Title -->
  <text x="${W/2}" y="400" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-weight="bold" font-size="66" fill="#1C1917">
    Claude Cowork Training
  </text>

  <!-- Subtitle -->
  <text x="${W/2}" y="462" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="28" fill="#78716C">
    AI Productivity Training by Evan Weber
  </text>
</svg>`;

const buf = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync("artifacts/consulting-site/public/og-image.png", buf);
console.log("og-image.png written");
