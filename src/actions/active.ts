import { DisposalBin, listenEvent } from '~/utils/events';
import type { ActionReturn } from 'svelte/action';

export function active(el: HTMLElement, callback: ActiveCallback): ActionReturn<ActiveCallback> {
  const disposal = new DisposalBin();

  function listen(callback: ActiveCallback) {
    if (!callback) return;

    function onEnter() {
      callback?.(true);
    }

    function onExit() {
      callback?.(false);
    }

    disposal.add(listenEvent(el, 'pointerenter', onEnter), listenEvent(el, 'pointerleave', onExit));
  }

  listen(callback);

  return {
    update(callback) {
      disposal.dispose();
      listen(callback);
    },
    destroy() {
      disposal.dispose();
    },
  };
}

export type ActiveCallback = ((isActive: boolean) => void) | null;
