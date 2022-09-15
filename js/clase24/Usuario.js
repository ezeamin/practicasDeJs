export class Usuario{
    constructor(nombre,apellido,email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estaActivo = true;
        this.localidad = "Tucuman"
    }

    loguear(){
        console.log(`El usuario ${this.nombre} ha sido logueado`)
    }

    // get nombre(){
    //     return this.nombre;
    // }

    // set nombre(nombreAGuardar){
    //     this.nombre = nombreAGuardar;
    // }
}