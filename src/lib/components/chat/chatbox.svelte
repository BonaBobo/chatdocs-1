<script lang="ts">
	import type { Chats } from '$lib/stores/chats';
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import MessageIcon from '../icons/message.svelte';
	import ChatBubble from './chat_bubble.svelte';

	export let messages: Chats;
	export let prompt: string = '';

	const dispatch = createEventDispatcher();
	async function addPrompt() {
		console.log(prompt);
		dispatch('promptSubmit', prompt);
	}
</script>

<div class="chat-box w-full min-h-screen flex flex-col justify-between gap-8">
	<h1 class="font-normal text-xl text-center">Untitled</h1>
	<div class="alert alert-sm text-xs alert-warning">Sometimes the answer is bullshit.</div>
	<div class="chats h-full">
		{#if messages.length === 0}
			<ChatBubble content="Welcome to chatdocs!" />
		{/if}
		{#each messages as message}
			<div in:slide={{ delay: 100 }}>
				<ChatBubble avatar={message.type} content={message.content} />
			</div>
		{/each}
	</div>
	<div class="chat-input w-full flex flex-row items-center gap-2 w-full">
		<textarea
			id="prompt"
			name="prompt"
			placeholder="..."
			bind:value={prompt}
			class="textarea resize-none overflow-hidden textarea-bordered textarea-xs w-full"
		/>
		<button on:click={addPrompt} class="btn btn-ghost rounded-full">
			<MessageIcon cl="w-6 fill-primary" />
		</button>
	</div>
</div>
