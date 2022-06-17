<script lang="ts">
	import Button from '../utils/ui/button.ui.svelte';

	let patch: Boolean = false;

	$: method = patch ? 'post' : 'delete';
	// $: url =
</script>

<div class="task">
	<form action="" {method} class="done-patch-ctrlr">
		<input type="hidden" />
		<Button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path
					d="M96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V64.03C128 46.36 113.7 32.04 96 32.04zM467.3 240.2C475.1 231.7 480 220.4 480 207.9c0-23.47-16.87-42.92-39.14-47.09C445.3 153.6 448 145.1 448 135.1c0-21.32-14-39.18-33.25-45.43C415.5 87.12 416 83.61 416 79.98C416 53.47 394.5 32 368 32h-58.69c-34.61 0-68.28 11.22-95.97 31.98L179.2 89.57C167.1 98.63 160 112.9 160 127.1l.1074 160c0 0-.0234-.0234 0 0c.0703 13.99 6.123 27.94 17.91 37.36l16.3 13.03C276.2 403.9 239.4 480 302.5 480c30.96 0 49.47-24.52 49.47-48.11c0-15.15-11.76-58.12-34.52-96.02H464c26.52 0 48-21.47 48-47.98C512 262.5 492.2 241.9 467.3 240.2z"
				/>
			</svg>
		</Button>
	</form>

	<form action="" {method} class="text-patch-ctrlr">
		<input
			type="search"
			on:focus={() => {
				patch = true;

				console.log('xxx');
			}}
			on:blur={() => {
				patch = false;

				console.log('yy');
			}}
		/>
		<Button>
			{#if patch}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25 .001L224 109.3V352c0 17.67 14.33 32 32 32c17.67 0 32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0S239.6 3.125 233.4 9.375L105.4 137.4C92.88 149.9 92.88 170.1 105.4 182.6zM480 352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
					/>
				</svg>
			{/if}
		</Button>
	</form>
</div>

<style lang="scss">
	.task {
		display: flex;
		gap: 2rem;

		padding: 1.5rem 2rem;

		border-radius: 20px;
		box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05), 10px 10px 20px rgba(0, 0, 0, 0.1);
	}

	svg {
		width: 40px;
		height: 40px;
		fill: indigo;

		margin: auto;
	}

	.done-patch-ctrlr {
		flex-grow: 0;
	}

	.text-patch-ctrlr {
		display: flex;
		flex-grow: 1;

		input {
			flex-grow: 1;
			padding: 1rem 2rem;
			border-color: none;
			border-radius: 20px;
			border: 2px solid indigo;
		}

		input:focus-visible {
			box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.1),
				inset -10px -10px 20px rgba(255, 255, 255, 0.05);
		}
	}

	.del-ctrl {
		flex-grow: 0;
	}
</style>
