<script lang="ts">
	import '../app.css';
	import TaskList from '../lib/component/taskList.component.svelte';
	import Input from '../lib/component/input.component.svelte';

	let data = [];
	let value = '';

	const submitHandler = (e: SubmitEvent) => {};
</script>

<svelte:head>
	<title>TODO</title>
</svelte:head>

<div class="todo">
	<Input bind:value on:submit={submitHandler} />
	<TaskList />
</div>

<style>
	.todo {
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		box-shadow: inset 5px 5px 20px rgba(255, 255, 255, 0.2), inset -5px -5px 20px rgba(0, 0, 0, 0.5);
		padding: 3rem 5rem;
	}
</style>
