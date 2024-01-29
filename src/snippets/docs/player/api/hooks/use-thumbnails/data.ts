interface ThumbnailImage {
  url: URL;
  startTime: number;
  endTime?: number;
  width?: number;
  height?: number;
  coords?: ThumbnailCoords;
}

interface ThumbnailCoords {
  x: number;
  y: number;
}
