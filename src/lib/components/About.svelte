<svelte:options immutable={true} />

<script lang="ts">
	import type { ISkill } from '$lib/models/skill';

	let paragraphs: string[] = [
		'I am a cloud-oriented web developer.',
		"I'm fluent with Microsoft stack (Azure Services, ASP.NET, .NET Core/Framework) and Javascript/Typescript.",
		'My passion is both frontend and backend and because of that, I learned different frontend frameworks (Angular, React, Svelte, and ASP.NET) to create more interactive user interfaces and backend technologies (.NET Core, and NodeJS) to make performance-oriented API. ',
		'During my work experience, I improved day by day my knowledge about enterprise projects building (using design patterns like repository pattern) and how to design features to be easy to maintain and improvable with more features in the near future.',
		'I keep busy with various hobbies during my free time, particularly cyber security (mainly web security), listening to podcasts about the tech world, and riding a bike.'
	];

	let skills: ISkill[] = [
		{
			displayText: 'Web',
			percentage: 100,
			tags: [
				'HTML/CSS',
				'JavaScript',
				'TypeScript',
				'Svelte',
				'React',
				'Angular',
				'ASP.NET Core'
			]
		},
		{
			displayText: 'Backend',
			percentage: 100,
			tags: ['Dotnet Core', 'NodeJS']
		},
		{
			displayText: 'Server',
			percentage: 60,
			tags: ['MSSQL', 'MYSQL', 'POSTGRESQL', 'REDIS']
		},
		{
			displayText: 'Operating Systems',
			percentage: 80,
			tags: ['Linux (I use arch btw)', 'Windows']
		},
		{
			displayText: 'Other',
			percentage: 80,
			tags: [
				'Git',
				'Nmap',
				'Postman',
				'Docker',
				'Exception Reading',
				'Copy&Paste'
			]
		}
	];

	function calcStars(percentage: number): string {
		const star = '⭐';
		let str = '';
		if (typeof percentage == 'undefined') {
			return str;
		}

		const count = percentage / 20;
		for (let i = 0; i < count; i++) {
			str += star;
		}
		return str;
	}
</script>

<section id="about" class="about-mf sect-pt4 route">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="box-shadow-full">
					<div class="row">
						<div class="col-md-6">
							<div class="about-me pt-4 pt-md-0">
								<div class="title-box-2">
									<h5 class="title-left">About me</h5>
								</div>
								{#each paragraphs as paragraph}
									<p class="lead">
										{paragraph}
									</p>
								{/each}
							</div>
						</div>
						<div class="col-md-6">
							<div class="skill-mf">
								<div class="title-box-2">
									<h5 class="title-left">Skill</h5>
								</div>
								{#each skills as skill}
									<div class="mt-3">
										<div class="row">
											<div class="col-md-8 col-xs-6">
												<span>{skill.displayText}</span>
											</div>
											<div class="col-md-4 col-xs-6">
												<span class="float-end"
													>{calcStars(skill.percentage)}</span
												>
											</div>
											<div class="col-12">
												<div class="progress">
													<div
														class="progress-bar"
														role="progressbar"
														style="width: {skill.percentage}%"
														aria-valuenow={Number(skill.percentage)}
														aria-valuemin={0}
														aria-valuemax={100}
													/>
												</div>
											</div>
										</div>
										{#each skill.tags as tag}
											<div class="badge rounded-pill bg-light text-primary">
												{tag}
											</div>
										{/each}
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.img-fluid {
		width: 75%;
	}
</style>
