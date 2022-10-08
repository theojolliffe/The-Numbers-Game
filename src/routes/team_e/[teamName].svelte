<script context="module">
    import * as json_content from '../content.json';
    let data = json_content.default
    var teams = [
        {id: "tottenham", name: "Tottenham"},
        {id: "liverpool", name: "Liverpool"},
        {id: "man-city", name: "Manchester City"},
        {id: "newcastle", name: "Newcastle Utd"},
        {id: "chelsea", name: "Chelsea"},
        {id: "west-ham", name: "West Ham"},
        {id: "arsenal", name: "Arsenal"},
        {id: "burnley", name: "Burnley"},
        {id: "watford", name: "Watford"},
        {id: "leeds", name: "Leeds United"},
        {id: "everton", name: "Everton"},
        {id: "brentford", name: "Brentford"},
        {id: "southampton", name: "Southampton"},
        {id: "aston-villa", name: "Aston Villa"},
        {id: "crystal-palace", name: "Crystal Palace"},
        {id: "brighton", name: "Brighton"},
        {id: "leicester", name: "Leicester City"},
        {id: "wolves", name: "Wolves"},
        {id: "man-utd", name: "Manchester Utd"},
        {id: "norwich", name: "Norwich City"},
    ]

    import { base, assets } from "$app/paths";
    export async function load({ params, fetch }) {
        let teamName_date = params.teamName
        let teamName_raw = teamName_date.split(">")[0]
        let teamName = teams.find(d => d.id==teamName_raw).name
        let date = teamName_date.split(">")[1]

        let content = await fetch(`${assets}/Teams/${teamName}/${date}/content.json`).then( res => res.json());
        content.data = content.data.filter( d => d.tweet != 'Null.')

        return {
			props: { teamName, content }
		}
    }
</script>
<script>
	import Header from '$lib/header/Header.svelte';
    import {page} from '$app/stores'
	
    // import * as someJSON from '../content.json';
    import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component';
    export let teamName, content

    let expanded;
        function toggle(id) {
            if (expanded==id) {
                expanded = null;
            } else {
                expanded = id;
            }
    }

</script>


<body class="body2">
	<Header />
	<div style="height: 50px;"></div>
    <div id="head-cont">
        <h2>
            Latest <span style="white-space: nowrap;">{teamName}</span> <br> match report
        </h2>
    </div>

	<div id="text-top"></div>
	<div id="tweet-cont" style="width: 640px; margin:0 auto;">

        {#each content.data as { tweet_id, tweet, image }, i}
            <div class={(expanded==tweet_id)?"selectedtweet":"unselectedtweet"}>
                <div>

                    <span class={(expanded==tweet_id)?"selectedTweetSpan":"tweets"} on:click={toggle(tweet_id)}>{tweet}</span>

                    <br>
                    {#if expanded==tweet_id}
                        <div class="share-cont">
                            <Twitter class="share-button" tweet="{tweet}" url={"https://twitter.com/b/status/"+tweet_id} />
                            <Reddit class="share-button" tweet="{"Read this tweet from the latest " + teamName + " match"}" url={"https://twitter.com/b/status/"+tweet_id} />
                            <WhatsApp class="share-button" tweet="{tweet} url={"https://twitter.com/b/status/"+tweet_id}" />
                            <Facebook class="share-button" quote="{tweet}" url={"https://twitter.com/b/status/"+tweet_id} />
                        </div>
                    {/if}
                    <br>
                </div>
            </div>
		{/each}
	</div>
</body>


<style>
    .chart-title {
		text-align: center;
		font-size: 28px;
        margin-bottom: 44px;
	}
	.chart {
        width: 100%;
        /* height: 380px; */
        margin-top: 40px;
        margin-bottom: 50px;
	}
	.chart-cont {
		height: 85%;
		margin: 2%;
	}
    :global(text) {
        font-size: 10px;
    }
    :global(.bullet) {
        width: 20px !important;
        height: 20px !important;
    }
    :global(li) {
        font-size: medium !important;
    }
    .share-cont {
        width: max-content;
        margin: auto;
        margin-top: 40px;
    }
    .selectedtweet {
        /* border: 1px solid red; */
        /* width: 110%; */
        /* margin: 0px 0px 0px -5%; */
        /* padding: 5%;
        border-radius: 20px;

        border: 1px solid #00917c;
        padding: 5%;
        border-radius: 20px;
        background: #f0f7f6;
        margin: 10px 0 30px 0; */

        margin: 20px 0 30px 0;
    }

    /* a:-webkit-any-link {
        color: var(--accent-color);
        cursor: pointer;
        text-decoration: underline;
    } */
    a:hover {
        background-color: yellow;
    }

    .tweets {
        color: var(--heading-color);
		line-height: initial;
		font-size: large;
        color: #434343;
        line-height: 1.4;
        font-weight: 300;
        cursor: pointer;
    }
    span:hover {
        background-color: yellow;
    }
    .selectedTweetSpan {
        color: var(--heading-color);
		line-height: initial;
		font-size: large;
        color: #434343;
        line-height: 1.4;
        font-weight: 300;
        cursor: pointer;
        background-color: yellow;
    }

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
        font-size: 8vw;
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
		background-color: rgba(255, 255, 255, 0.8);
		text-align: left;
		padding: 20px 0;
        font-family: system-ui;
		font-size: 1.4rem;
		width: 100%;
	}


    #head-cont {
        background: #a8b8ca;
        color: black;
        width: 100vw;
        margin: 0 0 50px -16px;
        /* height: 220px; */
        padding: 5%;
    }
    #text-top {
        height: 50px;
    }
    @media only screen and (max-width: 650px) {
        #text-top {
            height: 20px;
        }
        #tweet-cont {
            width: revert !important;
        }
        .tweets {
            font-size: medium;
        }
        h2 {
            font-size: 10vw;
        }
    }

    :global(.ssbc-button) {
        border-radius: 5px;
    }

</style>