<svelte:options immutable={true} />

<script lang="ts">
	import type { IProject } from '$lib/models/project';

	export let item: IProject;

	function toggleThumbUp(e: any): void {
		var target = e.target.getElementsByClassName('fas');
		if (target.length > 0) {
			const el = target[0];
			el.classList.toggle(item.iconcode);
			el.classList.toggle('fa-star');
			el.classList.toggle('text-light');
		}
	}
</script>

<div class="col-md-4">
	<div
		class="service-box"
		on:mouseenter={toggleThumbUp}
		on:mouseleave={toggleThumbUp}
	>
		<div class="service-ico">
			<span class="ico-circle">
				<i class="fas {item.iconcode}" />
			</span>
		</div>
		<div class="service-content">
			<h2 class="s-title">{item.title}</h2>
			<p class="s-description text-center">
				{item.description}
			</p>
			<div class="row">
				<div class="col-12 text-center">
					{#each item.links as link}
						<span>
							<a href={link.url} target="_blank">{link.displayText}</a>
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style scoped>
	.fas {
		color: #ff3e00;
	}
</style>
