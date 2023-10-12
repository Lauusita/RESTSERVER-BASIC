
const express = require('express');
const cors = require('cors')
const port = process.env.PORT;

class Server{ 

    constructor(){ 
        this.app = express();
        this.port = process.env.PORT; 
        this.usuarioPath = '/api/user'
        
        // MIDDLEWARES
        this.middlewares()
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        // el use se usa especialmente para el uso de middleware o para montar enrutadores

        // Directorio público
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json());


        this.app.use(express.static('public'))
        
    }

    routes(){
        
        this.app.use(this.usuarioPath, require('../routers/user'))

        this.app.use('*',(req, res)=>{

            res.status(404).json({
                msg: '404 | NOT FOUND'
            })

    
        })
    };

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando desde el puerto ${this.port}`)
        })
    }
}

module.exports = Server;