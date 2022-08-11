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
    
    if (nome.length != user || nome.length === 0 || division == 0 || ext == "") {
        alert('Você informou a quantidade de usuários errada, ou não informou nenhum usuário, ou não selecionou Division!')
    } else {
       
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
        userWebRTC.disabled = true
        loginWebRTC_id.disabled = true
    } else {
        userWebRTC.disabled = false
        loginWebRTC_id.disabled = false
    }
}

async function saveWebRTC(){
    var user = document.getElementById('user').value
    let login = document.getElementById('login_id').value.toLowerCase().split('\n')
    let string = `name,base,site,email,remoteAddress,hardwareId,keyLabel,lineAppearanceId,did,extension`
    var userWebRTC = document.getElementById('userWebRTC').value
    var select_site = document.getElementById('select_site').value
    var baseSettings = document.getElementById('baseSettings').value
    console.log(select_site)
    login = login.filter(i => i.trim())
    var hole = []
    var loginWebRTCArray = document.getElementById('loginWebRTC_id').value.split('\n')
    loginWebRTCArray = loginWebRTCArray.filter(i => i.trim())
    if(checkbox.checked === true && login.length != user){
        alert('Você informou a quantidade incorreta de usuários!')
        return 'Erro'
    }
    else if(checkbox.checked === true && login.length == user){
        i=0
        var loginWebRTC_four = []
        while(i<user){
            loginWebRTC_four[i] = login[i].substring(0, login[i].indexOf('@'))
            hole[i] = `\n${loginWebRTC_four[i]}-WebRTC,${baseSettings},${select_site},${login[i++]},,,,,,`
        }
    } else if(userWebRTC == loginWebRTCArray.length && userWebRTC !== 0){

        console.log(loginWebRTCArray)
        i=0
        var loginWebRTC = []
        while(i<userWebRTC){
            var result = loginWebRTCArray[i].indexOf('@') // procurar em cada indice do array do 'loginWebRTCArray' o caracter @
            if(result != -1){ // se o @ for encontrado
                loginWebRTC[i] = loginWebRTCArray[i].substring(0, loginWebRTCArray[i].indexOf('@'))
                hole[i] = `\n${loginWebRTC[i]}-WebRTC,${baseSettings},${select_site},${loginWebRTCArray[i]},,,,,,`
            } else { // se o @ for encontrado '== -1' 
                var inputEmail = prompt('Não foi encontrado o endereço de e-mail do usuário ' + loginWebRTCArray[i] + ', favor informá-lo:' + loginWebRTCArray[i])
                hole[i] = `\n${loginWebRTCArray[i]}-WebRTC,${baseSettings},${select_site},${inputEmail[i]},,,,,,`
            }
            i++
        }
        console.log(result)
        console.log(login)
        console.log(loginWebRTC)// after substring
        console.log(hole)
    } else{
        alert('Você informou a quantidade errada de usuários!')
        return
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