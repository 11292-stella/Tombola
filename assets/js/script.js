const problemibot = function (e) {}

const creazioneCella = function (numbcell) {
  const tabellone = document.getElementById("tabellone")
  for (let i = 0; i < numbcell; i++) {
    const cella = document.createElement("div")
    cella.classList.add("celle")
    cella.innerText = ""

    tabellone.appendChild(cella)
  }
}

const generanumb = function (e) {
  e.preventDefault()
  const celle1 = document.querySelectorAll(".celle")
  const numerocas = Math.floor(Math.random() * 26 + 1)
  let cellaFree = null
  for (let i = 0; i < celle1.length; i++) {
    if (cellaFree === null && celle1[i].innerText === "") {
      cellaFree = celle1[i]
    }
  }
  if (cellaFree) {
    cellaFree.innerText = numerocas
  } else {
    return "celle piene"
  }
}

const reset = function (e) {
  e.preventDefault()
  const celle1 = document.querySelectorAll(".celle")
  for (let i = 0; i < celle1.length; i++) {
    celle1[i].innerText = ""
  }
}
creazioneCella(26)
document.getElementById("generaNumb").addEventListener("click", generanumb)
document.getElementById("resetTabellone").addEventListener("click", reset)
