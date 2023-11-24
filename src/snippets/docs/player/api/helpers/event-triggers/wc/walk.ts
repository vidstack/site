player.addEventListener('playing', (event) => {
  // walk through each trigger event in the chain
  event.triggers.walk((trigger) => {
    console.log(trigger);
  });
});
