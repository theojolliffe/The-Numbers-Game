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

    // import data from '/Users/theojolliffe/Documents/The Numbers Game/data-processing/ws_top_forward.json'
    import data from './buildup.json'

    let some_chart_bar
    let some_chart
    console.log('data', data)

    let xadj = 7
    let yadj = 25
    let ratio = 6
    let wid_rat = 0.65

    let p_len_ya = 100
    let p_wid_ya  = 65 

    let p_len = p_len_ya*ratio
    let p_wid = p_wid_ya*ratio

    const pitch = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
            const {ctx} = chart;
            ctx.save();

            ctx.strokeStyle = '#c0c0c080';

            let box = 0.16
            let six = 0.05

            ctx.beginPath();
            ctx.moveTo(0+xadj, 0+yadj);
            ctx.lineTo(p_len+xadj, 0+yadj);
            ctx.lineTo(p_len+xadj, p_wid+yadj);
            ctx.lineTo(0+xadj, p_wid+yadj);
            ctx.lineTo(0+xadj, 0+yadj);

            ctx.lineTo(0.5*p_len+xadj, 0+yadj);
            ctx.lineTo(0.5*p_len+xadj, p_wid+yadj);

            ctx.moveTo(0.5*p_len+xadj, 0.5*p_wid+yadj);
            const angle = Math.PI / 180;
            ctx.arc(0.5*p_len+xadj, 0.5*p_wid+yadj, 50, angle*90, angle*91, true);

            ctx.moveTo(0+xadj, 0.2*p_wid+yadj);
            ctx.lineTo(box*p_len+xadj, 0.2*p_wid+yadj);
            ctx.lineTo(box*p_len+xadj, 0.8*p_wid+yadj);
            ctx.lineTo(0+xadj, 0.8*p_wid+yadj);

            ctx.moveTo(0+xadj, 0.35*p_wid+yadj);
            ctx.lineTo(six*p_len+xadj, 0.35*p_wid+yadj);
            ctx.lineTo(six*p_len+xadj, 0.65*p_wid+yadj);
            ctx.lineTo(0.0*p_len+xadj, 0.65*p_wid+yadj);

            ctx.moveTo(p_len+xadj, 0.35*p_wid+yadj);
            ctx.lineTo((1-six)*p_len+xadj, 0.35*p_wid+yadj);
            ctx.lineTo((1-six)*p_len+xadj, 0.65*p_wid+yadj);
            ctx.lineTo(p_len+xadj, 0.65*p_wid+yadj);
            ctx.lineTo(p_len+xadj, 0.8*p_wid+yadj);
            ctx.lineTo((1-box)*p_len+xadj, 0.8*p_wid+yadj);
            ctx.lineTo((1-box)*p_len+xadj, 0.2*p_wid+yadj);
            ctx.lineTo(p_len+xadj, 0.2*p_wid+yadj);

            ctx.stroke();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = '#001e3d';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };
    const passes = {
        id: 'custom_canvas_foreground',
        afterDraw: (chart) => {

            const {ctx} = chart;
            ctx.save();

            ctx.strokeStyle = 'pink';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';

            let move_name = {
                start: {
                    x: 10,
                    y: -10
                },
                end: {
                    x: 10,
                    y: 20
                }
            }

            function s_x(c, pd) {
                return ratio*c+xadj + move_name[pd]['x']
            }
            function s_y(c, pd) {
                return p_wid-(wid_rat*ratio*c)+yadj + move_name[pd]['y']
            }

            data.reverse()
            for (const d of data) {

                // pass direction
                let pd = (d['y'] - d['endY'])>0? 'start' : 'end'

                console.log('d', d)

                ctx.fillStyle = 'silver';
                ctx.font = "14px Arial";
                ctx.textAlign = pd;

                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;
                ctx.shadowColor = "#001e3d";
                ctx.shadowBlur = 1;
                ctx.fillText(d['player'].split(" ")[d['player'].split(" ").length-1], s_x(d['x'], pd), s_y(d['y'], pd));

                // linear gradient from start to end of line
                var grad= ctx.createLinearGradient(ratio*d['x']+xadj, p_wid-(wid_rat*ratio*d['y'])+yadj, ratio*d['endX']+xadj, p_wid-(wid_rat*ratio*d['endY'])+yadj);
                grad.addColorStop(0, "#001e3d10");
                grad.addColorStop(1, "pink");

                if (d['endX'] == 100.5) {
                    grad= ctx.createLinearGradient(ratio*d['x']+xadj, p_wid-(wid_rat*ratio*d['y'])+yadj, ratio*d['endX']+xadj, p_wid-(wid_rat*ratio*d['endY'])+yadj);
                    grad.addColorStop(0, "#001e3d90");
                    grad.addColorStop(0.2, "pink");
                }

                ctx.beginPath();

                ctx.moveTo(ratio*d['x']+xadj, p_wid-(wid_rat*ratio*d['y'])+yadj );
                ctx.strokeStyle = grad;

                // ctx.lineTo(ratio*d['endX']+xadj, p_wid-(wid_rat*ratio*d['endY'])+yadj );

                ctx.bezierCurveTo(ratio*d['x']+xadj, p_wid-(wid_rat*ratio*d['y'])+yadj, 1.04*ratio*d['x']+xadj, 1.01*p_wid-(wid_rat*ratio*d['y'])+yadj, ratio*d['endX']+xadj, p_wid-(wid_rat*ratio*d['endY'])+yadj);

                ctx.stroke();

            }

            
            ctx.restore();

        }

    }

	onMount(async (promise) => {
        // Chart
        let ctx = some_chart.getContext('2d');
        var chart_new = new Chart(ctx, {
            type: 'scatter',
            // data: chart_data.data,
            plugins: [pitch, passes],
            options: {
                aspectRatio: 1.4,
                pointRadius: 8,
                pointHoverRadius: 11
            }
        });


        // BAR
        const labels = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2','a3', 'b3', 'c3', 'd3', 'e3', 'f3'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'Tottenham',
                data: [81, 80, 75, 70, 70, 65, 61, 59, 58, 57, 56, 53, 52, 51, 40, 40, 35, 29, 20, 11],
                backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)',
                'rgba(255, 159, 64)'
                ]
            }]
        };
        let ctx_bar = some_chart_bar.getContext('2d');
        var chart_new_bar = new Chart(ctx_bar, {
            type: 'bar',
            data: data,
            options: {
                aspectRatio: 1.4,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                }
                // scales: {
                //     x: {
                //         beginAtZero: true
                //     }
                // }
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
                <canvas bind:this={some_chart_bar} id="myChart"></canvas>
            </div>
        </div>

    </div>

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