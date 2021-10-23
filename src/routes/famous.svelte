<script lang="ts">
    import { goto } from "$app/navigation";

    async function learnMore() {
        goto('#benefits');
    }
</script>

<svelte:head>
    <title>Famous</title>
    <style>
        body { background-image: url('/bg/famous.webp'); }
    </style>
</svelte:head>

<h1>GROW YOUR <span>CHANNEL</span> <br>TOGETHER WITH US</h1>
<button id="copy" on:click={learnMore}>LEARN MORE</button>

<section>
    <h4>Our Members</h4>
    <div class="wrapper">
        <div class="members">
            <a target="_blank" href="https://youtube.com/channel/UCmCKu42dBpkfVpxSzp7d9Kg" class="member the-dream-craft"><h5>THE DREAM CRAFT</h5></a>
            <a target="_blank" href="https://youtube.com/channel/UCPr7T-6G8iNIlOlUWn02CNQ" class="member refal-rakha"><h5>REFAL RAKHA</h5></a>
            <a target="_blank" href="https://youtube.com/channel/UCGvpRL0tZXJU2IxqVGuYUbg" class="member samsul-ch"><h5>SAMSUL CH</h5></a>
            <a target="_blank" href="https://youtube.com/channel/UClRjC8YXhPOJx9LValMVL7g" class="member michellemcl"><h5>MICHELLEMCL</h5></a>
            <a target="_blank" href="https://youtube.com/channel/UCwLcUgRdaCwDllc5MUTo6Pg" class="member clinkzforce"><h5>CLINKZFORCE</h5></a>
            <a target="_blank" href="https://youtube.com/channel/UCl8vNn0IOp0xxc4UiVNd1Qg" class="member shansine"><h5>SHANSHINE</h5></a>
        </div>
    </div>
</section>

<a href="#benefits" id="benefits"> </a>
<section class="benefits">
    <h4>Benefits</h4>
    <div>
        <div>
            <h5>Host Events</h5>
            <p>
                As a famous member, you can make your own exclusive events for your fans. 
                We will provide a server with the right specifications to support your events.
            </p>
        </div>

        <div>
            <h5>Community</h5>
            <p>
                Lucky Famous is not just a rank, but it's a community. Join with us and find a new 
                content creator friends for you to collaborate.
            </p>
        </div>

        <div>
            <h5>In-Game Perks</h5>
            <p>
                Famous rank will provide lot of perks for you to mess around. You'll have some exclusive 
                perks like Lucky Disugise and an amazing [FAMOUS] prefix!
            </p>
        </div>

        <div>
            <h5>Exclusive Events</h5>
            <p>
                Lucky Network will regularly host an event for famous rank only. You can join this type of 
                events and there will be a prize in every event we make.
            </p>
        </div>
    </div>
</section>

<section>
    <h4>Requirements</h4>
    <ul>
        <li>The account that you had for promoting are related to games and a good place to get attention.</li>
        <li>Your account are clean from any bad record(s) (Example: Scamming, or hate).</li>
        <li>Your account have never looked down or bad shamed Lucky Network's or a company that are related to Lucky Network.</li>
        <li>Your account have to have the potency to attract more than 5000 people.</li>
        <li>Your account must have minimal 1 content in Lucky Network server in the past 2 weeks.</li>
    </ul>
</section>

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
        font-size: 2.4em;
    }

    span {
        color: #f58a07;
    }

    section {
        margin-top: 4em;
    }

    .wrapper {
		position: relative;
	}

    .members {
        overflow: auto;
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .member {
        flex: 0 0 auto;
        display: inline-block;
        margin: 0;
        height: 12em;
        width: 7.9em;
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

    .member:hover {
        filter: none;
    }

    .the-dream-craft { background-image: url('https://yt3.ggpht.com/h8fVu-QGmwfHxkLPj_IZ0l0EcTl4ikoIyFv3_Z54rQDEBzJQa-UfM99yDi-mix_7sCF4TTaPXR8=s800-c-k-c0x00ffffff-no-rj') }
    .refal-rakha { background-image: url('https://yt3.ggpht.com/ytc/AKedOLR2uowX4wEAjLGO6cctYrItkjA9znYPWhedKmmK-A=s800-c-k-c0x00ffffff-no-rj') }
    .samsul-ch { background-image: url('https://yt3.ggpht.com/ytc/AKedOLSPc1xebCrZxmC_U-4iZnWbSmijRFi1HLhFeV4l1Q=s800-c-k-c0x00ffffff-no-rj') }
    .michellemcl { background-image: url('https://yt3.ggpht.com/ytc/AKedOLQ_kqGXFIsqMBIKUQQTtBf1TD1nDjP0yn1Q_a0fdw=s800-c-k-c0x00ffffff-no-rj') }
    .clinkzforce { background-image: url('https://yt3.ggpht.com/ytc/AKedOLQpa41hsiDKtzZHi6K5mhw-V-bFCnmEvhLDBVnibQ=s800-c-k-c0x00ffffff-no-rj') }
    .shansine { background-image: url('https://yt3.ggpht.com/ytc/AKedOLQh779L2TqnF-c9A0t0aAiPoUFHBgDRov_Gf5vxiw=s800-c-k-c0x00ffffff-no-rj') }

    .benefits > div {
        display: flex;
        flex-wrap: wrap;
        gap: 4em;
    }

    .benefits > div > div {
        width: 40%;
    }

    .benefits > div > div h5 {
        margin: 0;
        margin-bottom: .3em;
    }

    .benefits > div > div p {
        font-size: 1.2em;
        margin: 0;
    }

    @media (max-width: 1000px) {
        .members {
            padding: 0 1em;
        }

        .wrapper:before {
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

        .wrapper:after {
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