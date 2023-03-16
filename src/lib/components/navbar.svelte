<script>
	import Github from './icons/github.svelte';

	let openDropdown = false;
</script>

<div class="navbar">
	<div class="navbar-start">
		<a href="/" class="text-primary text-xl">ChatDocs</a>
	</div>
	<div class="navbar-end gap-2">
		<div class="dropdown dropdown-left dropdown-bottom">
			<button class="btn btn-sm m-1 normal-case">Saved Chats</button>
			<ul
				class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
				class:dropdown-open={openDropdown}
			>
				<li><a href="/chats/helloworldid">Hello, World</a></li>
				<li><a href="/chats/randomidheremaybeulid">How to ...</a></li>
			</ul>
		</div>
		<a href="https://github.com/mystique09">
			<Github />
		</a>
	</div>
</div>
