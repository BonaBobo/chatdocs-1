<script lang="ts">
	import { chats } from '$lib/stores/chats';
	import Chatbox from '$lib/components/chat/chatbox.svelte';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	$: chatId = data.chatId;
	$: messages = $chats.get(chatId) ?? [];
	let prompt: string = '';

	function newPrompt(e: CustomEvent<string>) {
		messages = [
			...messages,
			{
				type: 'user',
				content: e.detail
			},
			{
				type: 'bot',
				content: '...'
			}
		];
	}

	$: if (form?.success) {
		messages.pop();
		messages = [
			...messages,
			{
				type: 'bot',
				content: form?.message ?? 'Something went wrong.'
			}
		];
		$chats.set(chatId, messages);
		form.success = false;
		form.message = '';
	}
</script>

<div class="container my-4 m-auto">
	<div class="h-full bg-accent dark:bg-neutral rounded-md px-4 py-6 w-full ">
		<form method="POST" action="?/newPrompt" use:enhance>
			<Chatbox on:promptSubmit={newPrompt} bind:messages bind:prompt />
		</form>
	</div>
</div>
