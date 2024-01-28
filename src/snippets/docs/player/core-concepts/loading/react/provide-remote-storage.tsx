const storage = useMemo(() => new DatabaseStorage(), []);

<MediaPlayer storage={storage}>
