<script context="module">
    import * as json_content from '../content.json';
    import { teams } from '../fb-utils'

    let data = json_content.default
    import { base, assets } from "$app/paths";
    export async function load({ params, fetch }) {
        let teamName_date = params.chartdev
        let teamName_raw = teamName_date.split(">")[0]
        let teamName = teams.find(d => d.id==teamName_raw).name
        let date = teamName_date.split(">")[1]

        console.log('asests', assets)

        let passing_chart_json = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/passing.json`).then( res => res.json());
        let carries_chart_json = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/progdist.json`).then( res => res.json());
        let xg_chart_json = await fetch(`${assets}/Teams/${teamName}/Timeseries/Expected_npxG.json`).then( res => res.json());
        let xa_chart_data = await fetch(`${assets}/Teams/${teamName}/Timeseries/Expected_xA.json`).then( res => res.json());
        let season_comp = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/season_comp.json`).then( res => res.json());

        // let json = await json_raw.json();
        console.log('passing_chart_json', passing_chart_json)
        return {
			props: { teamName, passing_chart_json, carries_chart_json, xg_chart_json, xa_chart_data, season_comp }
		}
    }
</script>
<script>
	import Header from '$lib/header/Header.svelte';
    import {page} from '$app/stores'
	
    // import * as someJSON from '../content.json';
    import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component';
    export let teamName, passing_chart_json, carries_chart_json, xg_chart_json, xa_chart_data, season_comp

    let expanded;
        function toggle(id) {
            if (expanded==id) {
                expanded = null;
            } else {
                expanded = id;
            }
    }

    import Chart from 'chart.js/auto';
    import annotationPlugin from 'chartjs-plugin-annotation';
    Chart.register(annotationPlugin);
    import { onMount } from 'svelte';
    

	let chartStackedBar;
    let carriesScatterChart;
    let xgLineChart;
    let xaLineChart;
    let chartLollipop;

	onMount(async (promise) => {

        const lollipop_data = {
            labels: ['Tottenham', 'Southampton'],
            datasets: [{
                label: 'This match',
                data: [1, 3],
                backgroundColor: ['yellow', 'green'],
                borderWidth: 0,
                barPercentage: 0.1,
                pointStyle: 'line'
            },{
                label: 'Season average',
                data: [1, 1.5],
                backgroundColor: ['grey', 'grey'],
                borderWidth: 0,
                barPercentage: 0.1,
                pointStyle: 'line',
                categoryPercentage: 0.5,
            }]
        }

        const lollipopChart = {
            id: 'lollipopChart',
            afterDatasetsDraw(chart, args, options) {


                const right_marg = chart.scales.x.left;
                const scale_ratio = chart.scales.x.maxWidth / chart.scales.x.max;
                const { ctx } = chart
                ctx.save();

                for (let i = 0; i < chart.getDatasetMeta(0).data.length; i++) {
                    const x = chart.getDatasetMeta(0).data[i].x -3
                    const y = chart.getDatasetMeta(0).data[i].y
                    const borderColour = chart.getDatasetMeta(0)._dataset.backgroundColor[i];                    
                    circle(x, y, borderColour);
                }

                for (let i = 0; i < chart.getDatasetMeta(0).data.length; i++) {
                    const x = chart.getDatasetMeta(1).data[i].x -3
                    const y = chart.getDatasetMeta(1).data[i].y
                    const borderColour = chart.getDatasetMeta(0)._dataset.backgroundColor[i];                    
                    circle(x, y, 'grey');
                }


                function circle(x, y, borderColour) {
                    const angle = Math.PI / 180;
                    ctx.beginPath();
                    ctx.fillStyle = borderColour;
                    ctx.arc(x, y, 10, angle*0, angle*360, false)
                    ctx.fill();
                    ctx.closePath();
                    ctx.restore();
                }
            }
        }

        // Lollipop
        let ctx_lol = chartLollipop.getContext('2d');
        var chart = new Chart(ctx_lol, {
            type: 'bar',
            data: season_comp.data,
            options: {
                borderWidth: 5,
                // datasets: {
                //     bar: {
                //         categoryPercentage: 0.5,
                //     }
                // },
                plugins: {
                    legend: {
                        display: true,
                        onClick: {
                            callback: function() { }
                            },
                    },
                    tooltip: {
                        yAlign: 'bottom'
                    },
                    title: {
                        display: true,
                        text: season_comp.misc.variable,
                        font: {
                            family: 'Helvetica Neue',
                            size: 24
                        }
                    },
                },
                indexAxis : 'y',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            plugins: [lollipopChart]
        })

        // Passing Stacked Bar
        // In order to determine whether to create chart, we loop through our tweets asking; 'if it is false that all elements do not include the passing.png indicator' 
            let ctx = chartStackedBar.getContext('2d');
            var chart = new Chart(ctx, {
                    type: 'bar',
                    data: passing_chart_json.data,
                    options: {
                        indexAxis: 'y',
                        plugins: {
                        title: {
                            display: true,
                            text: 'Successful passes by pass distance',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        },
                        },
                        responsive: true,
                        aspectRatio: 1.5,
                        borderRadius: 1,
                        scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                        }
                    }
                });


        //  Carries Scatter Chart
            let ctx2 = carriesScatterChart.getContext('2d');
            var chart2 = new Chart(ctx2, {
                type: 'scatter',
                data: carries_chart_json.data,
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: "Combined carries towards the opponent's goal (yards)"
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Carries into the final third"
                            },
                            ticks: {
                                callback: function(value, index, ticks) {
                                    return parseInt(value);
                                }
                            }
                        }
                    },
                    aspectRatio: 1.5,
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Progressive carry distance by carries into the final third',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        },
                        tooltip: {
                            displayColors: false,
                            callbacks: {
                                label: function(d) {
                                    return d.raw.Player;
                                }
                            }
                        },
                        legend: {
                            display: true,
                        },
                        annotation: {
                            annotations: carries_chart_json.annotations
                        }
                    }
                }
            });


        // Line Chart
            let ctx3 = xgLineChart.getContext('2d');
            var chart3 = new Chart(ctx3, {
                type: 'line',
                data: xg_chart_json,
                options: {
                    aspectRatio: 1.5,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Expected goals by game',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        }
                    }
                }
            });

            // Line Chart
            let ctx4 = xaLineChart.getContext('2d');
            var chart3 = new Chart(ctx4, {
                type: 'line',
                data: xa_chart_data,
                options: {
                    aspectRatio: 1.5,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Expected assists by game',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        }
                    }
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
                <canvas bind:this={chartLollipop} id="myChart"></canvas>
            </div>
        </div>

        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={chartStackedBar} id="myChart"></canvas>
            </div>
        </div>

        <br>

        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={xaLineChart} id="myChart"></canvas>
            </div>
        </div>

        <br>

        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={xgLineChart} id="myChart"></canvas>
            </div>
        </div>

        <br>
        
        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={carriesScatterChart} id="myChart"></canvas>
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