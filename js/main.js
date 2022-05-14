let playingAudio
playingAudio = document.querySelector('#one').addEventListener('mouseover', darthMaul)
document.querySelector('#two').addEventListener('mouseover', yoda)
document.querySelector('#three').addEventListener('mouseover', Chbacka)
// document.querySelector('#four').addEventListener('mouseover', darthMaul)
// document.querySelector('#five').addEventListener('mouseover', darthMaul)
// document.querySelector('#six').addEventListener('mouseover', darthMaul)
// document.querySelector('#seven').addEventListener('mouseover', darthMaul)
playingAudio = document.querySelector('#eight').addEventListener('mouseover', darthVader)
document.querySelector('#nine').addEventListener('mouseover', obiWan)
playingAudio = document.querySelector('#ten').addEventListener('mouseover',BabaFett)
playingAudio = document.querySelector('#fourteen').addEventListener('mouseover',c30)
// playingAudio = document.querySelector('#eleven').addEventListener('mouseover',BabaFett)
// document.querySelector('#twelve').addEventListener('mouseover', darthMaul)
playingAudio = document.querySelector('#Heading').addEventListener('mouseover', stopAudio)


document.querySelector("#one").addEventListener('click', darthPhoto)
document.querySelector("#nine").addEventListener('click', obiPhoto)
document.querySelector("#eight").addEventListener('click', vaderPhoto)
document.querySelector("#two").addEventListener('click', yoda)

function resetAudios() {
    const audios = document.querySelectorAll('.all-audios')
    for(let i of audios) {
        if (i !== playingAudio) {
            i.pause();
            i.currentTime = 0;
        } 
    }
}

function stopAudio() {
    const audios = document.querySelectorAll('.all-audios')
    for(let i of audios) {
            i.pause();
            i.currentTime = 0;
    }
}

function darthMaul() {
    resetAudios()
    document.querySelector("#darth-maul").play();
}


function darthVader() {
    resetAudios()
    document.querySelector("#darth-vader").play();
}


function BabaFett() {
    resetAudios()
    document.querySelector("#baba-fett").play();
}

function Chbacka() {
    resetAudios()
    document.querySelector("#Chbacka").play();
}

function yoda() {
    resetAudios()
    document.querySelector("#yoda").play();
}

function obiWan() {
    resetAudios()
    document.querySelector("#obi").play();
}

function c30() {
    resetAudios()
    document.querySelector("#c30").play();
}
// document.querySelector('#Heading').innerText = "MAY THE FORCE BE WITH YOU"

function darthPhoto() {
    document.querySelector("main").classList.add("hidden")
    document.querySelector('#Heading').innerText = "Sith"
    document.querySelector('#Heading').style.color = "red"
    document.querySelector('#maul').classList.toggle('hidden')
    document.querySelector('#light').classList.add('hidden')
    document.querySelector('body').classList.add('background-img')
}


function obiPhoto() {
    document.querySelector("main").classList.add("hidden")
    document.querySelector('#Heading').innerText = "Jedi"
    document.querySelector('#Heading').style.color = "blue"
    document.querySelector('#obi').classList.toggle('hidden')
    document.querySelector('#light').classList.add('hidden')
    // document.querySelector('body').classList.add('background-img')
}

function vaderPhoto() {
    document.querySelector("main").classList.add("hidden")
    document.querySelector('#Heading').innerText = "Sith"
    document.querySelector('#Heading').style.color = "red"
    document.querySelector('#vader').classList.toggle('hidden')
    document.querySelector('#light').classList.add('hidden')
    // document.querySelector('body').classList.add('background-img')
}

function yodaPhoto() {
    document.querySelector("main").classList.add("hidden")
    document.querySelector('#Heading').innerText = "Jedi"
    document.querySelector('#Heading').style.color = "green"
    document.querySelector('#yoda').classList.toggle('hidden')
    document.querySelector('#light').classList.add('hidden')
    // document.querySelector('body').classList.add('background-img')
}


