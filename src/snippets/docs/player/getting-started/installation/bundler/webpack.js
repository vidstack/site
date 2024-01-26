const { webpack: VidstackPlugin } = require('vidstack/plugins');

module.exports = {
  //...
  plugins: [
    // Include filter to only check specific files for components and styles.
    new VidstackPlugin({ include: /player\// }),
  ],
};
