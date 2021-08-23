<svelte:options immutable={true} />

<div id='home' class='intro route bg-image'>
	<div class='overlay-itro'></div>
	<div class='intro-content display-table'>
		<div class='table-cell'>
			<div class='container'>
				<h1 class='intro-title mb-4'>I am Simone</h1>
				<p class='intro-subtitle animate__animated animate__backInUp'>
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
    .bg-image {
        background-image: url('../../../static/background.jpeg');
        animation-name: fadeInBackground;
        animation-duration: 1s;
    }

    @keyframes fadeInBackground {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
