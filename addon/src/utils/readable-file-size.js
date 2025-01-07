export default function readableFileSize(numberOfBytes) {
  let readableSize;
  let units;
  numberOfBytes = numberOfBytes || 0;
  if (numberOfBytes >= 0 && numberOfBytes < 1000) {
    readableSize = numberOfBytes;
    units = ' bytes';
  } else if (numberOfBytes >= 1000 && numberOfBytes < 1000000) {
    readableSize = Math.ceil(numberOfBytes / 1000);
    units = ' KB';
  } else if (numberOfBytes >= 1000000 && numberOfBytes < 1000000000) {
    readableSize = (numberOfBytes / 1000000).toFixed(2);
    units = ' MB';
  } else if (numberOfBytes >= 1000000000) {
    readableSize = (numberOfBytes / 1000000000).toFixed(2);
    units = ' GB';
  }
  let prettySize = readableSize + units;
  return prettySize;
}
