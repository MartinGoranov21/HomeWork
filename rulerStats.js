var rulers = [
	["asparuh",681, 700 ],
	["tervel", 700,718 ],
	["Sevar", 738,753],
	["telerig", 766,777],
	["kardam", 777, 803],
	["krum", 803,814 ],
	["omurtag",814,831],
];


for (let i = 0; i < rulers.length; i++){
	let yearsRuled;
	yearsRuled= rulers[i][2]- rulers[i][1];
	if (yearsRuled>15){
console.log(`${rulers[i][0]} e upravlqval ${yearsRuled} godini.`);

	}


}
