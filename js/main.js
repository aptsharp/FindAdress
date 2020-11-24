function ConsultaCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(Response){
            console.log(Response);
            $("#logradouro").html(Response.logradouro);
            $("#bairro").html(Response.bairro);
            $("#localidade").html(Response.localidade);
            $("#uf").html(Response.uf);
            $(".ccep").show();
        }
    })    
}
//para esconder os resultados null
$(function(){
    $(".ccep").hide();
});