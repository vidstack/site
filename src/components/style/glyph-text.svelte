<script lang="ts">
  // inspired by: https://codepen.io/jh3y/pen/GRLKMPY

  export let text: string;
  export let animate: boolean;

  const glyphs =
    'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>

<div class="font-mono text-xl tracking-tighter" class:animate>
  {#each text.split('') as char, i}
    <span
      class="relative text-transparent"
      data-char={char}
      style={[
        `--i: ${i}`,
        ...[1, 2, 3].map(
          (i) => `--char-${i}: "${glyphs[Math.floor(Math.random() * glyphs.length)]}"`,
        ),
      ].join(';')}
    >
      {char}
    </span>
  {/each}
</div>

<style>
  span::after {
    content: attr(data-char);
    position: absolute;
    display: inline-block;
    inset: 0;
    color: rgb(var(--color-soft) / 80);
  }

  .animate span::after {
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
