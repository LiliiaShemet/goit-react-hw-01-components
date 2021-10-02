function randomColor() {
  return `rgb(${Math.round(Math.random() * (255 - 0) + 1)}, ${Math.round(
    Math.random() * (255 - 0) + 1,
  )}, ${Math.round(Math.random() * (255 - 0) + 1)})`;
}
export default randomColor;