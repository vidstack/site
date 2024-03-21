const storage = useMemo(() => new MediaDatabaseStorage(), []);

<MediaPlayer storage={storage}>
