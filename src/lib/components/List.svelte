<svelte:options immutable={true} />

<script lang="ts">
	import Item from './Item.svelte';
	import type { IProject } from '$lib/models/project';

	export let list: IProject[];
</script>

{#each list as item}
	<Item {item} />
{/each}
