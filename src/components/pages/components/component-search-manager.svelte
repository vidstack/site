<script lang="ts">
  import uFuzzy from '@leeoniya/ufuzzy';
  import { onMount } from 'svelte';

  import { lowercaseFirstLetter } from '../../../utils/string';
  import { componentSearchText, currentComponentLibrary } from './shared';

  let fuzzy = new uFuzzy(),
    tags: string[] = [],
    activeLinks: HTMLAnchorElement[] = [],
    hasMounted = false;

  onMount(() => {
    hasMounted = true;
    return () => {
      hasMounted = false;
    };
  });

  $: links = hasMounted
    ? [...document.querySelectorAll<HTMLAnchorElement>('.components-grid a')]
    : [];

  $: activeLinks = links.filter((el) => isFrameworkMatch(el, $currentComponentLibrary));

  $: tags = activeLinks.map((el) => {
    const title = el.getAttribute('data-title')!.trim(),
      slug = el.getAttribute('data-slug')!.trim();
    return title + slug;
  });

  $: indicies = fuzzy.filter(tags, normalizeSearchText($componentSearchText));
  $: filteredLinks = indicies?.map((i) => activeLinks[i]) || activeLinks;

  $: if (activeLinks.length) {
    const libSegment = $currentComponentLibrary === 'react' ? '' : 'wc/';

    for (const el of links) {
      el.style.display = 'none';
    }

    for (const el of activeLinks) {
      const slug = el.getAttribute('data-slug'),
        hash = el.getAttribute('data-hash');
      el.setAttribute('href', `/docs/${libSegment}${slug}${hash ? `#${hash}` : ''}`);
    }

    for (const el of filteredLinks) {
      el.style.display = '';
    }
  }

  function isFrameworkMatch(el: HTMLElement, lib: string) {
    const framework = el.getAttribute('data-framework');
    return !framework || framework === lib;
  }

  const upperCharRE = /[A-Z]/g;
  function normalizeSearchText(text: string) {
    return lowercaseFirstLetter(text.replace(/\s+/, '-')).replace(
      upperCharRE,
      (x) => '-' + x.toLowerCase(),
    );
  }
</script>

<slot />
