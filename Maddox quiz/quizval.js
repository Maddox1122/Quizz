let score = 0;
let numquiz = 0;
let scoreimg = new Array()
scoreimg.push('./media/logoval.png')

function check(antwoord, vraag) {
    if (vraag == numquiz) {
        if (antwoord == 'goed') {
            score++
            document.getElementById('button' + numquiz + 'g').style.background = '#13df50'
            document.getElementById('button' + numquiz + 'g').disabled = true
            document.getElementById('button' + numquiz + '.1').disabled = true
            document.getElementById('button' + numquiz + '.2').disabled = true
            document.getElementById('button' + numquiz + '.3').disabled = true
        } else if (antwoord == 'fout') {
            document.getElementById('button' + numquiz + 'g').style.background = '#13df50'
            document.getElementById('button' + numquiz + '.1').style.background = '#af230a'
            document.getElementById('button' + numquiz + '.2').style.background = '#af230a'
            document.getElementById('button' + numquiz + '.3').style.background = '#af230a'
            document.getElementById('button' + numquiz + 'g').disabled = true
            document.getElementById('button' + numquiz + '.1').disabled = true
            document.getElementById('button' + numquiz + '.2').disabled = true
            document.getElementById('button' + numquiz + '.3').disabled = true
        }
    } else {
        window.alert('U moet een van de vorige vragen nog invullen.')
    }
}

let openvraagnum = 10;

function ov1(openvraag) {
    if (openvraag == openvraagnum && numquiz == 9) {
        openvraagnum++
        let ovraag1 = document.getElementById('textinput1').value
        if (ovraag1 === 'controller') {
            score++
            console.log('goed')
            document.getElementById('ovraag1').disabled = true
            document.getElementById('goedzo1').innerHTML = 'Goed!'
        } else {
            document.getElementById('goedzo1').innerHTML = 'Fout!'
            document.getElementById('ovraag1').disabled = true
        }
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.')
    }
}

function ov2(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++
        let ovraag2 = document.getElementById('textinput2').value
        if (ovraag2 === 'duelist') {
            score++
            document.getElementById('ovraag2').disabled = true
            document.getElementById('goedzo2').innerHTML = 'Goed!'
        } else {
            document.getElementById('goedzo2').innerHTML = 'Fout!'
            document.getElementById('ovraag2').disabled = true
        }
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.')
    }
}

function ov3(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++
        let ovraag3 = document.getElementById('textinput3').value
        if (ovraag3 === 'sentinel') {
            score++
            document.getElementById('ovraag3').disabled = true
            document.getElementById('goedzo4').innerHTML = 'Goed!'
        } else {
            document.getElementById('goedzo3').innerHTML = 'Fout!'
            document.getElementById('ovraag3').disabled = true
        }
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.')
    }
}

function ov4(openvraag) {
    if (openvraag == openvraagnum) {
        openvraagnum++
        let ovraag4 = document.getElementById('textinput4').value
        if (ovraag4 === 'iniatator') {
            score++
            console.log('goed')
            document.getElementById('ovraag4').disabled = true
            document.getElementById('goedzo4').innerHTML = 'Goed!'
        } else {
            document.getElementById('goedzo4').innerHTML = 'Fout!'
            document.getElementById('ovraag4').disabled = true
        }
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.')
    }
}

function ov5(openvraag) {
    if (openvraag == openvraagnum) {
        let ovraag5 = document.getElementById('textinput5').value
        if (ovraag5 === 'duelist') {
            score++
            console.log('goed')
            document.getElementById('ovraag5').disabled = true
            document.getElementById('goedzo5').innerHTML = 'Goed!'
        } else {
            document.getElementById('goedzo1').innerHTML = 'Fout!'
            document.getElementById('ovraag1').disabled = true
        }
    } else {
        window.alert('U moet nog een van de vorige vragen invullen.')
    }
}

function krijgscore() {
    const container = document.getElementById('scoreveld');
    if (openvraagnum == 14 && numquiz == 9) {
        if (container) {
            for (let i = 0; i < score; i++) {
                let imgel = document.createElement('img');
                imgel.src = scoreimg[0];
                container.appendChild(imgel);
                document.getElementById('score').disabled = true
            }
        } else {
            console.log('container not found')
        }
    } else {
        window.alert('U moet eerst alle vragen beatnwoorden voordat u uw score kan krijgen.')
    }
}
