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

        
        // SELECT
    
        //var l = `"${nome[i++]}","jbrocanell@brasilseg.com.br","","46074","ATENDENTE","SUPV RELAC COM CLIENTES I","tnelima@brasilseg.com.br","SP","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""\n`
        
        
        // criando um blob object