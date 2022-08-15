async function clicked() {
    // Numeros de usuarios
    var user = document.getElementById('user').value
    console.log(Number.parseInt(user))

    // Extension
    let ext = document.querySelector('.extension').value
    console.log(Number.parseInt(ext))
    e = ext

    // email manager
    let emailManager = document.getElementById('emailManager').value.toLowerCase()
    // location
    let location = document.getElementById('location').value

    let nome = document.querySelector('#name_id').value.toUpperCase().split('\n')
    console.log(nome[1])
    console.log(nome)

    nome = nome.filter(i => i.trim())
    console.log(nome)

    let login = document.getElementById('login_id').value.toLowerCase().split('\n')
    login = login.filter(z => z.trim())
    console.log(login)

    i=0
    var z=0
    var hole = []
    let string = `"name","email","phone_work","extension","title","department","email_manager","location_work","roles_divisions","queues","division","skills","hire_date"`
    let division = document.getElementById('division').value
    
    if(user == 0){
        alert('Você não informou a quantidade de usuários!')
    } else if(ext == 0){
        alert('Você não informou a extension!')
    } else if(division == 0){
        alert('Você não selecionou alguma divisão!')
    } else if(nome.length != login.length){
        alert('A quantidade de nomes e e-mails estão diferentes!')
    } else if(nome.length != user){
        alert('Você informou a quantidade errada de usuários!')
    }
    else {
       
        if (division == 1) {
            console.log('1')
            while(i<user){
                hole[i] = `\n"${nome[i++]}","${login[z++]}","","${e++}","ATENDENTE","SUPV RELAC COM CLIENTES I","${emailManager}","${location}","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""`
            }
        } else if (division == 2) {
            console.log('2')
            while(i<user){
                hole[i] = `\n"${nome[i++]}","${login[z++]}","","${e++}","PRESTADOR","COORD GAO","${emailManager}","${location}","employee: [GAO], User: [GAO; Home]","","GAO","",""`
            }    
        } else if (division == 3) {
            console.log('3')
            while(i<user){
                hole[i] = `\n"${nome[i++]}","${login[z++]}","","${e++}","ANL OUVIDORIA JR","GER OUVIDORIA","${emailManager}","${location}","employee: [Contact Center; Ouvidoria], Communicate - User: [Contact Center; Ouvidoria], Outbound Agent: [Contact Center; Ouvidoria], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Ouvidoria]","","Ouvidoria","",""`
            }
        } else if(division == 4){
            console.log('4')
            while(i<user){
                hole[i] = `\n"${nome[i++]}","${login[z++]}","","${e++}","PRESTADOR","GER OPERACOES ASSIST E BENEFICIOS","${emailManager}","${location}","employee: [Tempo Assistência], User: [Home; Tempo Assistência]","","Tempo Assistência","",""`
            } 
        } else {
            console.log('5')
            while(i<user){
                hole[i] = `\n"${nome[i++]}","${login[z++]}","","${e++}","PRESTADOR","","${emailManager}","${location}","employee: [Teste], Architect - Simple Access: [Teste]", , Teste, , `
            }
        } 
        var myBlob = new Blob(
            [string, hole.join("")],
            {type: "text/plain"}
            )
            
            // File Handler $ STREAM
            const fileHandle = await window.showSaveFilePicker()
            const fileStream = await fileHandle.createWritable()
            
            // SAVE FILE
            await fileStream.write(myBlob)
            await fileStream.close()
    }
}

let body = document.querySelector('body')
const back = document.getElementById('back')
const front = document.getElementById('front')
const card = document.getElementById('card')
const four = document.querySelector('#four')
back.style.visibility = 'hidden'

function WebRTC(){
    back.style.visibility = 'visible'
    card.classList.toggle('flip')
}

four.addEventListener('click', ()=>{
    back.style.visibility = 'visible'
    card.classList.toggle('flip')
})

const quatro = document.getElementById('quatro')
quatro.addEventListener('click', ()=>{
    card.classList.toggle('flip')
})

const checkbox = document.querySelector('#checkbox')
var userWebRTC = document.getElementById('userWebRTC')
var loginWebRTC_id = document.getElementById('loginWebRTC_id')

function viewcheckbox(){
    if(checkbox.checked === true){
        loginWebRTC_id.disabled = true
    } else {
        loginWebRTC_id.disabled = false
    }
}

async function saveWebRTC(){
    var user = document.getElementById('user').value
    let login = document.getElementById('login_id').value.toLowerCase().split('\n')
    let string = `name,base,site,email,remoteAddress,hardwareId,keyLabel,lineAppearanceId,did,extension`
    var select_site = document.getElementById('select_site').value
    var baseSettings = document.getElementById('baseSettings').value
    login = login.filter(i => i.trim())
    var hole = []
    var loginWebRTCArray = document.getElementById('loginWebRTC_id').value.toLowerCase().split('\n')
    loginWebRTCArray = loginWebRTCArray.filter(i => i.trim())
    let dominio = document.getElementById('dominio').value
    
    if((login.length == 0 || user == 0) && checkbox.checked === true){
        alert('Você não informou a quantidade de usuários!')
        return
    }
    else if(checkbox.checked === true && login.length != user){
        alert('Você informou a quantidade incorreta de usuários!')
        return
    } else if(checkbox.checked === true && login.length == user){
        i=0
        var loginWebRTC_four = []
        while(i<user){
            result = login[i].indexOf('@')
            if(result != -1){
                loginWebRTC_four[i] = login[i].substring(0, login[i].indexOf('@'))
                hole[i] = `\n${loginWebRTC_four[i]}-WebRTC,${baseSettings},${select_site},${login[i]},,,,,,`
            } else{
                hole[i] = `\n${login[i]}-WebRTC,${baseSettings},${select_site},${login[i]}${dominio},,,,,,`
            }
            i++
        }
    } else if(loginWebRTCArray.length == 0){
        alert('Você informou a quantidade errada de usuários!')
        return
    } else{
        console.log(loginWebRTCArray)
        i=0
        var loginWebRTC = []
        while(i<loginWebRTCArray.length){
            result = loginWebRTCArray[i].indexOf('@') // procurar em cada indice do array do 'loginWebRTCArray' o caracter @
            if(result != -1){ // se o @ for encontrado
                loginWebRTC[i] = loginWebRTCArray[i].substring(0, loginWebRTCArray[i].indexOf('@'))
                hole[i] = `\n${loginWebRTC[i]}-WebRTC,${baseSettings},${select_site},${loginWebRTCArray[i]},,,,,,`
            } else { // se o @ não for encontrado '== -1' 
                hole[i] = `\n${loginWebRTCArray[i]}-WebRTC,${baseSettings},${select_site},${loginWebRTCArray[i]}${dominio},,,,,,`
            }
            i++
        }
        console.log(result)
        console.log(login)
        console.log(loginWebRTC)// after substring
        console.log(hole)
    }

    var myBlob = new Blob(
        [string, hole.join("")],
        {type: "text/plain"}
        )
        
        // File Handler $ STREAM
        const fileHandle = await window.showSaveFilePicker()
        const fileStream = await fileHandle.createWritable()
        
        // SAVE FILE
        await fileStream.write(myBlob)
        await fileStream.close()
}