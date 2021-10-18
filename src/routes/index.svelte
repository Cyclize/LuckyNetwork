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
    <style>
        body { background-image: url('/bg/home.webp'); }
    </style>
</svelte:head>

<h1>JOIN OVER <span>1000+</span> PLAYERS <br>ON LUCKY NETWORK</h1>
<button id="copy" on:click={copyIP}>PLAY.LUCKYNETWORK.NET</button>

<section class="gamemodes">
    <h4>Featured Gamemodes</h4>
    <div>
        <a sveltekit:prefetch href="/bedwars" class="gamemode bedwars">Bedwars</a>
        <a href="/survival" class="gamemode survival">Survival</a>
        <a sveltekit:prefetch href="/practicepvp" class="gamemode practicepvp">PracticePvP</a>
        <a href="/skywars" class="gamemode skywars">Skywars</a>
    </div>
</section>

<section>
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

    .gamemodes div {
        overflow: auto;
        display: flex;
        align-items: center;
        gap: 1em;
    }
</style>