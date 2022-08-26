<script>
	import Header from '$lib/header/Header.svelte';
	import { teams } from '../fb-utils'
    import * as someChartJSON from '$lib/Teams/Manchester City/2022-05-22/chart_data/passing.json';
    import * as progdistChartJSON from '$lib/Teams/Manchester City/2022-05-22/chart_data/progdist.json';
    import * as xGChart from '$lib/Teams/Manchester City/Timeseries/Expected_npxG.json';
    import * as someJSON from '../twitterThreads.json';

    let misc = someChartJSON.default.misc
	console.log('misc', misc)

    let data = someJSON.default
    data = Object.keys(data).map(e => {
        return data[e]
    })

    $: teamName_date = "man-city#2022-08-20"
    $: teamName = teamName_date.split("#")[0]
    $: teamName = teams.find(d => d.id==teamName).name

    $: tweets = data.find(e => e.misc.team == teamName).data
	$: tweets = tweets.sort(function(a, b){
        return parseInt(a['id']) - parseInt(b['id'])
    });

    import Chart from 'chart.js/auto';
    import annotationPlugin from 'chartjs-plugin-annotation';
    Chart.register(annotationPlugin);
    import { onMount } from 'svelte';

	let chartStackedBar;
    let chartScatter;
    let chartLine;

    const chartdata = {
    labels: ["Longname longington", "Longname longington", "Longname longington", "Longname longington", "Longname longington", "Longname longington", "Longname longington"],
    datasets: [
        {
        label: 'Short',
        data: [2, 4, 6, 8, 10, 12, 14],
        backgroundColor: 'rgb(131, 219, 215)',
        },
        {
        label: 'Medium',
        data: [2, 4, 6, 8, 10, 12, 14],
        backgroundColor: 'rgb(47, 126, 159)',
        },
        {
        label: 'Long',
        data: [2, 4, 6, 8, 10, 12, 14],
        backgroundColor: 'rgb(229, 120, 115)',
        }
    ]
    };

    console.log('progdistChartJSON', progdistChartJSON.default)


	onMount(async (promise) => {
        // Stacked Bar
        // In order to determine whether to create chart, we loop through our tweets asking; 'if it is false that all elements do not include the passing.png indicator' 
        if (!tweets.every( (e) => { return !e.text.includes('passing.png') })) {
            let ctx = chartStackedBar.getContext('2d');
            var chart = new Chart(ctx, {
                    type: 'bar',
                    data: someChartJSON.default.data,
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
        }

        //  Scatter Chart

        let ctx2 = chartScatter.getContext('2d');
        console.log('progdistChartJSON.default.annotations', progdistChartJSON.default.annotations)
        var chart2 = new Chart(ctx2, {
            type: 'scatter',
            data: progdistChartJSON.default.data,
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
                        annotations: progdistChartJSON.default.annotations
                    }
                }
            }
        });

        // Line Chart
        let ctx3 = chartLine.getContext('2d');
        var chart3 = new Chart(ctx3, {
            type: 'line',
            data: xGChart.default,
            options: {
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
    });

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

        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={chartLine} id="myChart"></canvas>
            </div>
        </div>

        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={chartScatter} id="myChart"></canvas>
            </div>
        </div>
        <div class="chart" id="chartpng">
            <div class="chart-cont" style="position: relative; height:400px">
                <canvas bind:this={chartStackedBar} id="myChart"></canvas>
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
        border: 1px solid red;
        /* width: 110%; */
        /* margin: 0px 0px 0px -5%; */
        padding: 5%;
        border-radius: 20px;

        border: 1px solid #00917c;
        padding: 5%;
        border-radius: 20px;
        background: #f0f7f6;
        margin: 10px 0 30px 0;
    }

    /* a:-webkit-any-link {
        color: var(--accent-color);
        cursor: pointer;
        text-decoration: underline;
    } */
    a:hover {
        background-color: yellow;
    }
    span:hover {
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

    .tweets {
        color: var(--heading-color);
		line-height: initial;
		font-size: large;
        color: #434343;
        line-height: 1.4;
        font-weight: 300;
        cursor: pointer;
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