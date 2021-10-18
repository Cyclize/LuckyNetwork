<svelte:head>
    <title>PracticePvP</title>
    <style>
        body { background-image: url('/bg/practicepvp.webp'); }
    </style>
</svelte:head>

<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let lbs;

	onMount(async () => {
		const res = await fetch('/api/leaderboard/practicepvp');
		lbs = await res.json();
	});
</script>

<h2>
    FIGHT ANOTHER PLAYER IN A FAIR 1V1 <br>
    OR PLAY WITH LOTS OF PEOPLE IN A <br>
    PARTY. THERE ARE ALSO EVENTS ANYONE <br>
    CAN JOIN.
</h2>

<section>
	<h4>Leaderboard</h4>
	<div>
		{#if lbs}
			{#each lbs as lb, i}
				<div class="lb" style="background-image: url('https://mc-heads.net/body/{lb['name']}/left');">
					<h5>{lb['name']}</h5>
					<p>{lb['kills']}</p>
					<h1>#{i + 1}</h1>
				</div>
			{/each}
		{:else}
			{#each Array(5) as _, i}
				<div class="lb" style="background-image: url('https://mc-heads.net/body/MHF_Steve/left');">
					<h5>Loading...<h5>
					<p>N/A</p>
					<h1>#{i + 1}</h1>
				</div>
			{/each}
		{/if}
	</div>
</section>

<style>
	section {
        margin-top: 4em;
    }

	section > div {
		overflow: auto;
		display: flex;
	}

	.lb {
		flex: 0 0 auto;
        display: inline-block;
		margin: 0;
        margin-right: .8em;
        width: 9em;
		height: 12em;
		padding: .4em;
        border: #f58a07 .2em solid;
        transition: filter .4s;
        filter: grayscale();
        color: #fff;
        text-decoration: none;
        background-size: 5.4em;
		background-repeat: no-repeat;
        background-position-x: 5.2em;
        background-position-y: 1.8em;
		background-color: none;
        background-blend-mode: multiply;
    }

	.lb:hover {
		filter: none;
	}

	.lb * {
		margin: 0;
	}

	.lb p {
		color: #ccc;
	}

	.lb h1 {
		font-size: 3em;
		z-index: -3;
	}
</style>