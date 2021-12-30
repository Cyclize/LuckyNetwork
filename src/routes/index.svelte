<script lang="ts">
    function copyIP() {
        navigator.clipboard.writeText('play.luckynetwork.net');
        document.querySelector('#copy').innerHTML = 'COPIED';

        setTimeout(function () {
            document.querySelector('#copy').innerHTML = 'PLAY.LUCKYNETWORK.NET';
        }, 1000);
    }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1 data-scroll data-scroll-speed="1.4" data-scroll-position="top">JOIN OVER <span>1000+</span> PLAYERS <br>ON LUCKY NETWORK</h1>
<button id="copy" on:click={copyIP} data-scroll data-scroll-speed="1" data-scroll-position="top">PLAY.LUCKYNETWORK.NET</button>

<section class="gamemodes" data-scroll data-scroll-speed="1.2" data-scroll-position="top">
    <h4>Featured Gamemodes</h4>
    <div>
        <div>
            <a sveltekit:prefetch href="/bedwars" class="gamemode bedwars">Bedwars</a>
            <a href="/survival" class="gamemode survival">Survival</a>
            <a sveltekit:prefetch href="/practicepvp" class="gamemode practicepvp">PracticePvP</a>
            <a href="/skywars" class="gamemode skywars">Skywars</a>
        </div>
    </div>
</section>

<section data-scroll data-scroll-speed="1.4" data-scroll-position="top">
    <h4>About Lucky Network</h4>
    <p class="about">
        LuckyNetwork started off as a big minecraft network that is based in Indonesia. 
        Founded by FacedApollo and FatK in the 17th of August 2017, they have managed to create one 
        of the biggest minecraft server in the South East Asia region. With bunch of minigames such as 
        bedwars, we have managed to have a playerbase that stands strong at 300+ players every day! Today, 
        we are still and will continue to strive for perfection and for that reason we have managed to make 
        our own custom anti-cheat and also friendly staff to support every player who is in need of help. 
        If you like minigames and PvP then try joining us and see if you like it or not. Join now!
    </p>
</section>

<style>
    button {
        border: #fff .1em solid;
        width: 14em;
        text-align: center;
        padding: .4em;
        background: none;
        color: #fff;
        font: inherit;
        transition: color .4s, background .4s;
        cursor: pointer;
    }

    button:hover {
        background: #fff;
        color: #040201;
    }

    h1 {
        font-size: 2.4em;
    }

    span {
        color: #f58a07;
    }

    section {
        margin-top: 4em;
    }

    .gamemode {
        flex: 0 0 auto;
        display: inline-block;
        margin: 0;
        width: 8em;
        padding: 3em 1em;
        text-align: center;
        border: #f58a07 .2em solid;
        transition: filter .4s;
        filter: grayscale();
        color: #fff;
        text-decoration: none;
        background-size: cover;
        background-position: center;
        background-color: #777;
        background-blend-mode: multiply;
    }

    .gamemode:hover {
        filter: none;
    }

    .bedwars { background-image: url('/preview/bedwars.webp') }
    .survival { background-image: url('/preview/survival.webp') }
    .practicepvp { background-image: url('/preview/practicepvp.webp') }
    .skywars { background-image: url('/preview/skywars.webp') }

    .about {
        text-align: justify;
    }

    .gamemodes div div {
        overflow: auto;
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 0;
    }

    .gamemodes > div {
        position: relative;
    }

    @media (max-width: 1000px) {
		.gamemodes > div > div {
			padding: 0 1em;
		}

		.gamemodes > div > div::-webkit-scrollbar {
            height: 0;
        }

		.gamemodes > div:before {
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
		
		.gamemodes > div:after {
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