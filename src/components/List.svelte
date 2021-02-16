<script>
  import Item from "./Item.svelte";
  export let list;
</script>

<div class="columns">
  {#each list as item}
    <Item {item} />
  {/each}
</div>
