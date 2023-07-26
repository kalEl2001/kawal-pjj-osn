const calcRed = (solved, total) => {
  if (solved <= 0.25 * total) return (solved / total) * 10 + 55;
  if (solved < 0.5 * total) return 255;
  if (solved == total) return 0;

  return 255 - 1 * (solved / (2 * total));
};

const calcGreen = (solved, total) => {
  if (solved <= 0.25 * total) return 0;
  return 5.1 * (solved / (2 * total)) * 100;
};

const calcColor = (solved, total) => {
  if (solved == null) {
    return "#eee";
  }

  if (total == 0) {
    return "#eee";
  }

  var hue = (solved * 120.0) / total;
  return "hsl(" + hue.toString() + ", 80%, 60%)";
};

export { calcRed, calcGreen, calcColor };
