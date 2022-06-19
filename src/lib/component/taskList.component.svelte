<script lang="ts">
	import Task from './task.component.svelte';

	export let todo: TODO[];
</script>

<div class="task-list">
	{#each todo as { text, done }}
		<Task {text} {done} />
	{:else}
		<div class="fallback">
			{'<-- TODO list is empty -->'}
		</div>
	{/each}
</div>

<style>
	.fallback {
		text-align: center;
		color: #ccc;
		font-weight: bold;
	}

	:global(.task-list > * + *) {
		margin-top: 2rem;
	}
</style>
