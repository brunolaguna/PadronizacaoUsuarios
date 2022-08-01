function clicked() {
    let division = document.getElementById('division').value
    // SELECT
    if (division == 0) {
        console.log('0')
    } else if (division == 1) {
        console.log('1')    
    } else if (division == 2) {
        console.log('2')
    } else {
        console.log('3')
    }
    // Numeros usuarios
    let user = document.getElementById('user').value
    console.log(user)
    // Extension
    let ext = document.querySelector('.extension').value
    console.log(ext)
    // Input nomes e logins
    let nl = document.querySelector('textarea').value.toUpperCase()
    console.log(nl)
}