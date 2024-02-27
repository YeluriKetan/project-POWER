const useOnline = process.env.USE_REMOTE_IMAGES === "true";

export async function getAllImagesLinks() {
  const data = useOnline
    ? await fetch(
        "https://firebasestorage.googleapis.com/v0/b/power-becec.appspot.com/o/gallery.json?alt=media"
      ).then((res) => res.json())
    : require("./content/gallery.json");
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
  return images.map(({ title, date, fileName, width, height }) => {
    return {
      title,
      date,
      link: useOnline
        ? "https://firebasestorage.googleapis.com/v0/b/power-becec.appspot.com/o/images%2F" +
          fileName +
          "?alt=media"
        : "/gallery/" + fileName,
      width,
      height,
    };
  });
}
