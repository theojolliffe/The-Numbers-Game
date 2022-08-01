<script>
	import Legend from './Legend.svelte';	
	import { LayerCake, Svg, flatten, uniques } from 'layercake';
	import { stack } from 'd3-shape';
	import { scaleBand, scaleOrdinal } from 'd3-scale';
	import { format, precisionFixed } from 'd3-format';

	import ColumnStacked from './ColumnStacked.svelte';
	import AxisX from './AxisX.svelte';
	import AxisY from './AxisY.svelte';

	import * as someJSON from './passing.json';
	let data = someJSON.default.data
	console.log('dat', data)

	const xKey = 'player';
	const yKey = [0, 1];
	const zKey = 'key';

	const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
	const seriesColors = ['#83DBD7', '#2F7E9F', '#E57873'];

	data.forEach(d => {
		seriesNames.forEach(name => {
			d[name] = +d[name];
		});
	});

	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(data);

	const formatTickY = d => format(`.${precisionFixed(d)}s`)(d);
</script>

<div class="chart-container">
	<div class='ledg-cont'>
		<Legend domain={['short', 'medium', 'long']} colors={seriesColors}/>
	</div>
	<LayerCake
 			padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
 			x={d => d.data[xKey]}
 			y={yKey}
 			z={zKey}
 			xScale={scaleBand().paddingInner([0.02]).round(true)}
 			xDomain={uniques(data, xKey)}
			zScale={scaleOrdinal()}
			zDomain={seriesNames}
			zRange={seriesColors}
 			flatData={flatten(series)}
 			data={series}
	>
		<Svg>
			<AxisX
				gridlines={false}
			/>
			<AxisY
				ticks={4}
				gridlines={false}
				formatTick={formatTickY}
			/>
			<ColumnStacked/>
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
	.ledg-cont {
		width: max-content;
		float: right;
	}
</style>