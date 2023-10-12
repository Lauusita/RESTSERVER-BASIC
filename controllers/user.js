const {response, request}= require('express');


const userGet = (req = request, res = response)=>{

    const {q, nombre='No name', edad} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        edad
    })
}

const userPost = (req= request, res= response)=>{

    const {nombre, edad} = req.body;
    
    res.json({
        
        msg: 'post API - controlador',
        nombre,
        edad
    })
}

const userPut = (req= request, res= response)=>{

    const id = req.params.id
    res.json({
        msg: 'put API - controlador',
        id
    })
}
const userDelete = (req= request, res= response)=>{

    res.json({
        msg: 'delete API - controlador'
    })
}

const userPatch = (req= request, res= response)=>{

    res.json({
        msg: 'patch API - controlador'
    })
}

module.exports= {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch

}