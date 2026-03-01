const greenGridSvg = `
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5" opacity="0.2"/>
    </pattern>
    <pattern id="largeGrid" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#smallGrid)"/>
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#1e8f7a" />
  <rect width="100%" height="100%" fill="url(#largeGrid)" />
</svg>
`;

const dotGridSvg = `
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
      {/* cx/cy centers the dot, r is radius. Fill is a neutral tailwind gray-400 */}
      <circle cx="2" cy="2" r="0.5" fill="#000" />
    </pattern>
  </defs>
  
  {/* Pure White Background */}
  <rect width="100%" height="100%" fill="#ffffff" />
  
  {/* The Dot Overlay */}
  <rect width="100%" height="100%" fill="url(#dot-pattern)" />
</svg>
`;

const greenGraphBg = `url("data:image/svg+xml;utf8,${encodeURIComponent(greenGridSvg)}")`;

const whiteDotBg = `url("data:image/svg+xml;utf8,${encodeURIComponent(dotGridSvg)}")`;

export {
    greenGraphBg,
    whiteDotBg
};