export default function colorGenerator() {
  const baseHexColors = [
    '#FF6384', // red
    '#36A2EB', // blue
    '#4BC0C0', // teal
    '#FFCE56', // yellow
    '#9966FF', // purple
    '#FF9F40', // orange
    '#00A65A', // green
    '#D2D6DE', // gray
    '#F39C12', // amber
    '#3C8DBC'  // navy
  ];

  let index = 0;
  let variation = 0;

  function lightenDarkenColor(hex, amount) {
    let col = parseInt(hex.slice(1), 16);
    let r = Math.min(255, Math.max(0, (col >> 16) + amount));
    let g = Math.min(255, Math.max(0, ((col >> 8) & 0x00FF) + amount));
    let b = Math.min(255, Math.max(0, (col & 0x0000FF) + amount));
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  return function getNextColor() {
    if (index < baseHexColors.length) {
      return baseHexColors[index++];
    } else {
      const baseIndex = index % baseHexColors.length;
      const color = lightenDarkenColor(baseHexColors[baseIndex], (variation % 2 === 0 ? 20 : -20) * Math.ceil(variation / 2));
      index++;
      variation++;
      return color;
    }
  };
}
