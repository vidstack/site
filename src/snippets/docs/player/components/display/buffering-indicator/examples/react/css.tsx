function BufferingIndicator() {
  return (
    <div className="media-buffering-indicator">
      <svg className="media-buffering-icon" fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <circle
          className="media-buffering-track"
          stroke="currentColor"
          cx={60}
          cy={60}
          r={54}
        ></circle>
        <circle
          className="media-buffering-track-fill"
          stroke="currentColor"
          cx={60}
          cy={60}
          r={54}
          pathLength={100}
        ></circle>
      </svg>
    </div>
  );
}
