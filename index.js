async function clicked() {
    // Numeros de usuarios
    var user = document.getElementById('user').value
    console.log(Number.parseInt(user))

    // Extension
    let ext = document.querySelector('.extension').value
    let qtdExt = (Number.parseInt(ext)) + Number(user)
    console.log(Number.parseInt(ext))
    e = ext

    // email manager
    let emailManager = document.getElementById('emailManager').value.toLowerCase()

    // location
    let location = document.getElementById('location').value

    //for(e == ext; e < qtdExt; e++) {
        //    console.log(e)
        //}
        // Input nomes

        // Names for each var
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
//let me = document.getElementById('me')
//let solve = document.querySelector('h1')
const four = document.querySelector('#four')
//const p = document.getElementById('pa')
back.style.visibility = 'hidden'

// cronometro para não sumir o #card no 'double click'
//i=0
//var e=0
//if(four.clicked === true){
//    
//}

four.addEventListener('click', ()=>{
    back.style.visibility = 'visible'
    //solve.style.fontSize = '70px'
    //solve.style.textShadow = '7px 7px 4px rgba(0, 0, 0, 0.644)'
    //four.style.fontSize = '80px'
    //four.style.textShadow = '7px 7px 4px rgba(0, 0, 0, 0.644)'
    //me.style.fontSize = '70px'
    //me.style.textShadow = '7px 7px 4px rgba(0, 0, 0, 0.644)'
    card.classList.toggle('flip')
    //front.style.visibility = 'hidden'
    //front.style.transition = '.9s'
    //body.style.paddingBottom = '100%'
    //body.style.transition = '1.5s'
    
    //back.style.opacity = '0'
    //back.style.transition = '.6s'
    //back.style.zIndex = '-1'
    //back.style.transition = '2s'
})

const quatro = document.getElementById('quatro')
quatro.addEventListener('click', ()=>{
    card.classList.toggle('flip')
    //quatro.removeEventListener('click')
    //back.style.visibility = 'hidden'
    //back.style.transition = '1s'
    //front.style.visibility = 'visible'
    //front.style.transition = '.9s'
})


const checkbox = document.querySelector('#checkbox')
var userWebRTC = document.getElementById('userWebRTC')
var nameWebRTC_id = document.getElementById('nameWebRTC_id') //.value.split('\n')
var loginWebRTC_id = document.getElementById('loginWebRTC_id') //.value.split('\n')




function viewcheckbox(){
    if(checkbox.checked === true){
        userWebRTC.disabled = true
        loginWebRTC_id.disabled = true
        nameWebRTC_id.disabled = true
    } else {
        userWebRTC.disabled = false
        loginWebRTC_id.disabled = false
        nameWebRTC_id.disabled = false
    }
}
async function saveWebRTC(){
    let nome = document.querySelector('#name_id').value.toUpperCase().split('\n')
    let login = document.getElementById('login_id').value.toLowerCase().split('\n')
    var user = document.getElementById('user').value
    let string = `name,base,site,email,remoteAddress,hardwareId,keyLabel,lineAppearanceId,did,extension`
    var userWebRTC = document.getElementById('userWebRTC').value
    var select_site = document.getElementById('select_site').value
    var baseSettings = document.getElementById('baseSettings').value
    console.log(select_site)
    var hole = []
    if(checkbox.checked === true){
        i=0
        while(i<user){
            login[i] = login[i].substring(0, login[i].indexOf('@'))
            hole[i] = `\n${login[i]}-WebRTC,${baseSettings},${select_site},${nome[i++]},,,,,,`
        }
    } else {
        var nameWebRTC_id = document.getElementById('nameWebRTC_id').value.split('\n')
        var loginWebRTCArray = document.getElementById('loginWebRTC_id').value.split('\n')
        console.log(loginWebRTCArray)
        i=0
        var loginWebRTC = []
        while(i<Number.parseInt(userWebRTC)){
            loginWebRTC[i] = loginWebRTCArray[i].substring(0, loginWebRTCArray[i].indexOf('@'))
            hole[i] = `\n${loginWebRTC[i]}-WebRTC,${baseSettings},${select_site},${nameWebRTC_id[i++]},,,,,,`
        }
        console.log(login)
        console.log(loginWebRTC)// after substring
        console.log(hole)
        //while(i<userWebRTC){
        //    hole[i] = `Unique_Phone_Name,Existing_Phone_Base,Existing_Site_Name,Valid_Email_Address,,,,,,`
        //}
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
