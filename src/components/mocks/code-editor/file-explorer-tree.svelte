<script lang="ts">
  import { currentCSSLibrary, type CSSLibrary } from '~/stores/libraries';
  import { onMount } from 'svelte';

  import { createFocusTrap } from '../../../aria/focus-trap';
  import { ariaBool } from '../../../utils/aria';
  import { isKeyboardPress } from '../../../utils/keyboard';
  import { isUndefined } from '../../../utils/unit';

  export let hash: string | undefined = undefined;

  const storageKey = hash ? `@vidstack/explorer::${hash}` : undefined;

  let root: HTMLElement,
    activeItem: HTMLElement | null = null,
    focusTrap = createFocusTrap({
      selectors: ['[role="treeitem"]'],
      onEscape() {
        root?.focus();
      },
    });

  onMount(() => {
    activeItem = root.querySelector('li[aria-selected="true"]');
    init();
  });

  function initActiveItem() {
    if (!activeItem) return;
    const path = activeItem.getAttribute('data-path');
    if (path) togglePath(path, true);
  }

  function init() {
    if (!storageKey) {
      initActiveItem();
      return;
    }

    let path = window.localStorage.getItem(storageKey);

    if (!path) {
      initActiveItem();
      return;
    }

    if (activeItem) {
      const oldPath = activeItem.getAttribute('data-path');
      if (oldPath) togglePath(oldPath, false);
    }

    togglePath(path, true);
  }

  function togglePath(path: string, isOpen: boolean) {
    let currentPath = '',
      folders = path.split('/').slice(1, -1);

    for (const folder of folders) {
      currentPath += '/' + folder;
      const el = root.querySelector<HTMLElement>(`[data-path="${currentPath}"]`);
      if (el) toggleFolder(el, isOpen);
    }

    const fileEl = root.querySelector<HTMLElement>(`[data-path="${path}"]`);

    if (fileEl) {
      if (isOpen) selectFile(fileEl);
      else deselectFile(fileEl);
    }
  }

  function toggleFolder(target: HTMLElement, force?: boolean) {
    const el = target.hasAttribute('data-folder') ? target.parentElement! : target,
      expanded = isUndefined(force) ? el.getAttribute('aria-expanded') !== 'true' : force;

    el.setAttribute('aria-expanded', ariaBool(expanded));

    const icon = target.querySelector<HTMLElement>('.folder-icon'),
      openIcon = target.querySelector<HTMLElement>('.folder-open-icon');

    if (icon) icon.style.display = expanded ? 'none' : 'inline-block';
    if (openIcon) openIcon.style.display = expanded ? 'inline-block' : 'none';
  }

  function selectFile(target: HTMLElement) {
    deselectFile(activeItem);

    const popupId = target.getAttribute('data-popup');

    if (popupId) {
      const popup = document.getElementById(popupId);
      if (popup) popup.style.display = '';
    }

    target.setAttribute('aria-selected', 'true');

    if (storageKey) {
      const path = target.getAttribute('data-path');
      if (path && !path.endsWith('.css')) window.localStorage.setItem(storageKey, path);
    }

    activeItem = target;

    window.dispatchEvent(
      new CustomEvent('code-editor-change', {
        detail: {
          path: target.getAttribute('data-path'),
        },
        bubbles: true,
      }),
    );
  }

  function deselectFile(target: HTMLElement | null) {
    if (!target) return;

    const popupId = target.getAttribute('data-popup');

    if (popupId) {
      const popup = document.getElementById(popupId);
      if (popup) popup.style.display = 'none';
    }

    target.setAttribute('aria-selected', 'false');
    if (target === activeItem) activeItem = null;
  }

  function onSelect(event: Event) {
    const target = event.target;

    if (!(target instanceof HTMLElement)) return;

    if (target.hasAttribute('aria-expanded') || target.hasAttribute('data-folder')) {
      toggleFolder(target);
      return;
    }

    if (target.hasAttribute('aria-selected')) {
      selectFile(target);
    }
  }

  function getFolderPath(target: HTMLElement) {
    return target.getAttribute('data-path')!.split('/').slice(0, -1).join('/');
  }

  function toggleExamples(cssLib: CSSLibrary) {
    let elements = [...root.querySelectorAll<HTMLElement>('li[role="treeitem"][data-styling]')],
      activeElements = elements.filter((el) => el.getAttribute('data-styling') === cssLib);

    const prevActive = activeItem;

    for (const el of elements) {
      const isHidden = el.getAttribute('data-styling') !== cssLib;
      if (isHidden) deselectFile(el);
      el.style.display = isHidden ? 'none' : '';
    }

    if (!activeItem) {
      const basePath = prevActive && getFolderPath(prevActive).replace(/\/\[.*?\]/, '');

      const el =
        (basePath &&
          root.querySelector<HTMLElement>(
            `[data-path^="${basePath}"][data-styling="${cssLib}"]`,
          )) ||
        activeElements[0];

      if (el) {
        togglePath(el.getAttribute('data-path')!, true);
      }
    }

    const sidebar = root.closest<HTMLElement>('.code-editor-sidebar');
    if (sidebar && elements.length) {
      sidebar.style.display = activeElements.length === 1 ? 'none' : '';
    }
  }

  $: root && toggleExamples($currentCSSLibrary);
</script>

<ul
  class="w-full flex flex-col"
  role="tree"
  aria-label="Mock Editor File Explorer"
  tabindex="0"
  on:pointerup={onSelect}
  on:keydown={(event) => {
    if (isKeyboardPress(event)) {
      if (event.target === root) {
        focusTrap(root);
        return;
      }

      onSelect(event);
    }
  }}
  bind:this={root}
>
  <slot />
</ul>
