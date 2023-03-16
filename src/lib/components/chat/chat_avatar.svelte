<script lang="ts">
	import Bot from '../icons/bot.svelte';
	import User from '../icons/user.svelte';

	export let icon = 'bot';
</script>

<div class="chat-image avatar">
	<div class="w-10 rounded-full">
		{#if icon === 'bot'}
			<Bot />
		{:else}
			<User />
		{/if}
	</div>
</div>
