<script lang="ts">
    async function goBack() {
        window.history.back();
    }
</script>

<svelte:head>
    <title>Coming Soon</title>
    <style>
        body { background-image: url('/bg/error.webp'); }
    </style>
</svelte:head>

<h1 data-scroll data-scroll-speed="1.4" data-scroll-position="top">THE PAGE YOU VISITED IS <br>CURRENTLY <span>UNDER CONSTRUCTION</span> <br>UNTIL FUTURE NOTICE</h1>
<button id="copy" on:click={goBack} data-scroll data-scroll-speed="1.2" data-scroll-position="top">GO BACK</button>

<style>
    button {
        border: #fff .1em solid;
        width: 10em;
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
        font-size: 2.2em;
    }

    span {
        color: #f58a07;
    }
</style>