$(function() {
	const szuloElem = $('article');
	const sablonElem = $('.kep');
	const meret = 3;
	const cklTomb = [];
	const cimTomb = [ 'A felkelő nap', 'Dűlő szénaszekér', 'Cillagos éj' ];
	const leirasTomb = [ 'Claude Monet (1872)', 'Munkácsy Mihály (1868)', 'Vincent van Gogh (1889)' ];
	var index = 1;
    const kepTomb=[];

	for (let i = 0; i < meret; i++) {
		const ujElem = sablonElem.clone().appendTo(szuloElem);
		const kep = new Kep(cimTomb[i], 'kepek/' + (i + 1) + '.jpg', leirasTomb[i], ujElem);
		cklTomb.push(kep);
	}
	sablonElem.remove();
	console.log(cklTomb);
    for(let key in cklTomb){
        kepTomb.push(cklTomb[key].kep);
    }
    console.log(kepTomb);
	$('#nagykepTarolo h3').html(cklTomb[1].cim);
	$('#nagykepTarolo img').attr('src', cklTomb[1].kep);
	$('#nagykepTarolo p').html(cklTomb[1].leiras);

	$(window).on('lampaKattintas', (event) => {
		console.log(event.detail);
		$('#nagykepTarolo h3').html(event.detail.cim);
		$('#nagykepTarolo img').attr('src', event.detail.kep);
		$('#nagykepTarolo p').html(event.detail.leiras);
	});

	$('#bal').click(()=>{
        console.log(": "+index);
		if (index <= 0) {
			index = kepTomb.length-1;
		} else {
            index--;
        }
        megjelenes(index);
        console.log("kiiras utan: "+index);
    });
	$('#jobb').click(()=>{
        console.log(": "+index);
		if (index > kepTomb.length-2) {
			index = 0;
		} else {
            index++;
        }
        megjelenes(index);
        console.log("kiiras utan: "+index);
    });

	function megjelenes(x) {
		$('#nagykepTarolo img').fadeOut(3000);
		$('#nagykepTarolo img').attr('src', kepTomb[x]);
		$('#nagykepTarolo img').fadeIn(3000);
		$('#nagykepTarolo h3').html(cimTomb[x]);
		$('#nagykepTarolo p').html(leirasTomb[x]);
	}
});
