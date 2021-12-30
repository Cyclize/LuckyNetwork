<script>
    import { fly } from 'svelte/transition';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let scroll

    onMount(() => {
        import('locomotive-scroll').then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                multiplier: .4
            })
        })

        setInterval(() => {
            scroll.update()
        }, 3000);

        return () => scroll.destroy()
    })
</script>   

<div class="app" data-scroll-container>
    <header>
        <nav>
            <a href="/">
                <img src="/logo.webp" alt="logo" width="77" height="58" class="logo">
            </a>
            <div>
                <ul>
                    <li><a target="_blank" href="https://forums.luckynetwork.id">FORUMS</a></li>
                    <li><a target="_blank" href="https://store.luckynetwork.net/">STORE</a></li>
                    <li><a href="/famous">FAMOUS</a></li>
                </ul>
            </div>
        </nav>
        <div class="cta">
            <a href="/soon">LOGIN</a>
            <a href="/soon">REGISTER</a>
        </div>
    </header>

    <aside data-scroll data-scroll-speed="8" data-scroll-position="top">
        <a sveltekit:prefetch href="/bedwars" class='{$page.path === "/bedwars" ? "active" : ""}'>
            <img class="gamemode" src="/ico/bedwars.webp" alt="BW" width="48" height="48">
        </a>
        <a href="/survival" class='{$page.path === "/survival" ? "active" : ""}'>
            <img class="gamemode" src="/ico/survival.webp" alt="SV" width="48" height="48">
        </a>
        <a sveltekit:prefetch href="/practicepvp" class='{$page.path === "/practicepvp" ? "active" : ""}'>
            <img class="gamemode" src="/ico/practicepvp.webp" alt="SV" width="48" height="48">
        </a>
        <a href="/skywars" class='{$page.path === "/skywars" ? "active" : ""}'>
            <img class="gamemode" src="/ico/skywars.webp" alt="SW" width="48" height="48">
        </a>
    </aside>

    {#key $page.path}
    <main in:fly="{{ y: 20, duration: 1000 }}">
        <slot/>
    </main>
    {/key}

    <footer>
        <p>© Copyright 2021 - Lucky Network. All Rights Reserved.</p>
        <div>
            <a target="_blank" href="https://discord.gg/luckynetwork"><img src="/discord.svg" alt="discord"></a>
            <a target="_blank" href="https://www.instagram.com/luckynetwork/"><img src="/instagram.svg" alt="instagram"></a>
        </div>
    </footer>
</div>

<style>
    .logo {
        width: 5em;
        height: auto;
    }

    .gamemode {
        width: 3em;
        height: auto;
    }

    .app {
        margin: 2.4em 4.8em 1.2em;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header a {
        text-decoration: none;
        color: inherit;
    }

    header nav {
        display: flex;
        align-items: center;
    }

    header nav a {
        display: flex;
        align-items: center;
        color: #fff;
        transition: color .2s;
    }

    header nav a:hover {
        color: #f58a07
    }

    header nav ul {
        position: relative;
        overflow: auto;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 2em;
        margin: 0;
    }
    
    header nav div {
        position: relative;
        margin: 0 3.4em;
    }

    header .cta {
        display: flex;
        gap: 1em;
    }

    header .cta a {
        text-align: center;
        padding: .4em;
        width: 5.6em;
    }

    header .cta a:first-child { background-color: #111 }
    header .cta a:first-child:hover { background-color: hsl(0, 0%, 10%) }
    header .cta a:last-child { background-color: #f58a07 }
    header .cta a:last-child:hover { background-color: hsl(33, 94%, 52%) }
    /* header .cta a:first-child { background-color: #f58a07 }
    header .cta a:first-child:hover { background-color: hsl(33, 94%, 52%) } */

    aside {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 6em;
        margin-left: .8em;
        position: absolute;
        z-index: 1;
    }

    aside a {
        /* color: #777; */
        text-decoration: none;
        filter: grayscale();
        color: #f58a07;
        transition: filter .4s;
    }

    aside a:hover {
        filter: none;
    }

    aside .active {
        filter: none;
    }

    main {
        margin-left: 8em;
        margin-top: 5em;
    }

    footer {
        margin-left: 8em;
        margin-top: 8em;
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: space-between;
    }

    footer div {
        display: flex;
        align-items: center;
        gap: .4em;
    }

    footer div a {
        display: flex;
    }

    footer div a img {
        height: 1.4em;
    }

    @media (max-width: 1000px) {
        .app {
            margin: 2.4em 1.6em 1.2em;
        }

        header nav div {
            width: 8em;
            margin: 1em;
        }

        header nav div:before {
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
        
        header nav div:after {
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

        header nav ul {
            gap: 1em;
            padding: 0 1em;
        }

        header nav ul::-webkit-scrollbar {
            height: 0;
        }

        header .cta a:first-child { 
            display: none; 
        }

        main {
            margin-left: unset;
        }

        aside {
            display: none;
        }

        footer {
            margin-left: unset;
        }

        footer div {
            flex-direction: column;
        }
    }
</style>