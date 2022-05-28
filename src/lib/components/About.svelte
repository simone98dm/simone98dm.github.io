<svelte:options immutable={true} />

<script lang="ts">
	import data from '$lib/data/about.json';
	import type { IAbout } from '$lib/models/about';

	let { paragraphs, skills } = data as IAbout;

	function calcStars(percentage: number): string {
		let str = '';
		if (typeof percentage == 'undefined') {
			return str;
		}

		const star = '⭐';
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
			<div class="col-12">
				<div class="box-shadow-full">
					<div class="row">
						<div class="col-lg-6 col-sm-12">
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
						<div class="col-lg-6 col-sm-12">
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
