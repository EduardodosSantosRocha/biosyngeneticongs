let teste = document.getElementById('validar');
const enviar = document.getElementById('enviar');
let editar = document.getElementById('editar');
enviar.disabled = true;
const infos = document.getElementById('infos');
infos.style.visibility = "hidden";


function limparspan(spanCPF, spanNome, spanTelefone, spanApelido, spanradio) {
    spanNome.textContent = '';
    spanCPF.textContent = '';
    spanTelefone.textContent = '';
    spanApelido.textContent = '';
    spanradio.textContent = '';
};

function disability(Name, CPF, Email, Telefone, Apelido, end1,end2, end3,textarea, checkbox_names){
         Name.disabled = true;
         CPF.disabled = true;
         Email.disabled = true;
         Telefone.disabled = true;
         Apelido.disabled = true;
         end1.disabled = true;
         end2.disabled = true;
         end3.disabled = true;
         textarea.disabled =true;
         checkbox_names.forEach(Cnames => {
            Cnames.disabled = true;
        });
}

function bordagreen(Name, CPF, Email, Telefone, Apelido){
         Name.style.borderColor = 'green';
         CPF.style.borderColor = 'green';
         Email.style.borderColor = 'green';
         Telefone.style.borderColor = 'green';
         Apelido.style.borderColor = 'green';
}

function validarEmail(){
    const Email = document.querySelector('#Email');
    const spanEmail = Email.nextElementSibling;
    
    if(!Email.checkValidity()){
      spanEmail.innerHTML = "Email invalido adicione o @ e com"; 
      Email.style.borderColor = 'red';
      return true; 
    }
    
    else{
        spanEmail.innerHTML = ''; 
        return false;
    }    
}




teste.addEventListener('click', (e)=>{
    validaForm(e);
});





function validaForm (e){
    let valueradio;  
    let formValido = true;
    const Name = document.getElementById('Nome');
    const CPF = document.getElementById('CPF');
    const Email = document.getElementById('Email');
    const Telefone = document.getElementById('Telefone');
    const Apelido = document.getElementById('Apelido');
    const checkbox_names = document.getElementsByName('tips-check-A');
    const Caixatexto = document.getElementById('caixatexto');
    
    const name_p= Name.value;
    const cpf_p= CPF.value;
    const email_p = Email.value;
    const telefone_p = Telefone.value;
    const apelido_p = Apelido.value;
    const text_p = Caixatexto.value;




    
    const spanCPF = CPF.nextElementSibling;
    const spanNome = Name.nextElementSibling;
    const spanTelefone = Telefone.nextElementSibling;
    const spanApelido = Apelido.nextElementSibling;
    const spanradio = document.getElementById('radio');;
   
    const pelido = apelido_p.split(' ');
    
    
    
    const end1 = document.getElementById("Funcionario");
    const end2 = document.getElementById("Visitante");
    const end3 = document.getElementById("Outro");
    const checkboxtext = document.getElementById("caixatexto");
    

    
     if(validarEmail() === true){
        formValido = false;
    }
    
    
    if(end1.checked === false && end2.checked == false && end3.checked == false){    
        spanradio.textContent = 'Escolha um radio';
        formValido = false;
     }
    
    if(end1.checked === true){
      valueradio = end1.value;
    }

    if(end2.checked === true){
       valueradio = end2.value;
    }


    if(end3.checked === true){
        valueradio = end3.value;
    }

    
    if(name_p ===""){
        spanNome.textContent = 'o nome deve ser preenchido';
        Name.style.borderColor = 'red';
        formValido = false;
    }

   


    if(cpf_p === "" || cpf_p.length !=11) {
        spanCPF.textContent = 'o Cpf deve ser preenchido e tamanho =11';
        CPF.style.borderColor = 'red';  
        formValido = false;
    }

 
    if(telefone_p === "" || telefone_p.length >14) {
        spanTelefone.textContent = 'O Telefone deve ser preenchido com até 14 digitos(Padrão Brasileiro)';
        Telefone.style.borderColor = 'red';  
        formValido = false;
    }

    if(pelido.length >1) {
        spanApelido.textContent = 'Apenas o primeiro apelido(ex: dudu)';
        Apelido.style.borderColor = 'red';  
        formValido = false;
    }



    if(!formValido){
        e.preventDefault();
    }

    else{
        e.preventDefault();
        
        //caixa de infos geradas
        infos.style.visibility = "visible";
        
        const h4_nome = document.createElement('h4');
        h4_nome.textContent = "Nome: "+ name_p;
        infos.appendChild(h4_nome);
    
        const h4_cpf = document.createElement('h4');
        h4_cpf.textContent = "CPF: "+ cpf_p;
        infos.appendChild(h4_cpf);
    
        const h4_Email = document.createElement('h4');
        h4_Email.textContent = "Email: "+ email_p;
        infos.appendChild(h4_Email);
    
        const h4_Telefone = document.createElement('h4');
        h4_Telefone.textContent = "Telefone: "+ telefone_p;
        infos.appendChild(h4_Telefone);
    
        const h4_Apelido = document.createElement('h4');
        h4_Apelido.textContent = "Apelido: "+ apelido_p;
        infos.appendChild(h4_Apelido);


        const h4_radio = document.createElement('h4');
        h4_radio.textContent = "Escolha: "+ valueradio;
        infos.appendChild(h4_radio);


        

        checkbox_names.forEach(Cnames => {
            if(Cnames.checked){
                const h4_check = document.createElement('h4');
                const infos_check = document.getElementById('infos');
                h4_check.textContent = "Escolha: "+ Cnames.value;
                infos_check.appendChild(h4_check);
            }
        });

        


        const h4_textarea = document.createElement('h4');
        h4_textarea.textContent = "Comentario: "+text_p;
        infos.appendChild(h4_textarea);


        //caixa de infos geradas
        



         disability(Name, CPF, Email, Telefone, Apelido, end1, end2, end3,checkboxtext, checkbox_names);
         limparspan(spanCPF,spanNome, spanTelefone ,spanApelido, spanradio);
         bordagreen(Name, CPF, Email, Telefone, Apelido);
         
         
         enviar.disabled = false; //ativa o botão de enviar 



         editar.addEventListener('click',()=>{
            infos.style.visibility = "hidden";
            infos.innerHTML = "";
            Name.disabled = false;
            CPF.disabled = false;
            Email.disabled = false;
            Telefone.disabled = false;
            Apelido.disabled = false;
            end1.disabled = false;
            end2.disabled = false;
            end3.disabled = false;
            checkboxtext.disabled = false;
            enviar.disabled = true;
            checkbox_names.forEach(Cnames => {
                Cnames.disabled = false;
            });
            
        });

    }
    



    
    

}