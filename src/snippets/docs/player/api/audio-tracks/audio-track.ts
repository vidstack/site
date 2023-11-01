interface AudioTrack {
  /**
   * A string which uniquely identifies the track within the media.
   */
  id: string;
  /**
   * A human-readable label for the track, or an empty string if unknown.
   */
  label: string;
  /**
   * A string specifying the audio track's primary language, or an empty string if unknown. The
   * language is specified as a BCP 47 (RFC 5646) language code, such as "en-US" or "pt-BR".
   */
  language: string;
  /**
   * A string specifying the category into which the track falls. For example, the main audio
   * track would have a kind of "main".
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/kind}
   */
  kind: string;
}
