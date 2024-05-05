<script lang="ts">
  // inspired by: https://codepen.io/jh3y/pen/GRLKMPY

  export let text: string;
  export let animate: boolean;

  let _class = '';
  export { _class as class };

  const glyphs =
    'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>

<div class={_class} class:animate>
  {#each text.split('') as char, i}
    <span
      class="relative inline-block"
      data-char={char}
      style={[
        `--i: ${i}`,
        ...[1, 2, 3].map(
          (i) => `--char-${i}: "${glyphs[Math.floor(Math.random() * glyphs.length)]}"`,
        ),
      ].join(';')}
    >
      <span class="text-transparent">{char}</span>
    </span>
  {/each}
</div>

<style>
  div > span::after {
    content: attr(data-char);
    position: absolute;
    display: inline-block;
    inset: 0;
    color: inherit;
  }

  div.animate > span::after {
    color: rgb(var(--color-inverse));
    animation: glyphs 500ms calc(var(--i) * 50ms) steps(1, end);
  }

  @keyframes glyphs {
    0%,
    20% {
      content: '_';
    }
    40% {
      content: var(--char-1);
    }
    60% {
      content: var(--char-2);
    }
    80% {
      content: var(--char-3);
    }
  }
</style>
