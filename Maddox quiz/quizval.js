let score = 0;
let numquiz = 0;
let scoreimg = new Array();
scoreimg.push('./media/logoval.png');

function check(antwoord, vraag) {

    let naam = document.getElementById('naaminput').value;
    if (naam == '') {
        window.alert('U moet uw naam nog invullen.');
    } else {
        if (vraag == numquiz) {
            numquiz++
            let gbtn = document.getElementById('button' + numquiz + 'g');
            let btn1 = document.getElementById('button' + numquiz + '.1');
            let btn2 = document.getElementById('button' + numquiz + '.2');
            let btn3 = document.getElementById('button' + numquiz + '.3');
            if (antwoord == 'goed') {
                score++;
                gbtn.style.background = '#13df50';
                gbtn.disabled = true;
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
            } else if (antwoord == 'fout') {
                gbtn.style.background = '#13df50'
                btn1.style.background = '#af230a'
                btn2.style.background = '#af230a'
                btn3.style.background = '#af230a'
                gbtn.disabled = true;
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
            };
        } else {
            window.alert("U moet de vorige vraag nog invullen.");
        };
    };
};

let openvraagnum = 10;

function ov1(openvraag) {
    if (openvraag == openvraagnum && numquiz == 10) {
        openvraagnum++;
        let ovraag1 = document.getElementById('textinput1').value;
        if (ovraag1 === 'controller') {
            score++;
            document.getElementById('ovraag1').disabled = true;
            document.getElementById('goedzo1').innerHTML = 'Goed!';
        } else {
            document.getElementById('goedzo1').innerHTML = 'Fout!';
            document.getElementById('ovraag1').disabled = true;
        };
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.')
    };
};

function ov2(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++;
        let ovraag2 = document.getElementById('textinput2').value;
        if (ovraag2 === 'duelist') {
            score++
            document.getElementById('ovraag2').disabled = true;
            document.getElementById('goedzo2').innerHTML = 'Goed!';
        } else {
            document.getElementById('goedzo2').innerHTML = 'Fout!';
            document.getElementById('ovraag2').disabled = true;
        };
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.');
    };
};

function ov3(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++;
        let ovraag3 = document.getElementById('textinput3').value;
        if (ovraag3 === 'sentinel') {
            score++
            document.getElementById('ovraag3').disabled = true;
            document.getElementById('goedzo3').innerHTML = 'Goed!';
        } else {
            document.getElementById('goedzo3').innerHTML = 'Fout!';
            document.getElementById('ovraag3').disabled = true;
        };
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.');
    };
};

function ov4(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++;
        let ovraag4 = document.getElementById('textinput4').value;
        if (ovraag4 === 'initiator') {
            score++;
            document.getElementById('ovraag4').disabled = true;
            document.getElementById('goedzo4').innerHTML = 'Goed!';
        } else {
            document.getElementById('goedzo4').innerHTML = 'Fout!';
            document.getElementById('ovraag4').disabled = true;
        };
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.');
    };
};

function ov5(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++
        let ovraag5 = document.getElementById('textinput5').value;
        if (ovraag5 === 'duelist') {
            score++;
            document.getElementById('ovraag5').disabled = true;
            document.getElementById('goedzo5').innerHTML = 'Goed!';
        } else {
            document.getElementById('goedzo5').innerHTML = 'Fout!';
            document.getElementById('ovraag5').disabled = true;
        }
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.');
    };
};

function krijgscore() {
    const container = document.getElementById('scoreveld');
    const resultaattxt = document.querySelector('.scoreveldtxt');
    let naam = document.getElementById('naaminput').value;
    if (openvraagnum == 15 && numquiz == 10) {
        if (naam != '') {
            resultaattxt.innerHTML = `Hallo ${naam}, U heeft een score van ${score}.`;
        } else {
            window.alert("U moet uw naam nog invullen");
        };
        if (container) {
            for (let i = 0; i <= score; i++) {
                let imgel = document.createElement('img');
                imgel.src = scoreimg[0];
                container.appendChild(imgel);
                document.getElementById('score').disabled = true;
            };
        } else {
            console.log('container not found');
        };
    } else {
        window.alert('U moet eerst alle vragen beatnwoorden voordat u uw score kan krijgen.');
    };
};