<script lang="ts">
  import { getTerminalContext } from './context';

  const { directory, branch } = getTerminalContext();
</script>

<span class="mr-1 font-mono font-semibold text-cyan-400">{directory}</span>

<!-- Branch -->
<div class="mx-1 flex items-center font-mono">
  <span class="font-mono font-semibold text-indigo-400">git:(</span>
  <span class="font-mono font-semibold text-red-400">{branch}</span>
  <span class="font-mono font-semibold text-indigo-400">)</span>
</div>
