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

    let chart_data = {'data': {'datasets': [{'label': 'Manchester City',
    'data': [{'Player': 'Bernardo Silva',
      'x': 1.0,
      'y': 0.4,
      'Team': 'Manchester City'},
     {'Player': 'Ederson', 'x': 0.0, 'y': 0.0, 'Team': 'Manchester City'},
     {'Player': 'Erling Haaland',
      'x': 2.5,
      'y': 0.5,
      'Team': 'Manchester City'},
     {'Player': 'Jack Grealish',
      'x': 5.714285714285714,
      'y': 0.28571428571428575,
      'Team': 'Manchester City'},
     {'Player': 'Joao Cancelo', 'x': 2.0, 'y': 0.9, 'Team': 'Manchester City'},
     {'Player': 'Kevin De Bruyne',
      'x': 4.444444444444445,
      'y': 1.0,
      'Team': 'Manchester City'},
     {'Player': 'Manuel Akanji',
      'x': 2.0,
      'y': 0.2,
      'Team': 'Manchester City'},
     {'Player': 'Phil Foden', 'x': 1.25, 'y': 0.0, 'Team': 'Manchester City'},
     {'Player': 'Rodri', 'x': 0.0, 'y': 0.0, 'Team': 'Manchester City'},
     {'Player': 'Ruben Dias', 'x': 1.0, 'y': 0.0, 'Team': 'Manchester City'},
     {'Player': 'Sergio Gomez',
      'x': 2.0,
      'y': 0.3,
      'Team': 'Manchester City'}],
    'backgroundColor': '#30C0D2'},
   {'label': 'Other teams',
    'data': [{'Player': 'Abakar Sylla',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Club Brugge'},
     {'Player': 'Abdou Diallo', 'x': 0.0, 'y': 0.0, 'Team': 'RB Leipzig'},
     {'Player': 'Abdoulaye Seck', 'x': 0.0, 'y': 0.0, 'Team': 'Maccabi Haifa'},
     {'Player': 'Achraf Hakimi',
      'x': 1.1111111111111112,
      'y': 0.22222222222222224,
      'Team': 'Paris S-G'},
     {'Player': 'Adam Vlkanova',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Viktoria Plzeň'},
     {'Player': 'Adrien Rabiot', 'x': 1.0, 'y': 0.1, 'Team': 'Juventus'},
     {'Player': 'Alessandro Bastoni', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Alex Grimaldo', 'x': 2.0, 'y': 0.2, 'Team': 'Benfica'},
     {'Player': 'Alex Meret', 'x': 0.0, 'y': 0.0, 'Team': 'Napoli'},
     {'Player': 'Alexander Bah', 'x': 2.0, 'y': 0.0, 'Team': 'Benfica'},
     {'Player': 'Alexander Meyer', 'x': 0.0, 'y': 0.0, 'Team': 'Dortmund'},
     {'Player': 'Alexis Saelemaekers',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Milan'},
     {'Player': 'Alisson', 'x': 0.0, 'y': 0.0, 'Team': 'Liverpool'},
     {'Player': 'Alphonso Davies',
      'x': 2.0,
      'y': 0.1,
      'Team': 'Bayern Munich'},
     {'Player': 'Alvaro Morata',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Atlético Madrid'},
     {'Player': 'Amar Dedic', 'x': 1.0, 'y': 0.0, 'Team': 'RB Salzburg'},
     {'Player': 'Amir Rrahmani', 'x': 0.0, 'y': 0.0, 'Team': 'Napoli'},
     {'Player': 'Anatolii Trubin', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Andre Onana', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Andre Silva', 'x': 1.0, 'y': 0.3, 'Team': 'RB Leipzig'},
     {'Player': 'Andre-Frank Zambo Anguissa',
      'x': 2.0,
      'y': 0.1,
      'Team': 'Napoli'},
     {'Player': 'Andreas Christensen',
      'x': 1.0,
      'y': 0.1,
      'Team': 'Barcelona'},
     {'Player': 'Andreas Cornelius',
      'x': 0.0,
      'y': 0.0,
      'Team': 'FC Copenhagen'},
     {'Player': 'Andreas Skov Olsen',
      'x': 3.333333333333333,
      'y': 0.3333333333333333,
      'Team': 'Club Brugge'},
     {'Player': 'Andreas Ulmer', 'x': 1.0, 'y': 0.1, 'Team': 'RB Salzburg'},
     {'Player': 'Andrew Robertson', 'x': 2.0, 'y': 0.1, 'Team': 'Liverpool'},
     {'Player': 'Ansu Fati', 'x': 0.0, 'y': 0.0, 'Team': 'Barcelona'},
     {'Player': 'Anthony Modeste', 'x': 0.0, 'y': 0.0, 'Team': 'Dortmund'},
     {'Player': 'Antonio Adan', 'x': 0.0, 'y': 0.0, 'Team': 'Sporting CP'},
     {'Player': 'Antonio Colak', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Antonio Silva', 'x': 0.0, 'y': 0.0, 'Team': 'Benfica'},
     {'Player': 'Arijan Ademi', 'x': 0.0, 'y': 0.0, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Arkadiusz Milik',
      'x': 1.4285714285714286,
      'y': 0.14285714285714288,
      'Team': 'Juventus'},
     {'Player': 'Artem Bondarenko', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Aurelien Tchouameni',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Real Madrid'},
     {'Player': 'Axel Witsel', 'x': 1.0, 'y': 0.0, 'Team': 'Atlético Madrid'},
     {'Player': 'Ben Chilwell', 'x': 0.0, 'y': 0.0, 'Team': 'Chelsea'},
     {'Player': 'Benjamin Pavard',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Bayern Munich'},
     {'Player': 'Bjorn Meijer', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Borna Barisic', 'x': 1.0, 'y': 0.1, 'Team': 'Rangers'},
     {'Player': 'Brandon Mechele', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Bruno Petkovic', 'x': 2.0, 'y': 0.4, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Callum Hudson-Odoi',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Leverkusen'},
     {'Player': 'Callum McGregor', 'x': 1.0, 'y': 0.2, 'Team': 'Celtic'},
     {'Player': 'Calvin Bassey', 'x': 1.0, 'y': 0.1, 'Team': 'Ajax'},
     {'Player': 'Cameron Carter-Vickers',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Celtic'},
     {'Player': 'Carmona', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Casper Nielsen', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Charles De Ketelaere', 'x': 0.0, 'y': 0.0, 'Team': 'Milan'},
     {'Player': 'Christopher Nkunku',
      'x': 1.0,
      'y': 0.2,
      'Team': 'RB Leipzig'},
     {'Player': 'Clement Lenglet', 'x': 1.25, 'y': 0.0, 'Team': 'Tottenham'},
     {'Player': 'Connor Goldson', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Cristian Romero', 'x': 0.0, 'y': 0.0, 'Team': 'Tottenham'},
     {'Player': 'Daichi Kamada', 'x': 0.0, 'y': 0.0, 'Team': 'Eint Frankfurt'},
     {'Player': 'Daley Blind',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Ajax'},
     {'Player': 'Dani Carvajal', 'x': 2.0, 'y': 0.8, 'Team': 'Real Madrid'},
     {'Player': 'Daniel Sundgren',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Maccabi Haifa'},
     {'Player': 'Danilo', 'x': 0.0, 'y': 0.0, 'Team': 'Juventus'},
     {'Player': "Danilo D'Ambrosio", 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'David Alaba', 'x': 0.0, 'y': 0.0, 'Team': 'Real Madrid'},
     {'Player': 'David Carmo', 'x': 0.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'David Neres', 'x': 0.0, 'y': 0.0, 'Team': 'Benfica'},
     {'Player': 'Davit Khocholava',
      'x': 0.0,
      'y': 0.0,
      'Team': 'FC Copenhagen'},
     {'Player': 'Denis Odoi', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Denis Vavro', 'x': 0.0, 'y': 0.0, 'Team': 'FC Copenhagen'},
     {'Player': 'Denzel Dumfries', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Devyne Rensch', 'x': 1.0, 'y': 0.0, 'Team': 'Ajax'},
     {'Player': 'Dino Peric', 'x': 0.0, 'y': 0.0, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Diogo Costa', 'x': 0.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'Djibril Sow', 'x': 1.0, 'y': 0.0, 'Team': 'Eint Frankfurt'},
     {'Player': 'Dolev Haziz', 'x': 0.0, 'y': 0.0, 'Team': 'Maccabi Haifa'},
     {'Player': 'Dominik Livakovic',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Dinamo Zagreb'},
     {'Player': 'Dominik Szoboszlai',
      'x': 2.0,
      'y': 0.5,
      'Team': 'RB Leipzig'},
     {'Player': 'Dusan Tadic', 'x': 3.0, 'y': 0.3, 'Team': 'Ajax'},
     {'Player': 'Dusan Vlahovic', 'x': 0.0, 'y': 0.0, 'Team': 'Juventus'},
     {'Player': 'Dylan Batubinsika',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Maccabi Haifa'},
     {'Player': 'Eden Hazard',
      'x': 4.285714285714286,
      'y': 0.4285714285714286,
      'Team': 'Real Madrid'},
     {'Player': 'Edin Dzeko', 'x': 1.25, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Edson Alvarez', 'x': 0.0, 'y': 0.0, 'Team': 'Ajax'},
     {'Player': 'Emerson',
      'x': 1.4285714285714286,
      'y': 0.0,
      'Team': 'Tottenham'},
     {'Player': 'Enzo Fernandez', 'x': 1.0, 'y': 0.1, 'Team': 'Benfica'},
     {'Player': 'Eric Bailly', 'x': 0.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Eric Dier', 'x': 0.0, 'y': 0.0, 'Team': 'Tottenham'},
     {'Player': 'Evanilson', 'x': 0.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'Fabinho', 'x': 0.0, 'y': 0.0, 'Team': 'Liverpool'},
     {'Player': 'Federico Valverde',
      'x': 3.0,
      'y': 0.4,
      'Team': 'Real Madrid'},
     {'Player': 'Ferland Mendy', 'x': 1.0, 'y': 0.1, 'Team': 'Real Madrid'},
     {'Player': 'Fernando',
      'x': 1.4285714285714286,
      'y': 0.28571428571428575,
      'Team': 'RB Salzburg'},
     {'Player': 'Fikayo Tomori', 'x': 1.0, 'y': 0.0, 'Team': 'Milan'},
     {'Player': 'Filip Kostic', 'x': 2.0, 'y': 0.1, 'Team': 'Juventus'},
     {'Player': 'Florentino Luis', 'x': 0.0, 'y': 0.0, 'Team': 'Benfica'},
     {'Player': 'Francisco Trincao',
      'x': 1.1111111111111112,
      'y': 0.11111111111111112,
      'Team': 'Sporting CP'},
     {'Player': 'Franck Kessie',
      'x': 1.1111111111111112,
      'y': 0.0,
      'Team': 'Barcelona'},
     {'Player': 'Frantzdy Pierrot',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Maccabi Haifa'},
     {'Player': 'Frenkie de Jong', 'x': 1.0, 'y': 0.1, 'Team': 'Barcelona'},
     {'Player': 'Galeno', 'x': 0.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'Gianluigi Donnarumma',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Paris S-G'},
     {'Player': 'Gio Reyna', 'x': 3.75, 'y': 1.375, 'Team': 'Dortmund'},
     {'Player': 'Giorgos Giakoumakis', 'x': 2.5, 'y': 0.125, 'Team': 'Celtic'},
     {'Player': 'Giovanni Di Lorenzo', 'x': 1.0, 'y': 0.1, 'Team': 'Napoli'},
     {'Player': 'Gleison Bremer', 'x': 0.0, 'y': 0.0, 'Team': 'Juventus'},
     {'Player': 'Glen Kamara', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Goncalo Inacio', 'x': 0.0, 'y': 0.0, 'Team': 'Sporting CP'},
     {'Player': 'Greg Taylor', 'x': 2.0, 'y': 0.1, 'Team': 'Celtic'},
     {'Player': 'Hakan Calhanoglu',
      'x': 3.333333333333333,
      'y': 0.4444444444444445,
      'Team': 'Inter'},
     {'Player': 'Hans Vanaken', 'x': 1.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Harry Kane', 'x': 0.0, 'y': 0.0, 'Team': 'Tottenham'},
     {'Player': 'Henrikh Mkhitaryan', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Heorhii Sudakov', 'x': 2.0, 'y': 0.4, 'Team': 'Shakhtar'},
     {'Player': 'Hidemasa Morita', 'x': 0.0, 'y': 0.0, 'Team': 'Sporting CP'},
     {'Player': 'Hugo Lloris', 'x': 0.0, 'y': 0.0, 'Team': 'Tottenham'},
     {'Player': 'Isco', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Ivan Perisic', 'x': 3.0, 'y': 0.3, 'Team': 'Tottenham'},
     {'Player': 'James Milner',
      'x': 1.4285714285714286,
      'y': 0.14285714285714288,
      'Team': 'Liverpool'},
     {'Player': 'James Sands', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Jan Oblak', 'x': 0.0, 'y': 0.0, 'Team': 'Atlético Madrid'},
     {'Player': 'Jan Sykora', 'x': 0.0, 'y': 0.0, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Jeremie Frimpong',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Leverkusen'},
     {'Player': 'Jesper Lindstrom',
      'x': 1.25,
      'y': 0.125,
      'Team': 'Eint Frankfurt'},
     {'Player': 'Jesus Navas', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Jhon Mosquera',
      'x': 1.1111111111111112,
      'y': 0.3333333333333333,
      'Team': 'Viktoria Plzeň'},
     {'Player': 'Jindrich Stanek',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Viktoria Plzeň'},
     {'Player': 'Joao Felix', 'x': 0.0, 'y': 0.0, 'Team': 'Atlético Madrid'},
     {'Player': 'Joao Mario',
      'x': 1.1111111111111112,
      'y': 0.11111111111111112,
      'Team': 'Benfica'},
     {'Player': 'Joe Hart', 'x': 0.0, 'y': 0.0, 'Team': 'Celtic'},
     {'Player': 'John Lundstram', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Jon McLaughlin', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Jonathan Clauss', 'x': 0.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Jonathan Tah', 'x': 0.0, 'y': 0.0, 'Team': 'Leverkusen'},
     {'Player': 'Jordan Veretout', 'x': 2.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Jordi Alba', 'x': 3.0, 'y': 0.3, 'Team': 'Barcelona'},
     {'Player': 'Jose Maria Gimenez',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Atlético Madrid'},
     {'Player': 'Josh Cohen', 'x': 0.0, 'y': 0.0, 'Team': 'Maccabi Haifa'},
     {'Player': 'Joshua Kimmich', 'x': 1.0, 'y': 0.4, 'Team': 'Bayern Munich'},
     {'Player': 'Josip Juranovic', 'x': 2.0, 'y': 0.5, 'Team': 'Celtic'},
     {'Player': 'Josip Misic', 'x': 1.0, 'y': 0.1, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Josip Sutalo', 'x': 0.0, 'y': 0.0, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Jota',
      'x': 2.2222222222222223,
      'y': 0.22222222222222224,
      'Team': 'Celtic'},
     {'Player': 'Juan Cuadrado', 'x': 2.5, 'y': 0.25, 'Team': 'Juventus'},
     {'Player': 'Jude Bellingham', 'x': 1.0, 'y': 0.1, 'Team': 'Dortmund'},
     {'Player': 'Jules Kounde', 'x': 1.0, 'y': 0.3, 'Team': 'Barcelona'},
     {'Player': 'Julian Brandt', 'x': 2.0, 'y': 0.6, 'Team': 'Dortmund'},
     {'Player': 'Junior Dina Ebimbe',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Eint Frankfurt'},
     {'Player': 'Jurrien Timber', 'x': 0.0, 'y': 0.0, 'Team': 'Ajax'},
     {'Player': 'Jutgla', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Kai Havertz', 'x': 1.0, 'y': 0.1, 'Team': 'Chelsea'},
     {'Player': 'Kalidou Koulibaly', 'x': 1.0, 'y': 0.1, 'Team': 'Chelsea'},
     {'Player': 'Kamal Sowah', 'x': 3.0, 'y': 0.2, 'Team': 'Club Brugge'},
     {'Player': 'Kenneth Taylor', 'x': 3.0, 'y': 0.6, 'Team': 'Ajax'},
     {'Player': 'Kepa Arrizabalaga', 'x': 0.0, 'y': 0.0, 'Team': 'Chelsea'},
     {'Player': 'Kevin Diks',
      'x': 1.1111111111111112,
      'y': 0.0,
      'Team': 'FC Copenhagen'},
     {'Player': 'Kevin Trapp', 'x': 0.0, 'y': 0.0, 'Team': 'Eint Frankfurt'},
     {'Player': 'Kim Min-jae', 'x': 0.0, 'y': 0.0, 'Team': 'Napoli'},
     {'Player': 'Kingsley Coman',
      'x': 6.25,
      'y': 0.37499999999999994,
      'Team': 'Bayern Munich'},
     {'Player': 'Koke', 'x': 1.0, 'y': 0.0, 'Team': 'Atlético Madrid'},
     {'Player': 'Konrad Laimer',
      'x': 1.1111111111111112,
      'y': 0.0,
      'Team': 'RB Leipzig'},
     {'Player': 'Kristijan Jakic',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Eint Frankfurt'},
     {'Player': 'Kudus Mohammed', 'x': 0.0, 'y': 0.0, 'Team': 'Ajax'},
     {'Player': 'Kylian Mbappe', 'x': 0.0, 'y': 0.0, 'Team': 'Paris S-G'},
     {'Player': 'Lautaro Martinez', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Leandro Paredes', 'x': 1.0, 'y': 0.0, 'Team': 'Juventus'},
     {'Player': 'Leonardo Bonucci', 'x': 0.0, 'y': 0.0, 'Team': 'Juventus'},
     {'Player': 'Leroy Sane',
      'x': 3.333333333333333,
      'y': 0.22222222222222224,
      'Team': 'Bayern Munich'},
     {'Player': 'Lionel Messi',
      'x': 3.333333333333333,
      'y': 0.3333333333333333,
      'Team': 'Paris S-G'},
     {'Player': 'Lucas Hernandez',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Bayern Munich'},
     {'Player': 'Lucas Taylor', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Ludek Pernica', 'x': 0.0, 'y': 0.0, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Luis Diaz', 'x': 1.0, 'y': 0.1, 'Team': 'Liverpool'},
     {'Player': 'Luis Javier Suarez',
      'x': 1.25,
      'y': 0.0,
      'Team': 'Marseille'},
     {'Player': 'Luka Ivanusec', 'x': 1.0, 'y': 0.0, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Luka Modric', 'x': 0.0, 'y': 0.0, 'Team': 'Real Madrid'},
     {'Player': 'Lukas Hejda', 'x': 0.0, 'y': 0.0, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Lukas Hradecky', 'x': 0.0, 'y': 0.0, 'Team': 'Leverkusen'},
     {'Player': 'Lukas Kalvach', 'x': 1.0, 'y': 0.1, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Lukas Lerager', 'x': 1.0, 'y': 0.0, 'Team': 'FC Copenhagen'},
     {'Player': 'Manuel Neuer', 'x': 0.0, 'y': 0.0, 'Team': 'Bayern Munich'},
     {'Player': 'Manuel Ugarte Ribeiro',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Sporting CP'},
     {'Player': 'Marc-Andre ter Stegen',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Barcelona'},
     {'Player': 'Marcel Sabitzer',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Bayern Munich'},
     {'Player': 'Marcelo Brozovic', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Marco Reus',
      'x': 2.2222222222222223,
      'y': 0.888888888888889,
      'Team': 'Dortmund'},
     {'Player': 'Marco Verratti', 'x': 1.0, 'y': 0.0, 'Team': 'Paris S-G'},
     {'Player': 'Marcos Acuna', 'x': 1.0, 'y': 0.1, 'Team': 'Sevilla'},
     {'Player': 'Marcos Llorente',
      'x': 1.0,
      'y': 0.0,
      'Team': 'Atlético Madrid'},
     {'Player': 'Marcus Edwards', 'x': 2.5, 'y': 0.5, 'Team': 'Sporting CP'},
     {'Player': 'Mario Gotze', 'x': 0.0, 'y': 0.0, 'Team': 'Eint Frankfurt'},
     {'Player': 'Marquinhos', 'x': 0.0, 'y': 0.0, 'Team': 'Paris S-G'},
     {'Player': 'Maryan Shved', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Mason Mount', 'x': 2.0, 'y': 0.2, 'Team': 'Chelsea'},
     {'Player': 'Mateus Uribe', 'x': 2.0, 'y': 0.1, 'Team': 'Porto'},
     {'Player': 'Matheus Reis', 'x': 0.0, 'y': 0.0, 'Team': 'Sporting CP'},
     {'Player': 'Mathew Ryan', 'x': 0.0, 'y': 0.0, 'Team': 'FC Copenhagen'},
     {'Player': 'Mathias Olivera', 'x': 1.25, 'y': 0.125, 'Team': 'Napoli'},
     {'Player': "Matt O'Riley", 'x': 0.0, 'y': 0.0, 'Team': 'Celtic'},
     {'Player': 'Matteo Guendouzi', 'x': 0.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Matthijs de Ligt',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Bayern Munich'},
     {'Player': 'Mattia Perin', 'x': 0.0, 'y': 0.0, 'Team': 'Juventus'},
     {'Player': 'Maurits Kjaergaard',
      'x': 3.0,
      'y': 0.3,
      'Team': 'RB Salzburg'},
     {'Player': 'Mehdi Taremi',
      'x': 4.444444444444445,
      'y': 0.3333333333333333,
      'Team': 'Porto'},
     {'Player': 'Mike Maignan', 'x': 0.0, 'y': 0.0, 'Team': 'Milan'},
     {'Player': 'Milan Havel', 'x': 0.0, 'y': 0.0, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Milan Skriniar', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Mislav Orsic', 'x': 0.0, 'y': 0.0, 'Team': 'Dinamo Zagreb'},
     {'Player': 'Mitchel Bakker', 'x': 0.0, 'y': 0.0, 'Team': 'Leverkusen'},
     {'Player': 'Mohamed Salah', 'x': 0.0, 'y': 0.0, 'Team': 'Liverpool'},
     {'Player': 'Mohamed Simakan', 'x': 2.0, 'y': 0.1, 'Team': 'RB Leipzig'},
     {'Player': 'Mohammad Abu Fani',
      'x': 4.285714285714286,
      'y': 0.14285714285714288,
      'Team': 'Maccabi Haifa'},
     {'Player': 'Mohammed Daramy',
      'x': 0.0,
      'y': 0.0,
      'Team': 'FC Copenhagen'},
     {'Player': 'Moritz Jenz', 'x': 0.0, 'y': 0.0, 'Team': 'Celtic'},
     {'Player': 'Moussa Diaby', 'x': 0.0, 'y': 0.0, 'Team': 'Leverkusen'},
     {'Player': 'Mykhailo Mudryk', 'x': 2.0, 'y': 0.6, 'Team': 'Shakhtar'},
     {'Player': 'Mykola Matviyenko', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Nemanja Gudelj', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Neta Lavi', 'x': 0.0, 'y': 0.0, 'Team': 'Maccabi Haifa'},
     {'Player': 'Neymar', 'x': 4.0, 'y': 0.3, 'Team': 'Paris S-G'},
     {'Player': 'Nico Schlotterbeck', 'x': 0.0, 'y': 0.0, 'Team': 'Dortmund'},
     {'Player': 'Nicolas Capaldo', 'x': 1.0, 'y': 0.0, 'Team': 'RB Salzburg'},
     {'Player': 'Nicolas Otamendi', 'x': 0.0, 'y': 0.0, 'Team': 'Benfica'},
     {'Player': 'Nicolas Seiwald', 'x': 0.0, 'y': 0.0, 'Team': 'RB Salzburg'},
     {'Player': 'Niklas Sule', 'x': 0.0, 'y': 0.0, 'Team': 'Dortmund'},
     {'Player': 'Noah Okafor', 'x': 0.0, 'y': 0.0, 'Team': 'RB Salzburg'},
     {'Player': 'Nuno Mendes', 'x': 1.0, 'y': 0.1, 'Team': 'Paris S-G'},
     {'Player': 'Nuno Tavares', 'x': 0.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': "Obite N'Dicka", 'x': 0.0, 'y': 0.0, 'Team': 'Eint Frankfurt'},
     {'Player': 'Odilon Kossonou', 'x': 2.0, 'y': 0.1, 'Team': 'Leverkusen'},
     {'Player': 'Odisseas Vlachodimos', 'x': 0.0, 'y': 0.0, 'Team': 'Benfica'},
     {'Player': 'Oleksandr Zubkov', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Otavio', 'x': 0.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'Ousmane Dembele', 'x': 6.25, 'y': 1.0, 'Team': 'Barcelona'},
     {'Player': 'Papu Gomez', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Patrik Schick', 'x': 0.0, 'y': 0.0, 'Team': 'Leverkusen'},
     {'Player': 'Pau Lopez', 'x': 0.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Pavel Bucha', 'x': 0.0, 'y': 0.0, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Pedri', 'x': 1.25, 'y': 0.125, 'Team': 'Barcelona'},
     {'Player': 'Pedro Goncalves',
      'x': 1.1111111111111112,
      'y': 0.0,
      'Team': 'Sporting CP'},
     {'Player': 'Pedro Porro', 'x': 2.0, 'y': 0.3, 'Team': 'Sporting CP'},
     {'Player': 'Pepe', 'x': 0.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'Peter Gulacsi', 'x': 0.0, 'y': 0.0, 'Team': 'RB Leipzig'},
     {'Player': 'Philipp Kohn', 'x': 0.0, 'y': 0.0, 'Team': 'RB Salzburg'},
     {'Player': 'Piero Hincapie', 'x': 2.0, 'y': 0.1, 'Team': 'Leverkusen'},
     {'Player': 'Pierre Hojbjerg', 'x': 3.0, 'y': 0.3, 'Team': 'Tottenham'},
     {'Player': 'Pierre Kalulu', 'x': 0.0, 'y': 0.0, 'Team': 'Milan'},
     {'Player': 'Piotr Zielinski',
      'x': 1.25,
      'y': 0.37499999999999994,
      'Team': 'Napoli'},
     {'Player': 'Presnel Kimpembe', 'x': 0.0, 'y': 0.0, 'Team': 'Paris S-G'},
     {'Player': 'Rafa Silva',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Benfica'},
     {'Player': 'Rafael Leao', 'x': 2.0, 'y': 0.1, 'Team': 'Milan'},
     {'Player': 'Raheem Sterling', 'x': 0.0, 'y': 0.0, 'Team': 'Chelsea'},
     {'Player': 'Randal Kolo Muani',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Eint Frankfurt'},
     {'Player': 'Raphael Guerreiro',
      'x': 1.1111111111111112,
      'y': 0.0,
      'Team': 'Dortmund'},
     {'Player': 'Raphael Nwadike', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Rasmus Falk', 'x': 0.0, 'y': 0.0, 'Team': 'FC Copenhagen'},
     {'Player': 'Reece James', 'x': 1.0, 'y': 0.0, 'Team': 'Chelsea'},
     {'Player': 'Reinildo Mandava',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Atlético Madrid'},
     {'Player': 'Remko Pasveer', 'x': 0.0, 'y': 0.0, 'Team': 'Ajax'},
     {'Player': 'Reo Hatate', 'x': 0.0, 'y': 0.0, 'Team': 'Celtic'},
     {'Player': 'Richarlison', 'x': 1.0, 'y': 0.1, 'Team': 'Tottenham'},
     {'Player': 'Robert Andrich', 'x': 0.0, 'y': 0.0, 'Team': 'Leverkusen'},
     {'Player': 'Robert Lewandowski', 'x': 2.0, 'y': 0.2, 'Team': 'Barcelona'},
     {'Player': 'Robert Ljubicic',
      'x': 1.0,
      'y': 0.0,
      'Team': 'Dinamo Zagreb'},
     {'Player': 'Roberto Firmino', 'x': 0.0, 'y': 0.0, 'Team': 'Liverpool'},
     {'Player': 'Robin Gosens', 'x': 0.0, 'y': 0.0, 'Team': 'Inter'},
     {'Player': 'Rodrigo Bentancur',
      'x': 2.2222222222222223,
      'y': 0.11111111111111112,
      'Team': 'Tottenham'},
     {'Player': 'Ryan Kent', 'x': 0.0, 'y': 0.0, 'Team': 'Rangers'},
     {'Player': 'Sadegh Moharrami',
      'x': 1.25,
      'y': 0.0,
      'Team': 'Dinamo Zagreb'},
     {'Player': 'Sadio Mane', 'x': 3.0, 'y': 0.2, 'Team': 'Bayern Munich'},
     {'Player': 'Salih Ozcan',
      'x': 1.4285714285714286,
      'y': 0.0,
      'Team': 'Dortmund'},
     {'Player': 'Samuel Gigot', 'x': 0.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Sandro Tonali', 'x': 0.0, 'y': 0.0, 'Team': 'Milan'},
     {'Player': 'Saul Niguez', 'x': 0.0, 'y': 0.0, 'Team': 'Atlético Madrid'},
     {'Player': 'Sean Goldberg', 'x': 0.0, 'y': 0.0, 'Team': 'Maccabi Haifa'},
     {'Player': 'Sebastian Coates', 'x': 0.0, 'y': 0.0, 'Team': 'Sporting CP'},
     {'Player': 'Sergio Ramos', 'x': 0.0, 'y': 0.0, 'Team': 'Paris S-G'},
     {'Player': 'Simon Mignolet', 'x': 0.0, 'y': 0.0, 'Team': 'Club Brugge'},
     {'Player': 'Son Heung-min',
      'x': 3.333333333333333,
      'y': 0.22222222222222224,
      'Team': 'Tottenham'},
     {'Player': 'Stanislav Lobotka', 'x': 0.0, 'y': 0.0, 'Team': 'Napoli'},
     {'Player': 'Stefan Ristovski',
      'x': 0.0,
      'y': 0.0,
      'Team': 'Dinamo Zagreb'},
     {'Player': 'Stephen Eustaquio', 'x': 2.0, 'y': 0.2, 'Team': 'Porto'},
     {'Player': 'Steven Berghuis',
      'x': 2.2222222222222223,
      'y': 0.22222222222222224,
      'Team': 'Ajax'},
     {'Player': 'Steven Bergwijn',
      'x': 2.2222222222222223,
      'y': 0.22222222222222224,
      'Team': 'Ajax'},
     {'Player': 'Strahinja Pavlovic',
      'x': 1.0,
      'y': 0.0,
      'Team': 'RB Salzburg'},
     {'Player': 'Tanguy Nianzou', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Taras Stepanenko', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Theo Hernandez', 'x': 1.0, 'y': 0.1, 'Team': 'Milan'},
     {'Player': 'Thibaut Courtois', 'x': 0.0, 'y': 0.0, 'Team': 'Real Madrid'},
     {'Player': 'Thomas Meunier', 'x': 2.0, 'y': 0.3, 'Team': 'Dortmund'},
     {'Player': 'Thomas Muller', 'x': 1.0, 'y': 0.0, 'Team': 'Bayern Munich'},
     {'Player': 'Timo Werner', 'x': 0.0, 'y': 0.0, 'Team': 'RB Leipzig'},
     {'Player': 'Tjaronn Chery', 'x': 0.0, 'y': 0.0, 'Team': 'Maccabi Haifa'},
     {'Player': 'Tomas Chory', 'x': 0.0, 'y': 0.0, 'Team': 'Viktoria Plzeň'},
     {'Player': 'Toni Kroos', 'x': 0.0, 'y': 0.0, 'Team': 'Real Madrid'},
     {'Player': 'Trent Alexander-Arnold',
      'x': 5.0,
      'y': 0.4,
      'Team': 'Liverpool'},
     {'Player': 'Tuta', 'x': 0.0, 'y': 0.0, 'Team': 'Eint Frankfurt'},
     {'Player': 'Vaclav Jemelka',
      'x': 1.1111111111111112,
      'y': 0.3333333333333333,
      'Team': 'Viktoria Plzeň'},
     {'Player': 'Valentin Rongier', 'x': 1.0, 'y': 0.0, 'Team': 'Marseille'},
     {'Player': 'Valerii Bondar', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Victor Bernth Kristiansen',
      'x': 3.0,
      'y': 0.2,
      'Team': 'FC Copenhagen'},
     {'Player': 'Viktor Claesson',
      'x': 0.0,
      'y': 0.0,
      'Team': 'FC Copenhagen'},
     {'Player': 'Vinicius Junior',
      'x': 1.1111111111111112,
      'y': 0.11111111111111112,
      'Team': 'Real Madrid'},
     {'Player': 'Virgil van Dijk', 'x': 0.0, 'y': 0.0, 'Team': 'Liverpool'},
     {'Player': 'Vitinha',
      'x': 1.1111111111111112,
      'y': 0.0,
      'Team': 'Paris S-G'},
     {'Player': 'Wesley Fofana', 'x': 2.0, 'y': 0.2, 'Team': 'Chelsea'},
     {'Player': 'Willi Orban', 'x': 1.0, 'y': 0.1, 'Team': 'RB Leipzig'},
     {'Player': 'Xaver Schlager', 'x': 0.0, 'y': 0.0, 'Team': 'RB Leipzig'},
     {'Player': 'Yassine Bounou', 'x': 0.0, 'y': 0.0, 'Team': 'Sevilla'},
     {'Player': 'Yukhym Konoplia', 'x': 0.0, 'y': 0.0, 'Team': 'Shakhtar'},
     {'Player': 'Zaidu Sanusi', 'x': 2.0, 'y': 0.0, 'Team': 'Porto'},
     {'Player': 'Zeca', 'x': 0.0, 'y': 0.0, 'Team': 'FC Copenhagen'}],
    'backgroundColor': '#C0C0C0'}]},
 'annotations': {'label1': {'type': 'label',
   'xValue': 5.714285714285714,
   'yValue': 0.28571428571428575,
   'xAdjust': -30,
   'yAdjust': 30,
   'backgroundColor': 'rgba(280,280,280,0.5)',
   'content': ['Jack Grealish'],
   'textAlign': 'start',
   'callout': {'display': 'true'}},
  'label2': {'type': 'label',
   'xValue': 4.444444444444445,
   'yValue': 1.0,
   'xAdjust': -30,
   'yAdjust': 30,
   'backgroundColor': 'rgba(280,280,280,0.5)',
   'content': ['Kevin De Bruyne'],
   'textAlign': 'start',
   'callout': {'display': 'true'}}}}



    console.log('data', chart_data)

	onMount(async (promise) => {
        // Chart
        let ctx = some_chart.getContext('2d');
        var chart_new = new Chart(ctx, {
            type: 'scatter',
            data: chart_data.data,
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
                        annotations: chart_data.annotations
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