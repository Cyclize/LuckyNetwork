<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ status }) {
        return {
            props: {
                error: status
            }
        }
    }
</script>

<script>
    export let error
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>

<h1>Error {error}</h1>
<p>You seem to be experiencing issues on our website. If you believe this is in error, please report to an administrator.</p>
<button id="back" on:click={() => history.back()} data-scroll-speed="1" data-scroll-position="top">GO BACK</button>

<style>
    h1 {
        font-size: 2.3em;
        margin-bottom: .2em;
    }

    p {
        font-size: 1.1em;
        margin-top: .2em;
    }

    button {
        border: #fff .1em solid;
        width: 8em;
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

    @media (min-width: 1000px) {
        p { margin-right: 25em }
    }
</style>