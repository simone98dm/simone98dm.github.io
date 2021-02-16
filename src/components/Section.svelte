<script>
  export let list;
  export let title;
  import List from "./List.svelte";
</script>

{#if list.length > 0}
  <br />
  <h3 class="text-center">{title}</h3>
  <List {list} />
{/if}
