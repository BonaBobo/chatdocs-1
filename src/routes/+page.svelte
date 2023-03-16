<script>
	import { enhance } from '$app/forms';
	let isLoading = false;

	async function handleSubmit() {
		isLoading = true;
		setTimeout(() => (isLoading = !isLoading), 2000);
		console.log('test');
	}
</script>

<svelte:head>
	<title>Chat Docs</title>
	<meta
		name="description"
		content="Welcome to ChatDocs, your go-to AI for understanding your documentation!"
	/>
</svelte:head>

<div class="container my-4 m-auto">
	<div class="w-full p-2">
		<p class="mt-2 font-light text-sm tracking-wider">
			Have you ever found yourself struggling to understand complicated documentation? Perhaps
			you're a developer trying to integrate a new API, or a business owner trying to navigate legal
			contracts.
			<br />
			<br />
			Whatever your situation, ChatDocs is here to help. Our advanced AI technology can analyze and interpret
			your documentation, breaking it down into clear and concise explanations that anyone can understand.
			<br />
			<br />
			With ChatDocs, you'll never have to spend hours pouring over complicated language or deciphering
			technical jargon again.
			<br />
			<br />
			<span class="font-semibold text-info"
				>Don't let complicated documentation hold you back any longer. Try ChatDocs today and
				experience the power of AI-driven documentation support!</span
			>
		</p>
		<h1 class="mt-4 text-xs font-bold">
			You can start using this tech by providing the documentation link
		</h1>
		<form class="mt-2 w-full m-auto" action="?/newChat" method="POST" use:enhance>
			<input
				class="mt-2 input input-primary input-md text-xs p-2 rounded-md"
				id="url"
				name="url"
				placeholder="Documentation link"
			/>
			<button
				on:click={handleSubmit}
				id="analyze-btn"
				name="analyze-btn"
				class="btn btn-md btn-accent rounded-md normal-case text-xs"
				class:btn-disabled={isLoading}>Analyze</button
			>
		</form>

		<h1 class="mt-4 text-secondary">Here are just a few of the benefits of using ChatDocs</h1>
		<div class="w-full flex items-center justify-evenly flex-wrap md:flex-nowrap gap-2">
			<div class="mt-2 card w-96 bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title text-sm md:text-base">Quick and Easy</h2>
					<p class="text-xs md:text-sm">
						ChatDocs is designed to be simple and user-friendly, so you can get the information you
						need without wasting time or effort.
					</p>
				</div>
			</div>
			<div class="mt-2 card w-96 bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title text-sm md:text-base">Versatile and adaptable</h2>
					<p class="text-xs md:text-sm">
						ChatDocs can handle a wide range of documentation types, from technical manuals to legal
						contracts and everything in between.
					</p>
				</div>
			</div>
			<div class="mt-2 card w-96 bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title text-sm md:text-base">Accessible</h2>
					<p class="text-xs md:text-sm">
						We believe that everyone should have access to high-quality documentation support, which
						is why we offer our services at an affordable price point.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
