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

        let chart_data = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data.json`).then( res => res.json());
        chart_data = chart_data

        console.log('chart_data', chart_data)

        // let carries_chart_json = await fetch(`${assets}/Teams/${teamName}/${date}/chart_data/progdist.json`).then( res => res.json());
        // let xg_chart_json = await fetch(`${assets}/Teams/${teamName}/Timeseries/Expected_npxG.json`).then( res => res.json());
        // let xa_chart_json = await fetch(`${assets}/Teams/${teamName}/Timeseries/Expected_xA.json`).then( res => res.json());

        // let json = await json_raw.json();
        
        return {
			props: { teamName, content, chart_data }
		}
    }
</script>
<script>
	import Header from '$lib/header/Header.svelte';
    import {page} from '$app/stores'
	
    // import * as someJSON from '../content.json';
    import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component';
    export let teamName, content, chart_data

    $: console.log('content', content.data)
    let expanded = 'xoxo';
    function toggle(id) {
        console.log('id', id)
        if (expanded==id) {
            expanded = 'xoxo';
        } else {
            expanded = id;
        }
    }

    import Chart from 'chart.js/auto';
    import annotationPlugin from 'chartjs-plugin-annotation';
    Chart.register(annotationPlugin);
    import { onMount } from 'svelte';
    

	let chartStackedBar, PressStackedBar, carriesScatterChart, passesScatterChart, xgLineChart, xaLineChart, dribblesLineChart;

	onMount(async (promise) => {



        // Passing Stacked Bar
        // In order to determine whether to create chart, we loop through our tweets asking; 'if it is false that all elements do not include the passing.png indicator' 
        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Successful passes_stacked.png') })) {
            let ctx = chartStackedBar.getContext('2d');
            var chart = new Chart(ctx, {
                    type: 'bar',
                    data: chart_data.filter( e => e.type == 'stacked_bar').find( e => e.topic == "Successful passes")['data'],
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
                        aspectRatio: 1.4,
                        borderRadius: 1,
                        scales: {
                        x: {
                            stacked: true,
                            title: {
                                display: true,
                                text: "Number of passes (not inluding passes shorter than 5 yards)",
                                font: {
                                    size: 12
                                }
                            }
                        },
                        y: {
                            stacked: true
                        }
                        }
                    }
                });
        }

        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Presses_stacked.png') })) {
            let ctxpress = PressStackedBar.getContext('2d');
            var chart = new Chart(ctxpress, {
                    type: 'bar',
                    data: chart_data.filter( e => e.type == 'stacked_bar').find( e => e.topic == "Presses")['data'],
                    options: {
                        indexAxis: 'y',
                        plugins: {
                        title: {
                            display: true,
                            text: 'Presses by third of the pitch',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        },
                        },
                        responsive: true,
                        aspectRatio: 1.4,
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


        //  Carries Scatter Chart
        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Progressive distance carried_scatter.png') })) {
            let ctx2 = carriesScatterChart.getContext('2d');
            var chart2 = new Chart(ctx2, {
                type: 'scatter',
                data: chart_data.filter( e => e.type == 'scatter').find( e => e.topic == "Progressive distance carried").data.data,
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: "Combined carries towards the opponent's goal (yards)",
                                font: {
                                    size: 18
                                }
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Carries into the final third",
                                font: {
                                    size: 18
                                }
                            },
                            ticks: {
                                font: {
                                    size: 14,
                                },
                                autoSkip: true,
                                maxTicksLimit: 6
                            },
                            offset: true
                        }
                    },
                    aspectRatio: 1.4,
                    pointRadius: 8,
                    pointHoverRadius: 11,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Forward carrying',
                            font: {
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
                            labels: {
                                usePointStyle: true,
                                boxWidth: 16,
                                boxHeight: 10,
                                font: {
                                    size: 14
                                },
                            },
                        },
                        annotation: {
                            clip: false,
                            annotations: chart_data.filter( e => e.type == 'scatter').find( e => e.topic == "Progressive distance carried").data.annotations
                        }
                    }
                }
            });
        }


        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Progressive pass distance_scatter.png') })) {
            let ctx2 = passesScatterChart.getContext('2d');
            var chart2 = new Chart(ctx2, {
                type: 'scatter',
                data: chart_data.filter( e => e.type == 'scatter').find( e => e.topic == "Progressive pass distance").data.data,
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: "Combined passes towards the opponent's goal (yards)",
                                font: {
                                    size: 18
                                }
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Passes into the final third",
                                font: {
                                    size: 18
                                }
                            },
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 6,
                                font: {
                                    size: 14
                                }
                            },
                            offset: true
                        },
                    },
                    aspectRatio: 1.4,
                    pointRadius: 8,
                    pointHoverRadius: 11,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Forward passing',
                            font: {
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
                            labels: {
                                usePointStyle: true,
                                boxWidth: 16,
                                boxHeight: 10,
                                font: {
                                    size: 14
                                },
                            },
                        },
                        annotation: {
                            clip: false,
                            annotations: chart_data.filter( e => e.type == 'scatter').find( e => e.topic == "Progressive pass distance").data.annotations
                        }
                    }
                }
            });
        }


        // xG Chart
        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Non-penalty expected goals_timeseries.png') })) {
            let ctx3 = xgLineChart.getContext('2d');
            var chart3 = new Chart(ctx3, {
                type: 'line',
                data: chart_data.filter( e => e.type == 'timeseries').find( e => e.topic == "Non-penalty expected goals")['data'],
                options: {
                    aspectRatio: 1.4,
                    pointRadius: 8,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Expected goals by game',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        }
                    },
                    scales: {
                        y: {
                            offset: true
                        }
                    }
                }
            });
        }


        // xA Line Chart
        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Expected assists_timeseries.png') })) {
            let ctx3 = xaLineChart.getContext('2d');
            var chart3 = new Chart(ctx3, {
                type: 'line',
                data: chart_data.filter( e => e.type == 'timeseries').find( e => e.topic == "Expected assists")['data'],
                options: {
                    aspectRatio: 1.4,
                    pointRadius: 8,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Expected assists by game',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        }
                    },
                    scales: {
                        y: {
                            offset: true
                        }
                    }
                }
            });
        }


        // Successful dribbles Chart
        if (!content.data.every( (e) => { return (e.image===undefined)? true : !e.image.includes('Successful dribbles_timeseries.png') })) {
            let ctx3 = dribblesLineChart.getContext('2d');
            var chart3 = new Chart(ctx3, {
                type: 'line',
                data: chart_data.filter( e => e.type == 'timeseries').find( e => e.topic == "Successful dribbles")['data'],
                options: {
                    aspectRatio: 1.4,
                    pointRadius: 8,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Successful dribbles by game',
                            font: {
                                family: 'Helvetica Neue',
                                size: 24
                            }
                        }
                    },
                    scales: {
                        y: {
                            offset: true
                        }
                    }
                }
            });
        }
    });
    console.log('content', content.data[0])

    let content_body = content.data.slice(1)
    let content_title = content.data[0].tweet.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')


</script>


<body class="body2">
	<Header />
	<div style="height: 50px;"></div>
    <div id="head-cont">
        <h2>
            {content_title}
        </h2>
    </div>

	<div id="text-top"></div>
	<div id="tweet-cont" style="width: 640px; margin:0 auto;">

        {#each content_body as { tweet_id, tweet, image }, i}
            <div class={(expanded==tweet_id)?"selectedtweet":"unselectedtweet"}>
                <div>

                    <span class={(expanded==tweet_id)?"selectedTweetSpan":"tweets"} on:click={() => toggle(tweet_id)}>{tweet}</span>



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



                    {#if image && image.includes('Successful passes_stacked.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={chartStackedBar} id="myChart"></canvas>
                            </div>
                        </div>


                    {:else if image && image.includes('Presses_stacked.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={PressStackedBar} id="myChart"></canvas>
                            </div>
                        </div>


                    {:else if image && image.includes('Non-penalty expected goals_timeseries.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={xgLineChart} id="myChart"></canvas>
                            </div>
                        </div>

                    {:else if image && image.includes('Successful dribbles_timeseries.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={dribblesLineChart} id="myChart"></canvas>
                            </div>
                        </div>


                    {:else if image && image.includes('Expected assists_timeseries.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={xaLineChart} id="myChart"></canvas>
                            </div>
                        </div>


                    {:else if image && image.includes('Progressive distance carried_scatter.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={carriesScatterChart} id="myChart"></canvas>
                            </div>
                        </div>


                    {:else if image && image.includes('Progressive pass distance_scatter.png')}

                        <div class="chart" id="chartpng">
                            <div class="chart-cont" style="position: relative; height:400px">
                                <canvas bind:this={passesScatterChart} id="myChart"></canvas>
                            </div>
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
        color: black;
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
        font-size: 6vw;
        margin: auto;
        line-height: 1.4;
        width: 80%;
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
        background: #b0c6df;
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
            color: black;
        }
        h2 {
            font-size: 8vw;
        }
    }

    :global(.ssbc-button) {
        border-radius: 5px;
    }

</style>