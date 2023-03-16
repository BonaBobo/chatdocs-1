<script lang="ts">
	import { chats } from '$lib/stores/chats';
	import Chatbox from '$lib/components/chat/chatbox.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { chatId } = data;

	let messages = $chats.get(chatId) ?? [];
</script>

<div class="container my-4 m-auto">
	<div class="h-full bg-accent rounded-md px-4 py-6 w-full ">
		<Chatbox chats={messages} />
	</div>
</div>
