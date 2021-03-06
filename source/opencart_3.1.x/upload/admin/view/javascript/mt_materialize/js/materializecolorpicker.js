/**
 * @package     Materialize Template
 * @author      Anton Semenov
 * @copyright   Copyright (c) 2017 - 2018, Materialize Template. https://github.com/trydalcoholic/opencart-materialize
 * @license     https://github.com/trydalcoholic/opencart-materialize/blob/master/LICENSE
 * @link        https://github.com/trydalcoholic/opencart-materialize
 */

(function($) {
	"use strict";

	$.fn.materializeColorPicker = function() {
		const $materialColorsSource = [
			{
				"name": "Red",
				"shades": [
					{
						'name': 'red lighten-5',
						'hex': '#ffebee'
					},
					{
						'name': 'red lighten-4',
						'hex': '#ffcdd2'
					},
					{
						'name': 'red lighten-3',
						'hex': '#ef9a9a'
					},
					{
						'name': 'red lighten-2',
						'hex': '#e57373'
					},
					{
						'name': 'red lighten-1',
						'hex': '#ef5350'
					},
					{
						'name': 'red',
						'hex': '#f44336'
					},
					{
						'name': 'red darken-1',
						'hex': '#e53935'
					},
					{
						'name': 'red darken-2',
						'hex': '#d32f2f'
					},
					{
						'name': 'red darken-3',
						'hex': '#c62828'
					},
					{
						'name': 'red darken-4',
						'hex': '#b71c1c'
					},
					{
						'name': 'red accent-1',
						'hex': '#ff8a80'
					},
					{
						'name': 'red accent-2',
						'hex': '#ff5252'
					},
					{
						'name': 'red accent-3',
						'hex': '#ff1744'
					},
					{
						'name': 'red accent-4',
						'hex': '#d50000'
					}
				]
			},
			{
				"name": "Pink",
				"shades": [
					{
						'name': 'pink lighten-5',
						'hex': '#fce4ec'
					},
					{
						'name': 'pink lighten-4',
						'hex': '#f8bbd0'
					},
					{
						'name': 'pink lighten-3',
						'hex': '#f48fb1'
					},
					{
						'name': 'pink lighten-2',
						'hex': '#f06292'
					},
					{
						'name': 'pink lighten-1',
						'hex': '#ec407a'
					},
					{
						'name': 'pink',
						'hex': '#e91e63'
					},
					{
						'name': 'pink darken-1',
						'hex': '#d81b60'
					},
					{
						'name': 'pink darken-2',
						'hex': '#c2185b'
					},
					{
						'name': 'pink darken-3',
						'hex': '#ad1457'
					},
					{
						'name': 'pink darken-4',
						'hex': '#880e4f'
					},
					{
						'name': 'pink accent-1',
						'hex': '#ff80ab'
					},
					{
						'name': 'pink accent-2',
						'hex': '#ff4081'
					},
					{
						'name': 'pink accent-3',
						'hex': '#f50057'
					},
					{
						'name': 'pink accent-4',
						'hex': '#c51162'
					}
				]
			},
			{
				"name": "Purple",
				"shades": [
					{
						'name': 'purple lighten-5',
						'hex': '#f3e5f5'
					},
					{
						'name': 'purple lighten-4',
						'hex': '#e1bee7'
					},
					{
						'name': 'purple lighten-3',
						'hex': '#ce93d8'
					},
					{
						'name': 'purple lighten-2',
						'hex': '#ba68c8'
					},
					{
						'name': 'purple lighten-1',
						'hex': '#ab47bc'
					},
					{
						'name': 'purple',
						'hex': '#9c27b0'
					},
					{
						'name': 'purple darken-1',
						'hex': '#8e24aa'
					},
					{
						'name': 'purple darken-2',
						'hex': '#7b1fa2'
					},
					{
						'name': 'purple darken-3',
						'hex': '#6a1b9a'
					},
					{
						'name': 'purple darken-4',
						'hex': '#4a148c'
					},
					{
						'name': 'purple accent-1',
						'hex': '#ea80fc'
					},
					{
						'name': 'purple accent-2',
						'hex': '#e040fb'
					},
					{
						'name': 'purple accent-3',
						'hex': '#d500f9'
					},
					{
						'name': 'purple accent-4',
						'hex': '#aa00ff'
					}
				]
			},
			{
				"name": "Deep Purple",
				"shades": [
					{
						'name': 'deep-purple lighten-5',
						'hex': '#ede7f6'
					},
					{
						'name': 'deep-purple lighten-4',
						'hex': '#d1c4e9'
					},
					{
						'name': 'deep-purple lighten-3',
						'hex': '#b39ddb'
					},
					{
						'name': 'deep-purple lighten-2',
						'hex': '#9575cd'
					},
					{
						'name': 'deep-purple lighten-1',
						'hex': '#7e57c2'
					},
					{
						'name': 'deep-purple',
						'hex': '#673ab7'
					},
					{
						'name': 'deep-purple darken-1',
						'hex': '#5e35b1'
					},
					{
						'name': 'deep-purple darken-2',
						'hex': '#512da8'
					},
					{
						'name': 'deep-purple darken-3',
						'hex': '#4527a0'
					},
					{
						'name': 'deep-purple darken-4',
						'hex': '#311b92'
					},
					{
						'name': 'deep-purple accent-1',
						'hex': '#b388ff'
					},
					{
						'name': 'deep-purple accent-2',
						'hex': '#7c4dff'
					},
					{
						'name': 'deep-purple accent-3',
						'hex': '#651fff'
					},
					{
						'name': 'deep-purple accent-4',
						'hex': '#6200ea'
					}
				]
			},
			{
				"name": "Indigo",
				"shades": [
					{
						'name': 'indigo lighten-5',
						'hex': '#e8eaf6'
					},
					{
						'name': 'indigo lighten-4',
						'hex': '#c5cae9'
					},
					{
						'name': 'indigo lighten-3',
						'hex': '#9fa8da'
					},
					{
						'name': 'indigo lighten-2',
						'hex': '#7986cb'
					},
					{
						'name': 'indigo lighten-1',
						'hex': '#5c6bc0'
					},
					{
						'name': 'indigo',
						'hex': '#3f51b5'
					},
					{
						'name': 'indigo darken-1',
						'hex': '#3949ab'
					},
					{
						'name': 'indigo darken-2',
						'hex': '#303f9f'
					},
					{
						'name': 'indigo darken-3',
						'hex': '#283593'
					},
					{
						'name': 'indigo darken-4',
						'hex': '#1a237e'
					},
					{
						'name': 'indigo accent-1',
						'hex': '#8c9eff'
					},
					{
						'name': 'indigo accent-2',
						'hex': '#536dfe'
					},
					{
						'name': 'indigo accent-3',
						'hex': '#3d5afe'
					},
					{
						'name': 'indigo accent-4',
						'hex': '#304ffe'
					}
				]
			},
			{
				"name": "Blue",
				"shades": [
					{
						'name': 'blue lighten-5',
						'hex': '#e3f2fd'
					},
					{
						'name': 'blue lighten-4',
						'hex': '#bbdefb'
					},
					{
						'name': 'blue lighten-3',
						'hex': '#90caf9'
					},
					{
						'name': 'blue lighten-2',
						'hex': '#64b5f6'
					},
					{
						'name': 'blue lighten-1',
						'hex': '#42a5f5'
					},
					{
						'name': 'blue',
						'hex': '#2196f3'
					},
					{
						'name': 'blue darken-1',
						'hex': '#1e88e5'
					},
					{
						'name': 'blue darken-2',
						'hex': '#1976d2'
					},
					{
						'name': 'blue darken-3',
						'hex': '#1565c0'
					},
					{
						'name': 'blue darken-4',
						'hex': '#0d47a1'
					},
					{
						'name': 'blue accent-1',
						'hex': '#82b1ff'
					},
					{
						'name': 'blue accent-2',
						'hex': '#448aff'
					},
					{
						'name': 'blue accent-3',
						'hex': '#2979ff'
					},
					{
						'name': 'blue accent-4',
						'hex': '#2962ff'
					}
				]
			},
			{
				"name": "Light Blue",
				"shades": [
					{
						'name': 'light-blue lighten-5',
						'hex': '#e1f5fe'
					},
					{
						'name': 'light-blue lighten-4',
						'hex': '#b3e5fc'
					},
					{
						'name': 'light-blue lighten-3',
						'hex': '#81d4fa'
					},
					{
						'name': 'light-blue lighten-2',
						'hex': '#4fc3f7'
					},
					{
						'name': 'light-blue lighten-1',
						'hex': '#29b6f6'
					},
					{
						'name': 'light-blue',
						'hex': '#03a9f4'
					},
					{
						'name': 'light-blue darken-1',
						'hex': '#039be5'
					},
					{
						'name': 'light-blue darken-2',
						'hex': '#0288d1'
					},
					{
						'name': 'light-blue darken-3',
						'hex': '#0277bd'
					},
					{
						'name': 'light-blue darken-4',
						'hex': '#01579b'
					},
					{
						'name': 'light-blue accent-1',
						'hex': '#80d8ff'
					},
					{
						'name': 'light-blue accent-2',
						'hex': '#40c4ff'
					},
					{
						'name': 'light-blue accent-3',
						'hex': '#00b0ff'
					},
					{
						'name': 'light-blue accent-4',
						'hex': '#0091ea'
					}
				]
			},
			{
				"name": "Cyan",
				"shades": [
					{
						'name': 'cyan lighten-5',
						'hex': '#e0f7fa'
					},
					{
						'name': 'cyan lighten-4',
						'hex': '#b2ebf2'
					},
					{
						'name': 'cyan lighten-3',
						'hex': '#80deea'
					},
					{
						'name': 'cyan lighten-2',
						'hex': '#4dd0e1'
					},
					{
						'name': 'cyan lighten-1',
						'hex': '#26c6da'
					},
					{
						'name': 'cyan',
						'hex': '#00bcd4'
					},
					{
						'name': 'cyan darken-1',
						'hex': '#00acc1'
					},
					{
						'name': 'cyan darken-2',
						'hex': '#0097a7'
					},
					{
						'name': 'cyan darken-3',
						'hex': '#00838f'
					},
					{
						'name': 'cyan darken-4',
						'hex': '#006064'
					},
					{
						'name': 'cyan accent-1',
						'hex': '#84ffff'
					},
					{
						'name': 'cyan accent-2',
						'hex': '#18ffff'
					},
					{
						'name': 'cyan accent-3',
						'hex': '#00e5ff'
					},
					{
						'name': 'cyan accent-4',
						'hex': '#00b8d4'
					}
				]
			},
			{
				"name": "Teal",
				"shades": [
					{
						'name': 'teal lighten-5',
						'hex': '#e0f2f1'
					},
					{
						'name': 'teal lighten-4',
						'hex': '#b2dfdb'
					},
					{
						'name': 'teal lighten-3',
						'hex': '#80cbc4'
					},
					{
						'name': 'teal lighten-2',
						'hex': '#4db6ac'
					},
					{
						'name': 'teal lighten-1',
						'hex': '#26a69a'
					},
					{
						'name': 'teal',
						'hex': '#009688'
					},
					{
						'name': 'teal darken-1',
						'hex': '#00897b'
					},
					{
						'name': 'teal darken-2',
						'hex': '#00796b'
					},
					{
						'name': 'teal darken-3',
						'hex': '#00695c'
					},
					{
						'name': 'teal darken-4',
						'hex': '#004d40'
					},
					{
						'name': 'teal accent-1',
						'hex': '#a7ffeb'
					},
					{
						'name': 'teal accent-2',
						'hex': '#64ffda'
					},
					{
						'name': 'teal accent-3',
						'hex': '#1de9b6'
					},
					{
						'name': 'teal accent-4',
						'hex': '#00bfa5'
					}
				]
			},
			{
				"name": "Green",
				"shades": [
					{
						'name': 'green lighten-5',
						'hex': '#e8f5e9'
					},
					{
						'name': 'green lighten-4',
						'hex': '#c8e6c9'
					},
					{
						'name': 'green lighten-3',
						'hex': '#a5d6a7'
					},
					{
						'name': 'green lighten-2',
						'hex': '#81c784'
					},
					{
						'name': 'green lighten-1',
						'hex': '#66bb6a'
					},
					{
						'name': 'green',
						'hex': '#4caf50'
					},
					{
						'name': 'green darken-1',
						'hex': '#43a047'
					},
					{
						'name': 'green darken-2',
						'hex': '#388e3c'
					},
					{
						'name': 'green darken-3',
						'hex': '#2e7d32'
					},
					{
						'name': 'green darken-4',
						'hex': '#1b5e20'
					},
					{
						'name': 'green accent-1',
						'hex': '#b9f6ca'
					},
					{
						'name': 'green accent-2',
						'hex': '#69f0ae'
					},
					{
						'name': 'green accent-3',
						'hex': '#00e676'
					},
					{
						'name': 'green accent-4',
						'hex': '#00c853'
					}
				]
			},
			{
				"name": "Light Green",
				"shades": [
					{
						'name': 'light-green lighten-5',
						'hex': '#f1f8e9'
					},
					{
						'name': 'light-green lighten-4',
						'hex': '#dcedc8'
					},
					{
						'name': 'light-green lighten-3',
						'hex': '#c5e1a5'
					},
					{
						'name': 'light-green lighten-2',
						'hex': '#aed581'
					},
					{
						'name': 'light-green lighten-1',
						'hex': '#9ccc65'
					},
					{
						'name': 'light-green',
						'hex': '#8bc34a'
					},
					{
						'name': 'light-green darken-1',
						'hex': '#7cb342'
					},
					{
						'name': 'light-green darken-2',
						'hex': '#689f38'
					},
					{
						'name': 'light-green darken-3',
						'hex': '#558b2f'
					},
					{
						'name': 'light-green darken-4',
						'hex': '#33691e'
					},
					{
						'name': 'light-green accent-1',
						'hex': '#ccff90'
					},
					{
						'name': 'light-green accent-2',
						'hex': '#b2ff59'
					},
					{
						'name': 'light-green accent-3',
						'hex': '#76ff03'
					},
					{
						'name': 'light-green accent-4',
						'hex': '#64dd17'
					}
				]
			},
			{
				"name": "Lime",
				"shades": [
					{
						'name': 'lime lighten-5',
						'hex': '#f9fbe7'
					},
					{
						'name': 'lime lighten-4',
						'hex': '#f0f4c3'
					},
					{
						'name': 'lime lighten-3',
						'hex': '#e6ee9c'
					},
					{
						'name': 'lime lighten-2',
						'hex': '#dce775'
					},
					{
						'name': 'lime lighten-1',
						'hex': '#d4e157'
					},
					{
						'name': 'lime',
						'hex': '#cddc39'
					},
					{
						'name': 'lime darken-1',
						'hex': '#c0ca33'
					},
					{
						'name': 'lime darken-2',
						'hex': '#afb42b'
					},
					{
						'name': 'lime darken-3',
						'hex': '#9e9d24'
					},
					{
						'name': 'lime darken-4',
						'hex': '#827717'
					},
					{
						'name': 'lime accent-1',
						'hex': '#f4ff81'
					},
					{
						'name': 'lime accent-2',
						'hex': '#eeff41'
					},
					{
						'name': 'lime accent-3',
						'hex': '#c6ff00'
					},
					{
						'name': 'lime accent-4',
						'hex': '#aeea00'
					}
				]
			},
			{
				"name": "Yellow",
				"shades": [
					{
						'name': 'yellow lighten-5',
						'hex': '#fffde7'
					},
					{
						'name': 'yellow lighten-4',
						'hex': '#fff9c4'
					},
					{
						'name': 'yellow lighten-3',
						'hex': '#fff59d'
					},
					{
						'name': 'yellow lighten-2',
						'hex': '#fff176'
					},
					{
						'name': 'yellow lighten-1',
						'hex': '#ffee58'
					},
					{
						'name': 'yellow',
						'hex': '#ffeb3b'
					},
					{
						'name': 'yellow darken-1',
						'hex': '#fdd835'
					},
					{
						'name': 'yellow darken-2',
						'hex': '#fbc02d'
					},
					{
						'name': 'yellow darken-3',
						'hex': '#f9a825'
					},
					{
						'name': 'yellow darken-4',
						'hex': '#f57f17'
					},
					{
						'name': 'yellow accent-1',
						'hex': '#ffff8d'
					},
					{
						'name': 'yellow accent-2',
						'hex': '#ffff00'
					},
					{
						'name': 'yellow accent-3',
						'hex': '#ffea00'
					},
					{
						'name': 'yellow accent-4',
						'hex': '#ffd600'
					}
				]
			},
			{
				"name": "Amber",
				"shades": [
					{
						'name': 'amber lighten-5',
						'hex': '#fff8e1'
					},
					{
						'name': 'amber lighten-4',
						'hex': '#ffecb3'
					},
					{
						'name': 'amber lighten-3',
						'hex': '#ffe082'
					},
					{
						'name': 'amber lighten-2',
						'hex': '#ffd54f'
					},
					{
						'name': 'amber lighten-1',
						'hex': '#ffca28'
					},
					{
						'name': 'amber',
						'hex': '#ffc107'
					},
					{
						'name': 'amber darken-1',
						'hex': '#ffb300'
					},
					{
						'name': 'amber darken-2',
						'hex': '#ffa000'
					},
					{
						'name': 'amber darken-3',
						'hex': '#ff8f00'
					},
					{
						'name': 'amber darken-4',
						'hex': '#ff6f00'
					},
					{
						'name': 'amber accent-1',
						'hex': '#ffe57f'
					},
					{
						'name': 'amber accent-2',
						'hex': '#ffd740'
					},
					{
						'name': 'amber accent-3',
						'hex': '#ffc400'
					},
					{
						'name': 'amber accent-4',
						'hex': '#ffab00'
					}
				]
			},
			{
				"name": "Orange",
				"shades": [
					{
						'name': 'orange lighten-5',
						'hex': '#fff3e0'
					},
					{
						'name': 'orange lighten-4',
						'hex': '#ffe0b2'
					},
					{
						'name': 'orange lighten-3',
						'hex': '#ffcc80'
					},
					{
						'name': 'orange lighten-2',
						'hex': '#ffb74d'
					},
					{
						'name': 'orange lighten-1',
						'hex': '#ffa726'
					},
					{
						'name': 'orange',
						'hex': '#ff9800'
					},
					{
						'name': 'orange darken-1',
						'hex': '#fb8c00'
					},
					{
						'name': 'orange darken-2',
						'hex': '#f57c00'
					},
					{
						'name': 'orange darken-3',
						'hex': '#ef6c00'
					},
					{
						'name': 'orange darken-4',
						'hex': '#e65100'
					},
					{
						'name': 'orange accent-1',
						'hex': '#ffd180'
					},
					{
						'name': 'orange accent-2',
						'hex': '#ffab40'
					},
					{
						'name': 'orange accent-3',
						'hex': '#ff9100'
					},
					{
						'name': 'orange accent-4',
						'hex': '#ff6d00'
					}
				]
			},
			{
				"name": "Deep Orange",
				"shades": [
					{
						'name': 'deep-orange lighten-5',
						'hex': '#fbe9e7'
					},
					{
						'name': 'deep-orange lighten-4',
						'hex': '#ffccbc'
					},
					{
						'name': 'deep-orange lighten-3',
						'hex': '#ffab91'
					},
					{
						'name': 'deep-orange lighten-2',
						'hex': '#ff8a65'
					},
					{
						'name': 'deep-orange lighten-1',
						'hex': '#ff7043'
					},
					{
						'name': 'deep-orange',
						'hex': '#ff5722'
					},
					{
						'name': 'deep-orange darken-1',
						'hex': '#f4511e'
					},
					{
						'name': 'deep-orange darken-2',
						'hex': '#e64a19'
					},
					{
						'name': 'deep-orange darken-3',
						'hex': '#d84315'
					},
					{
						'name': 'deep-orange darken-4',
						'hex': '#bf360c'
					},
					{
						'name': 'deep-orange accent-1',
						'hex': '#ff9e80'
					},
					{
						'name': 'deep-orange accent-2',
						'hex': '#ff6e40'
					},
					{
						'name': 'deep-orange accent-3',
						'hex': '#ff3d00'
					},
					{
						'name': 'deep-orange accent-4',
						'hex': '#dd2c00'
					}
				]
			},
			{
				"name": "Brown",
				"shades": [
					{
						'name': 'brown lighten-5',
						'hex': '#efebe9'
					},
					{
						'name': 'brown lighten-4',
						'hex': '#d7ccc8'
					},
					{
						'name': 'brown lighten-3',
						'hex': '#bcaaa4'
					},
					{
						'name': 'brown lighten-2',
						'hex': '#a1887f'
					},
					{
						'name': 'brown lighten-1',
						'hex': '#8d6e63'
					},
					{
						'name': 'brown',
						'hex': '#795548'
					},
					{
						'name': 'brown darken-1',
						'hex': '#6d4c41'
					},
					{
						'name': 'brown darken-2',
						'hex': '#5d4037'
					},
					{
						'name': 'brown darken-3',
						'hex': '#4e342e'
					},
					{
						'name': 'brown darken-4',
						'hex': '#3e2723'
					}
				]
			},
			{
				"name": "Grey",
				"shades": [
					{
						'name': 'grey lighten-5',
						'hex': '#fafafa'
					},
					{
						'name': 'grey lighten-4',
						'hex': '#f5f5f5'
					},
					{
						'name': 'grey lighten-3',
						'hex': '#eeeeee'
					},
					{
						'name': 'grey lighten-2',
						'hex': '#e0e0e0'
					},
					{
						'name': 'grey lighten-1',
						'hex': '#bdbdbd'
					},
					{
						'name': 'grey',
						'hex': '#9e9e9e'
					},
					{
						'name': 'grey darken-1',
						'hex': '#757575'
					},
					{
						'name': 'grey darken-2',
						'hex': '#616161'
					},
					{
						'name': 'grey darken-3',
						'hex': '#424242'
					},
					{
						'name': 'grey darken-4',
						'hex': '#212121'
					}
				]
			},
			{
				"name": "Blue Grey",
				"shades": [
					{
						'name': 'blue-grey lighten-5',
						'hex': '#eceff1'
					},
					{
						'name': 'blue-grey lighten-4',
						'hex': '#cfd8dc'
					},
					{
						'name': 'blue-grey lighten-3',
						'hex': '#b0bec5'
					},
					{
						'name': 'blue-grey lighten-2',
						'hex': '#90a4ae'
					},
					{
						'name': 'blue-grey lighten-1',
						'hex': '#78909c'
					},
					{
						'name': 'blue-grey',
						'hex': '#607d8b'
					},
					{
						'name': 'blue-grey darken-1',
						'hex': '#546e7a'
					},
					{
						'name': 'blue-grey darken-2',
						'hex': '#455a64'
					},
					{
						'name': 'blue-grey darken-3',
						'hex': '#37474f'
					},
					{
						'name': 'blue-grey darken-4',
						'hex': '#263238'
					}
				]
			},
			{
				"name": "Common",
				"shades": [
					{
						'name': 'black',
						'hex': '#000000'
					},
					{
						'name': 'white',
						'hex': '#ffffff'
					},
					{
						'name': 'transparent',
						'hex': ''
					}
				]
			}
		];
		const $materialColorsSourceLength = $materialColorsSource.length;

		function rgb2hex(rgb) {
			if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

			function hex(x) {
				return ("0" + parseInt(x).toString(16)).slice(-2);
			}

			return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

		return this.each(function() {
			let $this = $(this),
				$materialPalette = $('<div class="material-palette"/>'),
				timer = null,
				colorType = $this.data('color-type'),
				liveBackgroundColor = $this.parent().find('.input-group-text'),
				liveTextColor = liveBackgroundColor.find('i');

			$this.active = false;

			// Prevent manual entry
			$this.keydown(function(e) {
				e.preventDefault();
			});

			// Focus
			$this.on('focus', function() {
				this.createPalette();
			});

			// Blur
			$this.on('blur', function() {
				if (!$this.active) {
					hide();
				}
			});

			// Mouseenter / Mouseleave
			$materialPalette.on('mouseenter', function() {
				if (timer) {
					clearTimeout(timer);
				}

				$this.active = true;
			}).on('mouseleave', function() {
				timer = setTimeout(function() {
					$this.active = false;
					$this.trigger("blur");
				}, 350);
			});

			// Keydown
			$this.on('keydown', function(event) {
				switch (event.keyCode) {
					case 27: // escape
						hide();
						break;
					default:
						this.createPalette();
						break;
				}
			});

			// Click
			this.click = function(event) {
				$(event.target).parent().parent().find('.selected').removeClass('selected');
				$(event.target).addClass('selected');

				let value = $.trim($(event.target).data('original-title')),
					setColor = $.trim($(event.target).css('background-color'));

				if (colorType === 'background') {
					$this.val(value).change()
						.parent().find('input[type=\'hidden\'][data-color-type=\'background\']').val(rgb2hex(setColor)).change();
					liveBackgroundColor.css({'background-color': setColor});
				} else {
					let textSplit = value.split(' ');

					if (!textSplit[1]) {
						$this.val(textSplit[0] + '-text').change();
					} else {
						$this.val(textSplit[0] + '-text text-' + textSplit[1]).change();
					}

					$this.parent().find('input[type=\'hidden\'][data-color-type=\'text\']').val(rgb2hex(setColor)).change();

					liveTextColor.css({'color': setColor});
				}
			};

			// Show
			this.show = function() {
				let top, distanceBottom = $(window).height() - $this.offset().top - $this.height() + $(window).scrollTop();

				top = (distanceBottom >= 460) ? '100%': 'calc(-100% - 423px)';

				$materialPalette.css({
					'display': 'flex',
					'opacity': '1',
					'width': '400px',
					'height': 'auto',
					'left': $this.position().left,
					'top': top,
					'transform-origin': '0px 0px 0px',
					'transform': 'scaleX(1) scaleY(1)'
				});
			};

			// Hide
			let hide = function() {
				$materialPalette.css({
					'display': 'none',
					'opacity': '0',
					'width': '400px',
					'height': 'auto',
					'left': '',
					'top': '',
					'transform-origin': '0px 0px 0px',
					'transform': 'scaleX(0.8) scaleY(0.8)'
				});
			};

			// Create Palette
			this.createPalette = function() {
				let html = '', i, j, thisValue;

				if (colorType === 'background') {
					thisValue = $.trim($this.val());
				} else {
					let textSplit = $.trim($this.val()).split(' ');

					if (!textSplit[1]) {
						thisValue = textSplit[0].replace('-text', '');
					} else {
						thisValue = textSplit[0].replace('-text', '') + ' ' + textSplit[1].replace('text-', '');
					}
				}

				html += '<ul class="material-color-labels">';

				for (i = 0; i < $materialColorsSourceLength; i++) {
					html += '	<li class="material-color-label">' + $materialColorsSource[i]['name'] + '</li>';
				}

				html += '</ul>';
				html += '<div class="material-palettes">';

				for (i = 0; i < $materialColorsSourceLength; i++) {
					html += '	<ul class="material-palettes-list">';

					let shades = $materialColorsSource[i]['shades'],
						shadesLength = shades.length;

					for (j = 0; j < shadesLength; j++) {
						if (shades[j]['hex'] && shades[j]['name'] === thisValue) {
							html += '	<li class="material-palettes-list-item waves-effect selected" style="background-color: ' + shades[j]['hex'] + ';" title="' + shades[j]['name'] + '" data-toggle="tooltip" data-original-title="' + shades[j]['name'] + '"></li>';
						} else if (shades[j]['hex'] && shades[j]['name'] !== thisValue) {
							html += '	<li class="material-palettes-list-item waves-effect" style="background-color: ' + shades[j]['hex'] + ';" title="' + shades[j]['name'] + '" data-toggle="tooltip" data-original-title="' + shades[j]['name'] + '"></li>';
						} else if (!shades[j]['hex'] && shades[j]['name'] === thisValue && colorType !== 'text') {
							html += '	<li class="material-palettes-list-item waves-effect selected transparent" title="' + shades[j]['name'] + '" data-toggle="tooltip" data-original-title="' + shades[j]['name'] + '"></li>';
						} else if (colorType !== 'text') {
							html += '	<li class="material-palettes-list-item waves-effect transparent" title="' + shades[j]['name'] + '" data-toggle="tooltip" data-original-title="' + shades[j]['name'] + '"></li>';
						}
					}

					html += '	</ul>';
				}

				html += '</div>';

				this.show();

				$materialPalette.html(html);

				/*$('[data-toggle=\'tooltip\']').tooltip({container: 'body', html: true});*/
			};

			$materialPalette.on('click', 'li.material-palettes-list-item', this.click);

			$this.after($materialPalette);
		});
	};
})(jQuery);