const header = document.getElementById('menu')
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 5) {
        header.classList.add('blurGray')
    } else {
        header.classList.remove('blurGray')
    }
})


//Identificador de tema para colocar o favicon
const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
if (isDarkTheme) {
    const favIco = window.document.getElementById("favicon")
    favIco.setAttribute('href', 'imgs/logoHamdanAdvogadosFundoTransparente.png')
    console.log(isDarkTheme)
} else {
    const favIco = window.document.getElementById("favicon")
    favIco.setAttribute('href', 'imgs/logoHamdanAdvogadosFundoTransparentePreto.png')
    console.log(isDarkTheme)
}