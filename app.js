const mongoose = require('mongoose');

const url = "mongodb+srv://DavHD:PhmFRjvYHmaSB4P@misiontic.d2mqp.mongodb.net/barbershop?retryWrites=true&w=majority";

mongoose.connect(url,{ 
   
})
.then( ()=> console.log('Conectado a mongo'))
.catch( (e)=> console.log('error en la conexion es' + e))

const PersonasSchema = mongoose.Schema({
    Documento:Number,
    Nickname:String,
    Sexo:String,
    apellidos:String,
    nombres:String,
},{versionKey:false})

const PersonasModel = mongoose.model('Personas',PersonasSchema)

const mostrar = async ()=>{
    const RegistrosTotales = await PersonasModel.find();
    console.log(RegistrosTotales)
}
const crear = async ()=>{
    const personas = new PersonasModel({
        Documento:'1067968154853',
        Nickname:'joselo',
        Sexo:'mujer',
        apellidos:'rastacuando',
        nombres:'Petrona'
    })
    const resultados = await personas.save();
    console.log(resultados)
}
const actualizar = async (Nick)=>{
    const persona = await PersonasModel.updateOne({Nickname:Nick},
    {
        $set:{
            nombres:'juan mecanico',
            apellidos:'petronita'
        }
    })
}
const eliminar = async (Nick)=>{
    const persona = await PersonasModel.deleteOne({Nickname:Nick})
    console.log(persona);
}
//mostrar()
//crear()
//actualizar('joselo')
//eliminar('pedrito')