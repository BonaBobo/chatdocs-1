<script lang="ts">
	import ChatAvatar from './chat_avatar.svelte';

	export let content = 'Hello, world!';
	export let avatar: 'bot' | 'user' = 'bot';
</script>

<div class={avatar === 'bot' ? 'chat chat-start' : 'chat chat-end'}>
	<ChatAvatar icon={avatar} />
	<div class="chat-bubble {avatar === 'bot' ? 'bg-secondary' : 'bg-accent-content'}">
		{content}
	</div>
</div>
