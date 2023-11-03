import { walkTriggerEventChain } from 'vidstack';

player.addEventListener('playing', (event) => {
  // walk through each trigger event in the chain
  walkTriggerEventChain(event, (trigger) => {
    console.log(trigger);
  });
});
