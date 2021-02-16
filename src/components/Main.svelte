<script>
  import List from "./List.svelte";
  const list = [];
</script>

<div class="section section-hero">
  <div class="grid-hero container grid-lg text-center" id="overview">
    <h1>Hello, World!</h1>
    <h2>Programmer, tech enthusiast and pizza lover</h2>
    {#if list.length > 0}
      <List {list} />
    {/if}
  </div>
</div>
