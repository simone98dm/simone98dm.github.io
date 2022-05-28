<svelte:options immutable={true} />

<script lang="ts">
	import type { IAbout } from '$lib/models/about';
	import data from '$lib/data/about.json';
	import List from './List.svelte';

	let { projects } = data as IAbout;
</script>

<section id="projects" class="services-mf route">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="title-box text-center">
					<h3 class="title-a">Projects</h3>
					<p class="subtitle-a">On my freetime, I try to create projects</p>
					<div class="line-mf" />
				</div>
			</div>
		</div>
		<div class="row">
			<List list={projects} />
		</div>
	</div>
</section>
