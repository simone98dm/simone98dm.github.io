<svelte:options immutable={true} />

<script lang="ts">
	import Item from './Item.svelte';
	export let list: any[];
</script>

{#each list as item}
	<Item {item} />
{/each}
