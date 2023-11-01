import { TextTrack } from 'vidstack';

const track = new TextTrack({
  src: '/media/subs/english.vtt',
  kind: 'subtitles',
  label: 'English',
  language: 'en-US',
  type: 'vtt',
  default: true,
});

track.addCue(new VTTCue(0, 10, 'Hello world!'));

player.textTracks.add(track);
