<script lang="ts">
</script>

<form action="/todos.json" method="post">
	<input type="search" name="text" required placeholder="+ ADD TODO" />
</form>

<style>
	form {
		/* width: 90vh; */
		/* flex-basis: 90vw; */
		min-width: 75vw;
		margin: auto;

		border-radius: 9px;
	}

	input {
		width: 100%;
		border: none;
		text-align: center;

		border-radius: 20px;
		padding: 2rem 3rem;
		background: indigo;
		border: 10px solid indigo;

		box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05), inset 10px 10px 20px rgba(0, 0, 0, 0.1),
			inset -10px -10px 20px rgba(255, 255, 255, 0.05), 10px 10px 20px rgba(0, 0, 0, 0.1);

		font-size: inherit;
		color: #eee;
		font-weight: bold;
	}

	input:focus-visible {
		outline: none;
	}

	input::placeholder {
		text-align: center;
	}
</style>
