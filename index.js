var database = firebase.database();
console.log(10)
var formacionAcademica = database.ref('infopersonal/formacionAcademica/');
formacionAcademica.on('value', function (snapshot) {
    var formacion = snapshot.val()
    cadena = ""
    for (var i in formacion) {
        var elem = formacion[i]
        cadena += "<li>  academia : " + elem.academia
        cadena += "duration: " + elem.desde + "_" + elem.hasta
        cadena += "<button class='editar' onclick='editarformacion( \"" + elem.id + "\" , \"" + elem.academia + "\")'  >editar</button>"
        cadena += "<button class='eliminar' onclick='eliminarformacion(\"" + elem.id + "\")' >eliminar </button>"

        cadena += "</li>"
    }
    $(".ARellenar").html(cadena)
})

$(".cambiaremail").click((lev) => {
    const texto=$(".buscar").val()
    var formAcad = database.ref('infopersonal/formacionAcademica/');
    formAcad.orderByChild('academia').equalTo(texto).once('value', function (snapshot) {
    var formacion = snapshot.val()
    cadena = ""
    for (var i in formacion) { 
        var elem = formacion[i]
        cadena += "<li>  academia : " + elem.academia
        cadena += "duration: " + elem.desde + "_" + elem.hasta
        cadena += "<button class='editar' onclick='editarformacion( \"" + elem.id + "\" , \"" + elem.academia + "\")'  >editar</button>"
        cadena += "<button class='eliminar' onclick='eliminarformacion(\"" + elem.id + "\")' >eliminar </button>"

        cadena += "</li>"
    }
    $(".ARellenar").html(cadena)
})
})

$(".crearAcademia").click((lev) => {

    const clave = database.ref('infopersonal/formacionAcademica/').push().key
    var data = {
        academia: $(".cAcademia").val(),
        desde: $(".cAdesde").val(),
        hasta: $(".cHasta").val(),
        id: clave
    }
    database.ref('infopersonal/formacionAcademica/' + data.id).set(data);
})
function eliminarformacion(id) {
    database.ref(`infopersonal/formacionAcademica/${id}`).remove()
}