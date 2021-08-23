<svelte:options immutable={true} />

<script lang="ts">
	import type { ISkill } from '$lib/models/skill';

	let paragraphs: string[] = [
		'I am a cloud-oriented developer.',
		'I develop daily with different technologies, in particular, I am oriented to the Microsoft world (Azure, C# dotnet core) and to the javascript/typescript world to be used as a frontend framework (Angular, React, and Svelte) and as a backend (via runtime Node).',
		'In my free time, I keep busy with various hobbies, in particular, concerning the world of cybersecurity (reverse engineering, web security).',
		'I participate in conferences concerning the world of information technology and programming/cybersecurity challenges (CTF, Reply Challenges).'
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
			tags: ['Dotnet Core', 'NodeJS', 'Express']
		},
		{
			displayText: 'Server',
			percentage: 60,
			tags: ['MSSQL', 'MYSQL', 'POSTGRESQL', 'REDIS']
		},
		{
			displayText: 'System Administrator',
			percentage: 80,
			tags: ['Linux (I use arch btw)', 'Windows']
		},
		{
			displayText: 'Other',
			percentage: 80,
			tags: [
				'Git',
				'Github/Gitlab',
				'Nmap',
				'Postman',
				'Docker',
				'Raspberry Pi',
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
							<div class="row">
								<div class="col-sm-6 col-md-5">
									<div class="about-img">
										<img
											src="https://avatars.githubusercontent.com/u/17797267"
											class="img-fluid rounded b-shadow-a rounded-circle"
											alt=""
										/>
									</div>
								</div>
								<div class="col-sm-6 col-md-7 alighn-middle">
									<div class="about-info">
										<p>
											<span class="fw-bold">Name: </span> <span>Simone</span>
										</p>
										<p>
											<span class="fw-bold">Profile: </span>
											<span>full stack developer</span>
										</p>
									</div>
								</div>
							</div>
							<div class="skill-mf">
								<p class="fw-bold">Skill</p>
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
						<div class="col-md-6">
							<div class="about-me pt-4 pt-md-0">
								<div class="title-box-2">
									<h5 class="title-left">About me</h5>
								</div>
								{#each paragraphs as paragraph}
									<p class="lead">
										<!--animate__animated animate__fadeIn animate__delay-{i}s-->
										{paragraph}
									</p>
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
