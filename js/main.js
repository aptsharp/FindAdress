function ConsultaCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(Response){
            console.log(Response);
            document.getElementById("cepp").innerHTML = Response.cep;
            document.getElementById("uf").innerHTML = Response.uf;
            document.getElementById("localidade").innerHTML = Response.localidade;
            document.getElementById("bairro").innerHTML = Response.bairro;
        }
    })    
}