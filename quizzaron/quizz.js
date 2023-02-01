let score = 0


function antwoord(antw){
    let goed = document.getElementById("goed")
    let fout = document.getElementById("fout")
    let foutt = document.getElementById("foutt")
    if(antw == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord1(antw1){
    let goed = document.getElementById("goed1")
    let fout = document.getElementById("fout1")
    let foutt = document.getElementById("foutt1")
    if(antw1 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw1 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord2(antw2){
    let goed = document.getElementById("goed2")
    let fout = document.getElementById("fout2")
    let foutt = document.getElementById("foutt2")
    if (antw2 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw2 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord3(antw3){
    let goed = document.getElementById("goed3")
    let fout = document.getElementById("fout3")
    let foutt = document.getElementById("foutt3")
    if (antw3 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw3 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord4(antw4){
    let goed = document.getElementById("goed4")
    let fout = document.getElementById("fout4")
    let foutt = document.getElementById("foutt4")
    if (antw4 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw4 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord5(antw5){
    let goed = document.getElementById("goed5")
    let fout = document.getElementById("fout5")
    let foutt = document.getElementById("foutt5")
    if (antw5 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw5 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord6(antw6){
    let goed = document.getElementById("goed6")
    let fout = document.getElementById("fout6")
    let foutt = document.getElementById("foutt6")
    if (antw6 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw6 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord7(antw7){
    let goed = document.getElementById("goed7")
    let fout = document.getElementById("fout7")
    let foutt = document.getElementById("foutt7")
    if (antw7 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw7 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord8(antw8){
    let goed = document.getElementById("goed8")
    let fout = document.getElementById("fout8")
    let foutt = document.getElementById("foutt8")
    if (antw8 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw8 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function antwoord9(antw9){
    let goed = document.getElementById("goed9")
    let fout = document.getElementById("fout9")
    let foutt = document.getElementById("foutt9")
    if (antw9 == 'goed') {
        score++
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    else if (antw9 == 'fout'){
        fout.style.backgroundColor="red"
        foutt.style.backgroundColor="red"
        goed.style.backgroundColor="green"
        goed.disabled=true
        fout.disabled=true
        foutt.disabled=true
    }
    
}

function controleer() {
    let ainput = document.getElementById("oinput").value
    let cknopje = document.getElementById("cknopje")
    let ainputd = document.getElementById("oinput")

    if (ainput == "2"){
        document.getElementById("oinput").style.backgroundColor="green"
        cknopje.disabled=true
        ainputd.disabled=true
        score++

    }
    else{
        document.getElementById("oinput").style.backgroundColor="red"
        cknopje.disabled=true
        document.getElementById("oinput").value="2"
        ainputd.disabled=true
    }

}
function controleer1() {
    let ainput = document.getElementById("oinput1").value
    let cknopje = document.getElementById("cknopje1")
    let ainputd1 = document.getElementById("oinput1")

    if (ainput == "ja"){
        document.getElementById("oinput1").style.backgroundColor="green"
        cknopje.disabled=true
        ainputd1.disabled=true
        score++
    }
    else{
        document.getElementById("oinput1").style.backgroundColor="red"
        cknopje.disabled=true
        ainputd1.disabled=true
        document.getElementById("oinput1").value="ja"
    }
}

function controleer2() {
    let ainput = document.getElementById("oinput2").value
    let cknopje = document.getElementById("cknopje2")
    let ainputd2 = document.getElementById("oinput2")

    if (ainput == "the Broodals"){
        document.getElementById("oinput2").style.backgroundColor="green"
        cknopje.disabled=true
        ainputd2.disabled=true
        score++
    }
    else{
        document.getElementById("oinput2").style.backgroundColor="red"
        cknopje.disabled=true
        ainputd2.disabled=true
        document.getElementById("oinput2").value="the Broodals"
    }
}

function controleer3() {
    let ainput = document.getElementById("oinput3").value
    let cknopje = document.getElementById("cknopje3")
    let ainputd3 = document.getElementById("oinput3")

    if (ainput == "de maan"){
        document.getElementById("oinput3").style.backgroundColor="green"
        cknopje.disabled=true
        ainputd3.disabled=true
        score++
    }
    else{
        document.getElementById("oinput3").style.backgroundColor="red"
        cknopje.disabled=true
        ainputd3.disabled=true
        document.getElementById("oinput3").value="de maan"
    }
}

function controleer4() {
    let ainput = document.getElementById("oinput4").value
    let cknopje = document.getElementById("cknopje4")
    let ainputd4 = document.getElementById("oinput4")

    if (ainput == "kingdoms"){
        document.getElementById("oinput4").style.backgroundColor="green"
        cknopje.disabled=true
        ainputd4.disabled=true
        score++
    }
    else{
        document.getElementById("oinput4").style.backgroundColor="red"
        cknopje.disabled=true
        ainputd4.disabled=true
        document.getElementById("oinput4").value="kingdoms"
    }
}

function scorek(){
    alert("uw score is: " + score)
}

