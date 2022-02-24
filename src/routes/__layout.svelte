<svelte:head>
    <link rel="preload" href="/logo.webp" as="image" />
    <link rel="preload" href="/ico/bedwars.webp" as="image" />
    <link rel="preload" href="/ico/practicepvp.webp" as="image" />
    <link rel="preload" href="/ico/skywars.webp" as="image" />
    <link rel="preload" href="/ico/survival.webp" as="image" />
    <link rel="preload" href="/preview/bedwars.webp" as="image" />
    <link rel="preload" href="/preview/practicepvp.webp" as="image" />
    <link rel="preload" href="/preview/skywars.webp" as="image" />
    <link rel="preload" href="/preview/survival.webp" as="image" />
    <link rel="preload" href="/bg/{BACKGROUND_IMAGE[$page.url.pathname] || 'error'}.webp" as="image" />
</svelte:head>

<script>
    import { fade, fly } from 'svelte/transition'
    import { page } from '$app/stores'
    import { onMount } from 'svelte'

    const BACKGROUND_IMAGE = {
        '/': 'home',
        '/bedwars': 'bedwars',
        '/practicepvp': 'practicepvp',
        '/survival': 'survival',
        '/skywars': 'skywars',
        '/famous': 'famous'
    }

    let ready = false

    onMount(async () => {
        ready = true

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile: false,
            multiplier: .6
        })

        window.addEventListener('sveltekit:navigation-end', () => {
            scroll.update()
        })

        return () => scroll.destroy()
    })
</script>   

{#key $page.url.pathname}
    <img src="/bg/{BACKGROUND_IMAGE[$page.url.pathname] || 'error'}.webp" alt="background" class="background" data-scroll data-scroll-speed="4" data-scroll-position="top" in:fade="{{ duration: 600 }}">
{/key}

{#if ready}
<div class="app" in:fade="{{ duration: 600 }}">
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
        <a sveltekit:prefetch href="/bedwars" class:active="{$page.url.pathname === "/bedwars"}">
            <img class="gamemode" src="/ico/bedwars.webp" alt="Bedwars" width="48" height="48">
        </a>
        <a href="/survival" class:active="{$page.url.pathname === "/survival"}">
            <img class="gamemode" src="/ico/survival.webp" alt="Survival" width="48" height="48">
        </a>
        <a sveltekit:prefetch href="/practicepvp" class:active="{$page.url.pathname === "/practicepvp"}">
            <img class="gamemode" src="/ico/practicepvp.webp" alt="PracticePvP" width="48" height="48">
        </a>
        <a href="/skywars" class:active="{$page.url.pathname === "/skywars"}">
            <img class="gamemode" src="/ico/skywars.webp" alt="Skywars" width="48" height="48">
        </a>
    </aside>

    {#key $page.url.pathname}
    <main in:fly="{{ y: 20, duration: 1000 }}">
        <slot/>
    </main>
    {/key}

    <footer>
        <p>© Copyright 2022 - Lucky Network. All Rights Reserved.</p>
        <div>
            <a target="_blank" href="https://discord.gg/luckynetwork"><img src="/discord.svg" alt="discord" loading="lazy"></a>
            <a target="_blank" href="https://www.instagram.com/luckynetwork/"><img src="/instagram.svg" alt="instagram" loading="lazy"></a>
        </div>
    </footer>
</div>
{/if}

<style>
    .background {
        position: fixed;
        width: 100%;
        height: auto;
        z-index: -999;
    }

    @media (max-width: 1000px) {
        .background {
            display: none;
        }
    }

    .logo {
        width: 5em;
        height: auto;
    }

    .gamemode {
        width: 3em;
        height: auto;
    }

    .app {
        padding: 2.4em 4.8em 1.2em;
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
        margin-top: 6em;
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
            padding: 2.4em 1.6em 1.2em;
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