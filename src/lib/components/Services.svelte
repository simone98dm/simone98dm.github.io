<svelte:options immutable={true} />

<script lang="ts">
	import type { IProject } from '$lib/models/project';
	import List from './List.svelte';

	let list: IProject[] = [
		{
			title: 'Certification',
			description: '',
			links: [
				{
					displayText: 'Microsoft 70-483',
					url:
						'https://docs.microsoft.com/en-us/learn/certifications/exams/70-483'
				},
				{
					displayText: 'Microsoft MB-200',
					url:
						'https://docs.microsoft.com/en-us/learn/certifications/exams/mb-200'
				}
			],
			iconcode: 'fa-certificate'
		},
		{
			title: 'TODO SPA Projects',
			description:
				'Those projects aim to create the same todo application with different web frameworks',
			links: [
				{
					displayText: 'Angular',
					url: 'https://github.com/simone98dm/angular-todoapp'
				},
				{
					displayText: 'React',
					url: 'https://github.com/simone98dm/react-todoapp'
				},
				{
					displayText: 'Svelte',
					url: 'https://github.com/simone98dm/svelte-todoapp'
				}
			],
			iconcode: 'fa-list-ul'
		},
		{
			title: 'TSAC2019',
			description: 'Complex queue based api and frontend',
			links: [
				{
					displayText: 'repo',
					url: 'https://github.com/simone98dm/ITS-TSAC2019-Esame'
				}
			],
			iconcode: 'fa-cloud'
		}
	];
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
			<List {list} />
		</div>
	</div>
</section>
