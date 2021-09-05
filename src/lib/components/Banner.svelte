<svelte:options immutable={true} />

<<<<<<< HEAD
<script>
	let src = 'img/bg.jpeg';
	let stl = {
		backgroundImage: "url({src})"
	};
</script>

<div id="home" class="intro route bg-image" style="background-image: url({src});">
	<div class="overlay-itro" />
	<div class="intro-content display-table">
		<div class="table-cell">
			<div class="container">
				<h1 class="intro-title mb-4">I am Simone</h1>
				<p class="intro-subtitle animate__animated animate__backInUp">
=======
<div id='home' class='intro route bg-image'>
	<div class='overlay-itro'></div>
	<div class='intro-content display-table'>
		<div class='table-cell'>
			<div class='container'>
				<h1 class='intro-title mb-4'>I am Simone</h1>
				<p class='intro-subtitle animate__animated animate__backInUp'>
>>>>>>> 23a8a91451f277e072fef3980d27e779c7a8f8fa
					<span>I am a frontend & backend developer</span>
				</p>
				<p
					class='intro-subtitle animate__animated animate__backInUp animate__delay-1s'
				>
					<span>tech enthusiast</span>
				</p>
				<p
					class='intro-subtitle animate__animated animate__backInUp animate__delay-2s'
				>
					<span>🍕 lover</span>
				</p>
			</div>
		</div>
	</div>
</div>

<style scoped>
<<<<<<< HEAD
	.bg-image {
		animation-name: fadeInBackground;
		animation-duration: 1s;
	}
=======
    .bg-image {
        background-image: url('../../../static/background.jpeg');
        animation-name: fadeInBackground;
        animation-duration: 1s;
    }
>>>>>>> 23a8a91451f277e072fef3980d27e779c7a8f8fa

    @keyframes fadeInBackground {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
