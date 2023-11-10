function BufferingIndicator() {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex h-full w-full items-center justify-center">
      <svg
        className="h-20 w-20 text-white opacity-0 transition-opacity duration-200 ease-linear media-buffering:animate-spin media-buffering:opacity-100"
        fill="none"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx={60}
          cy={60}
          r={54}
          stroke="currentColor"
          strokeWidth={8}
        ></circle>
        <circle
          className="opacity-75"
          cx={60}
          cy={60}
          r={54}
          pathLength={100}
          stroke="currentColor"
          strokeWidth={10}
          strokeDasharray={100}
          strokeDashoffset={50}
        ></circle>
      </svg>
    </div>
  );
}
