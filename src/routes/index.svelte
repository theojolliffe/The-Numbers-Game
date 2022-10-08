<script context="module">
    import { base, assets } from "$app/paths";
    export async function load({ params, fetch }) {

        let content_list = await fetch(`${assets}/content_list.json`).then( res => res.json());

        return {
                props: { content_list }
            }
    }
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import { page } from '$app/stores';
	import { teams } from './fb-utils';
    import * as someJSON from './twitterThreads.json';

    export let content_list
    content_list = content_list.sort(function(a, b) { return  b.id - a.id })
    $: console.log('content', content_list)
    
    function addZeros(id) {
        if (String(id).length<3) {
            id = "0" + id
        }
        if (String(id).length<3) {
            id = "0" + id
        }
        return id
    }
    function isOld(date) {
        let old_date = new Date('2022-09-01')
        let our_date = new Date(date)
        if (our_date < old_date){
            return '/team_e/'
        } else {
            return '/team/'
        }
    }
</script>

<body class="body2">
    <Header />

    <h2>
        Premier League<br>Statistics
    </h2>
    <div class='grid-container'>

        {#each content_list as misc, i}
            <a sveltekit:prefetch href={ isOld(misc.date) + teams.find(d => d.name == misc.team)['id'] + '>' + misc.date }>
                <div class="team-div" class:active={$page.url.pathname === '/'+teams.find(d => d.name == misc.team)['id']}>
                    <div class="row number">
                        {addZeros(misc.id+1)}
                    </div>
                    <div class="row name">
                        {misc.team}
                    </div>
                    <div class="row text">
                        <div class='col1'>Opponent</div>
                        <div>{misc.opponent}</div>
                    </div>
                    <div class="row text">
                        <div class='col1'>Result</div>

                        {#if misc.home=='home'}
                            <div><strong>{misc.result[0]}</strong><span style="color: #686868;">-{misc.result[1]}</span></div>
                        {:else}
                            <div><span style="color: #686868;">{misc.result[0]}-</span><strong>{misc.result[1]}</strong></div>
                        {/if}

                    </div>
                    <div class="row text last">
                        <div class='col1'>Date</div>
                        <div>{misc.date}</div>
                    </div>
                </div>
            </a>
        {/each}

    </div>
</body>


<style>
    .body2 {
        font-family: system-ui;
        color: #000;
        font-size: 16px;
        line-height: 17px;
        font-weight: 500;
        letter-spacing: 0.06em;
        margin-top: 18px;
    }
    .headline {
        position: relative;
        z-index: 999;
        display: flex;
        width: 98%;
        padding: 4px 8px 20px 16px;
    }
    .top-50 {
        display: flex;
        max-width: 500px;
        padding-right: 10px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-flex: 0;
        width: 1600px;
    }
    .text-semi {
        font-size: 48px;
        line-height: 1;
        font-weight: 400;
    }
    .text-regular {
        font-size: 14px;
        line-height: 1.15;
        font-weight: 400;
    }
    .div-block-107 {
        display: flex;
        padding-top: 8px;
        flex-wrap: wrap;
        align-items: center;
    }
    .text-regular.bold.info-link {
        margin-right: 4px;
        margin-left: 0px;
        padding: 2px 6px 3px;
        border: 1px solid #000;
        border-radius: 24px;
        color: #000;
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;
    }
    .text-regular.bold.info-link.bluehighlight {
        background-color: #c0eeff;
    }
    .text-regular.bold.info-link.pinkhighlight {
        background-color: #ffc2fd;
    }
    .source {
        text-decoration: underline; 
    }
    h2 {
        font-family: system-ui;
        font-size: 12vw;
        margin: auto;
        line-height: 0.85;
    }
    a {
        text-decoration: auto;
        color: black;
    }
    .row {
        border-bottom: 1px solid #000;
        font-size: medium;
        padding-top: 4px;
        padding-bottom: 4px;
    }
    .number {
        font-size: xx-large;
        line-height: 1;
    }
    .name {
        font-weight:800;
    }
    .text {
        display: flex;
        justify-content: flex-start;
    }
    .col1 {
        overflow: hidden;
        width: 40%;
    }
    .last {
        border-bottom: none;
    }

    .grid-container {
		display: grid;
		grid-template-columns: auto auto auto auto;
		grid-gap: 10px;
		padding: 10px;
	}

	.team-div {
		/* background-color: rgba(255, 255, 255, 0.8); */
		text-align: left;
		padding: 20px 0;
        font-family: system-ui;
		font-size: 1.4rem;
		width: 100%;
	}
    @media only screen and (max-width: 1180px) {
        .grid-container {
            grid-template-columns: auto auto auto;
        }
    }
    @media only screen and (max-width: 768px) {
        .grid-container {
            grid-template-columns: auto auto;
        }
    }
    @media only screen and (max-width: 600px) {
        .grid-container {
            grid-template-columns: auto;
        }
    }

</style>