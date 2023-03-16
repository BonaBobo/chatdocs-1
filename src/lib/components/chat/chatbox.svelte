<script lang="ts">
	import type { Chats } from '$lib/stores/chats';
	import Arrow from '../icons/arrow.svelte';
	import ChatBubble from './chat_bubble.svelte';

	export let chats: Chats;
</script>

<div class="chat-box w-full h-full flex flex-col justify-between gap-8">
	<h1 class="font-normal text-2xl text-center">Hello, world!</h1>
	<div class="chats">
		{#if chats.length === 0}
			<h1>No chat history</h1>
			<ChatBubble content="Welcome" />
		{:else}
			{#each chats as chat}
				<ChatBubble avatar={chat.type} content={chat.content} />
			{/each}
		{/if}
	</div>
	<div class="chat-input w-full flex flex-row items-center gap-2 w-full">
		<textarea
			placeholder="Bio"
			class="textarea resize-none overflow-hidden textarea-bordered textarea-xs w-full"
		/>
		<button class="btn btn-ghost rounded-full">
			<Arrow cl="w-6 fill-primary" />
		</button>
	</div>
</div>
