<svelte:options immutable={true} />

<script lang="ts">
	function toggle(): void {
		document
			.getElementsByClassName('navbar-toggler')[0]
			.classList.toggle('navbar-reduce');
	}

	function onNavScroll(): void {
		const pixels = 50;
		const supportPageOffset = window.pageXOffset !== undefined;
		const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
		const scrollTop = supportPageOffset
			? window.pageYOffset
			: isCSS1Compat
			? document.documentElement.scrollTop
			: document.body.scrollTop;

		if (scrollTop > pixels) {
			document.getElementById('mainNav').classList.remove('navbar-trans');
			document.getElementById('mainNav').classList.add('navbar-reduce');
		} else {
			document.getElementById('mainNav').classList.remove('navbar-reduce');
			document.getElementById('mainNav').classList.add('navbar-trans');
		}
	}
</script>

<svelte:window on:scroll={onNavScroll} />

<nav
	class="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
	id="mainNav"
>
	<div class="container">
		<a class="navbar-brand js-scroll" href="#home">simone98dm</a>
		<button
			class="navbar-toggler collapsed"
			type="button"
			data-toggle="collapse"
			data-target="#navbarDefault"
			aria-controls="navbarDefault"
			aria-expanded="false"
			aria-label="Toggle navigation"
			on:click={toggle}
		>
			<span />
			<span />
			<span />
		</button>
		<div
			class="navbar-collapse collapse justify-content-end"
			id="navbarDefault"
		>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link js-scroll active" href="#home">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link js-scroll" href="#about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link js-scroll" href="#projects">projects</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
