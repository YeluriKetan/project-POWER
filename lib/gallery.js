export function getAllImagesLinks() {
  const data = require("./content/gallery.json");
  const images = data.images;
  images.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  return images.map(({ title, date, fileName }) => {
    return {
      title: title,
      date: date,
      link: "/gallery/" + fileName,
    };
  });
}
