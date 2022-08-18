// User creation
async function clicked(){ //This function must be asynchronous, otherwise the file will not save the data.

    // Extension
    let e = document.querySelector('.extension').value
    console.log(e)

    const emailManager = document.getElementById('emailManager').value.toLowerCase()
    console.log(emailManager)
    const location = document.getElementById('location').value
    console.log(location)    
    const division = document.getElementById('division').value
    console.log(division)
    dominio_four = document.getElementById('dominio_four').value
    console.log(dominio_four)

    let nome = document.querySelector('#name_id').value.toUpperCase().split('\n')
    //Clear the indexes of array name
    nome = nome.filter(i => i.trim())
    console.log(nome)

    let login = document.getElementById('login_id').value.toLowerCase().split('\n')
    login = login.filter(z => z.trim())
    console.log(login)
    
    // Declaration of variables.
    i=0
    var hole = []
    const string = `"name","email","phone_work","extension","title","department","email_manager","location_work","roles_divisions","queues","division","skills","hire_date"`
    
    if(division == 0){
        alert('Você não selecionou alguma division!')
        return
    } else if(nome.length != login.length){
        alert('A quantidade de nomes e e-mails estão diferentes!')
        return
    } 
      else if(e == 0){
        const continuar = confirm('Você não informou a extension!\nClique em "OK" para continuar, ou "Cancelar" para sair!\nSe você continuar, os perfis irão ficar sem extension!')
        console.log(continuar)
        if(continuar === true && (nome.length && login.length) < 1){
            alert('Você não adicionou dados nos campos, "Nomes" e "E-mails"!')
            nomeStyle = document.getElementById('name_id')
            loginStyle = document.getElementById('login_id')
            nomeStyle.style.borderColor = 'red'
            loginStyle.style.borderColor = 'red'
            return
        }
        else if(continuar === true && (nome.length && login.length) >= 1){
            nomeStyle.style.borderColor = 'black'
            loginStyle.style.borderColor = 'black'
            if (division == 1) {
                console.log('1')
                while(i<login.length){
                    result = login[i].indexOf('@')
                    if(result == -1){
                        hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","","ATENDENTE","SUPV RELAC COM CLIENTES I","${emailManager}","${location}","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""`
                    } else {
                        hole[i] = `\n"${nome[i]}","${login[i++]}","","","ATENDENTE","SUPV RELAC COM CLIENTES I","${emailManager}","${location}","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""`
                    }
                }
            } else if (division == 2) {
                console.log('2')
                while(i<login.length){
                    result = login[i].indexOf('@')
                    if(result == -1){
                        hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","","PRESTADOR","COORD GAO","${emailManager}","${location}","employee: [GAO], User: [GAO; Home]","","GAO","",""`
                    } else{
                        hole[i] = `\n"${nome[i]}","${login[i++]}","","","PRESTADOR","COORD GAO","${emailManager}","${location}","employee: [GAO], User: [GAO; Home]","","GAO","",""`
                    }
                }    
            } else if (division == 3) {
                console.log('3')
                while(i<login.length){
                    result = login[i].indexOf('@')
                    if(result == -1){
                        hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","","ANL OUVIDORIA JR","GER OUVIDORIA","${emailManager}","${location}","employee: [Contact Center; Ouvidoria], Communicate - User: [Contact Center; Ouvidoria], Outbound Agent: [Contact Center; Ouvidoria], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Ouvidoria]","","Ouvidoria","",""`
                    } else{
                        hole[i] = `\n"${nome[i]}","${login[i++]}","","","ANL OUVIDORIA JR","GER OUVIDORIA","${emailManager}","${location}","employee: [Contact Center; Ouvidoria], Communicate - User: [Contact Center; Ouvidoria], Outbound Agent: [Contact Center; Ouvidoria], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Ouvidoria]","","Ouvidoria","",""`
                    }
                }
            } else if(division == 4){
                console.log('4')
                while(i<login.length){
                    result = login[i].indexOf('@')
                    if(result == -1){
                        hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","","PRESTADOR","GER OPERACOES ASSIST E BENEFICIOS","${emailManager}","${location}","employee: [Tempo Assistência], User: [Home; Tempo Assistência]","","Tempo Assistência","",""`
                    } else{
                        hole[i] = `\n"${nome[i]}","${login[i++]}","","","PRESTADOR","GER OPERACOES ASSIST E BENEFICIOS","${emailManager}","${location}","employee: [Tempo Assistência], User: [Home; Tempo Assistência]","","Tempo Assistência","",""`
                    }
                } 
            } else {
                console.log('5')
                while(i<login.length){
                    result = login[i].indexOf('@')
                    if(result == -1){
                        hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","","PRESTADOR","","${emailManager}","${location}","employee: [Teste], Architect - Simple Access: [Teste]", , Teste, , `
                    } else{
                        hole[i] = `\n"${nome[i]}","${login[i++]}","","","PRESTADOR","","${emailManager}","${location}","employee: [Teste], Architect - Simple Access: [Teste]", , Teste, , `
                    }
                }
            }
        } else{
            return
        }
    } else if(e !=0 && (nome.length && login.length) <= 0){
        nomeStyle = document.getElementById('name_id')
        loginStyle = document.getElementById('login_id')
        alert('Você não adicionou dados nos campos, "Nomes" e "E-mails"!')
        nomeStyle.style.borderColor = 'red'
        loginStyle.style.borderColor = 'red'
        return
    } 
    else {
        nomeStyle = document.getElementById('name_id')
        loginStyle = document.getElementById('login_id')
        nomeStyle.style.borderColor = 'black'
        loginStyle.style.borderColor = 'black'
        if (division == 1) {
            console.log('1')
            while(i<login.length){
                result = login[i].indexOf('@')
                if(result == -1){
                    hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","${e++}","ATENDENTE","SUPV RELAC COM CLIENTES I","${emailManager}","${location}","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""`
                } else{
                    hole[i] = `\n"${nome[i]}","${login[i++]}","","${e++}","ATENDENTE","SUPV RELAC COM CLIENTES I","${emailManager}","${location}","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""`
                }
            }
        } else if (division == 2) {
            console.log('2')
            while(i<login.length){
                result = login[i].indexOf('@')
                if(result == -1){
                    hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","${e++}","PRESTADOR","COORD GAO","${emailManager}","${location}","employee: [GAO], User: [GAO; Home]","","GAO","",""`
                } else{
                    hole[i] = `\n"${nome[i]}","${login[i++]}","","${e++}","PRESTADOR","COORD GAO","${emailManager}","${location}","employee: [GAO], User: [GAO; Home]","","GAO","",""`
                }
            }    
        } else if (division == 3) {
            console.log('3')
            while(i<login.length){
                result = login[i].indexOf('@')
                if(result == -1){
                    hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","${e++}","ANL OUVIDORIA JR","GER OUVIDORIA","${emailManager}","${location}","employee: [Contact Center; Ouvidoria], Communicate - User: [Contact Center; Ouvidoria], Outbound Agent: [Contact Center; Ouvidoria], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Ouvidoria]","","Ouvidoria","",""`
                } else{
                    hole[i] = `\n"${nome[i]}","${login[i++]}","","${e++}","ANL OUVIDORIA JR","GER OUVIDORIA","${emailManager}","${location}","employee: [Contact Center; Ouvidoria], Communicate - User: [Contact Center; Ouvidoria], Outbound Agent: [Contact Center; Ouvidoria], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Ouvidoria]","","Ouvidoria","",""`
                }
            }
        } else if(division == 4){
            console.log('4')
            while(i<login.length){
                result = login[i].indexOf('@')
                if(result == -1){
                    hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","${e++}","PRESTADOR","GER OPERACOES ASSIST E BENEFICIOS","${emailManager}","${location}","employee: [Tempo Assistência], User: [Home; Tempo Assistência]","","Tempo Assistência","",""`
                } else{
                    hole[i] = `\n"${nome[i]}","${login[i++]}","","${e++}","PRESTADOR","GER OPERACOES ASSIST E BENEFICIOS","${emailManager}","${location}","employee: [Tempo Assistência], User: [Home; Tempo Assistência]","","Tempo Assistência","",""`
                }
            } 
        } else {
            console.log('5')
            while(i<login.length){
                result = login[i].indexOf('@')
                if(result == -1){
                    hole[i] = `\n"${nome[i]}","${login[i++]}${dominio_four}","","${e++}","PRESTADOR","","${emailManager}","${location}","employee: [Teste], Architect - Simple Access: [Teste]", , Teste, , `
                } else{
                    hole[i] = `\n"${nome[i]}","${login[i++]}","","${e++}","PRESTADOR","","${emailManager}","${location}","employee: [Teste], Architect - Simple Access: [Teste]", , Teste, , `
                }
            }
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

// #Back variables
const back = document.getElementById('back')
const front = document.getElementById('front')
const card = document.getElementById('card')
const four = document.querySelector('#four')
const quatro = document.getElementById('quatro')

const checkbox = document.querySelector('#checkbox')
let userWebRTC = document.getElementById('userWebRTC')
let loginWebRTC_id = document.getElementById('loginWebRTC_id')

// Flip to the WebRTC, via the button
function WebRTC(){
    card.classList.toggle('flip')
}
// Flip to the WebRTC, via the h1 -> #four
four.addEventListener('click', ()=>{
    card.classList.toggle('flip')
})
// Flip to the WebRTC, via the h1 -> #quatro
quatro.addEventListener('click', ()=>{
    card.classList.toggle('flip')
})


function viewcheckbox(){
    if(checkbox.checked === true){
        loginWebRTC_id.disabled = true
        loginWebRTC_id.style.backgroundColor = 'rgb(182, 182, 182)'
    } else {
        loginWebRTC_id.disabled = false
        loginWebRTC_id.style.backgroundColor = 'white'
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