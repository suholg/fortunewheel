$("button").click(function(){
    var obj = { name: $("input").val()};
    var myJSON = JSON.stringify(obj);
    $.ajax({
      url: "http://192.168.1.20:3000/name", //wymagane, gdzie się łączymy
      type: "post", //typ połączenia, domyślnie get
      contentType: 'application/json', //gdy wysyłamy dane czasami chcemy ustawić ich typ
      dataType: 'json', //typ danych jakich oczekujemy w odpowiedzi
      data: myJSON,
      success: function(res){console.log(res);}
  });
})
