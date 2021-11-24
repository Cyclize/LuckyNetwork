<svelte:head>
    <title>PracticePvP</title>
    <style>
        body { background-image: url('/bg/practicepvp.webp'); }
    </style>
</svelte:head>

<script lang="ts">
	import { onMount } from "svelte";

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
	</div>
</section>

<style>
	section {
        margin-top: 4em;
    }

	section > div > div {
		overflow: auto;
		display: flex;
		padding: 0;
	}

	section > div {
		position: relative;
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

	@media (max-width: 1000px) {
		section > div > div {
			padding: 0 1em;
		}

		section > div > div::-webkit-scrollbar {
            height: 0;
        }

		section > div:before {
			pointer-events: none;
			content: '';
			position: absolute;
			z-index: 99;
			left: 0;
			top: 0;
			height: 100%;
			width: 1em;
			background: linear-gradient(-90deg, #04020100 0%, #040201ff 100%);
		}
		
		section > div:after {
			pointer-events: none;
			content: '';
			position: absolute;
			z-index: 99;
			right: 0;
			top: 0;
			height: 100%;
			width: 1em;
			background: linear-gradient(90deg, #04020100 0%, #040201ff 100%);
		}
	}
</style>