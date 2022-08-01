async function clicked() {
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
    // Numeros de usuarios
    let user = document.getElementById('user').value
    console.log(Number.parseInt(user))
    // Extension
    let ext = document.querySelector('.extension').value
    let qtdExt = (Number.parseInt(ext)) + Number(user)
    console.log(Number.parseInt(ext))
    i = ext
    for(i == ext; i < qtdExt; i++) {
        console.log(i)
    }
    // Input nomes
    let nome = document.querySelector('textarea').value.split('\n')
    console.log(nome[1])
    console.log(nome)
    nome = nome.filter(i => i.trim())
    console.log(nome)
    if (nome.length != user) {
        alert('Você colocou mais nomes na lista ou informou a quantidade de usuários errada!')
    }
    i=0
    while(i <= user){
    i++         
    var myBlob = new Blob(
            [`"${nome[i]}","jbrocanell@brasilseg.com.br","","46074","ATENDENTE","SUPV RELAC COM CLIENTES I","tnelima@brasilseg.com.br","SP","employee: [Contact Center], Communicate - User: [Contact Center], Outbound Agent: [Contact Center], Permissões Adicionais TLV Agile: [Broto; Contact Center; Default; GAO; Home; Mapfre; Núcleo Sinistro Multirrisco; Ouvidoria; Tempo Assistência; Tecnologia; Telesubscrição], User: [Contact Center; Home]","","Contact Center","",""\n`],
            {type: "text/plain"}
            )
    }
    // criando um blob object

    // File Handler $ STREAM
    const fileHandle = await window.showSaveFilePicker()
    const fileStream = await fileHandle.createWritable()

    // SAVE FILE
    await fileStream.write(myBlob)
    await fileStream.close()

    for(nome[i] == 0; nome[i] <= nome.length; nome[i]++){
        
    }
}