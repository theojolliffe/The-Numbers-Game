<script context="module">
    // import * as json_content from '../content.json';
    // import { teams } from '../fb-utils'

    // let data = json_content.default
    // import { base, assets } from "$app/paths";
    // export async function load({ params, fetch }) {
    //     let teamName_date = params.chartdev
    //     let teamName_raw = teamName_date.split(">")[0]
    //     let teamName = teams.find(d => d.id==teamName_raw).name
    //     let date = teamName_date.split(">")[1]

    //     console.log('asests', assets)

    //     let passing_chart_json = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/passing.json`).then( res => res.json());
    //     let carries_chart_json = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/progdist.json`).then( res => res.json());
    //     let xg_chart_json = await fetch(`${assets}/Teams/${teamName}/Timeseries/Expected_npxG.json`).then( res => res.json());
    //     let xa_chart_data = await fetch(`${assets}/Teams/${teamName}/Timeseries/Expected_xA.json`).then( res => res.json());
    //     let season_comp = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/season_comp.json`).then( res => res.json());

    //     // let json = await json_raw.json();
    //     console.log('passing_chart_json', passing_chart_json)
    //     return {
	// 		props: { teamName, passing_chart_json, carries_chart_json, xg_chart_json, xa_chart_data, season_comp }
	// 	}
    // }
</script>
<script>
	import Header from '$lib/header/Header.svelte';
    import {page} from '$app/stores'

    import Chart from 'chart.js/auto';
    import annotationPlugin from 'chartjs-plugin-annotation';
    Chart.register(annotationPlugin);
    import { onMount } from 'svelte';
    

	let some_chart;

    let chart_data = {
        'data': {
            'datasets': [
                {
                    'label': 'Manchester City',
                    'data': [
                        {'Player': 'Bernardo Silva', 'x': 1.0, 'y': 0.4, 'Team': 'Manchester City'},
                        {'Player': 'Ederson', 'x': 2.0, 'y': 0.7, 'Team': 'Manchester City'},
                        {'Player': 'Erling Haaland', 'x': 2.5, 'y': 0.5, 'Team': 'Manchester City'}
                    ]
                }
            ]
        }}

    console.log('data', chart_data)

    const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
            const {ctx} = chart;
            ctx.save();

            ctx.strokeStyle = 'white';
            let xadj = 7
            let yadj = 8

            ctx.beginPath();
            ctx.moveTo(0+xadj, 0+yadj);
            ctx.lineTo(600+xadj, 0+yadj);
            ctx.lineTo(600+xadj, 420+yadj);
            ctx.lineTo(0+xadj, 420+yadj);
            ctx.lineTo(0+xadj, 0+yadj);

            ctx.lineTo(300+xadj, 0+yadj);
            ctx.lineTo(300+xadj, 420+yadj);
            
            ctx.stroke();

            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = 'darkGreen';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };

	onMount(async (promise) => {
        // Chart
        let ctx = some_chart.getContext('2d');
        var chart_new = new Chart(ctx, {
            type: 'scatter',
            // data: chart_data.data,
            plugins: [plugin],
            options: {
                aspectRatio: 1.4,
                pointRadius: 8,
                pointHoverRadius: 11
            }
        });
    });

</script>


<body class="body2">
	<Header />
	<div style="height: 50px;"></div>

    <div id="tweet-cont" style="width: 640px; margin:0 auto;">

        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={some_chart} id="myChart"></canvas>
            </div>
        </div>

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
        background: black;
        color: white;
        width: 100vw;
        margin: 0 0 50px -16px;
        /* height: 220px; */
        padding: 5%;
        padding-bottom: 25%;
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