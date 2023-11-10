import { Time } from '@vidstack/react';

// @hl-start
export function TimeGroup() {
  return (
    <div className="media-time-group">
      <Time className="media-time" type="current" />
      <div className="media-time-divider">/</div>
      <Time className="media-time" type="duration" />
    </div>
  );
}
// @hl-end
