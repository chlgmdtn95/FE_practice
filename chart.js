const ctx = document.getElementById('totalWinRate').getContext('2d');
const ctx1 = document.getElementById('PvEWinRate').getContext('2d');
const ctx2 = document.getElementById('PvPWinRate').getContext('2d');

const total_data = {
	labels: [
		'Lose',
		'Win'
	],
	datasets: [{
		label: 'Total Winning Rate',
		data: [300, 50],
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)'
		],
		hoverOffset: 4
	}]
};
const pve_data = {
	labels: [
		'Lose',
		'Win'
	],
	datasets: [{
		label: 'PvE Winning Rate',
		data: [50, 100],
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)'
		],
		hoverOffset: 4
	}]
};
const pvp_data = {
	labels: [
		'Lose',
		'Win'
	],
	datasets: [{
		label: 'PvP Winning Rate',
		data: [300, 100],
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)'
		],
		hoverOffset: 4
	}]
};

const totalWinRate = new Chart(ctx, {
	type: 'doughnut',
	data: total_data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'Total winning rate',
				font: {size: 25}
			}
		}
	},
});

const PvEWinRate = new Chart(ctx1, {
	type: 'doughnut',
	data: pve_data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'PvE winning Rate',
				font: {size: 25}
			}
		}
	},
});

const PvPWinRate = new Chart(ctx2, {
	type: 'doughnut',
	data: pvp_data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'PvP winning Rate',
				font: {size: 25}
			}
		}
	},
});