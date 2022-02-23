module.exports = (app)=>{
    app.get("/contato",(req,res)=>{
        res.render('contato.ejs')
    })


 //receber os dados do formulário contato

 app.post('/contato',(req,res)=>{

var dados = req.body

//res.send(dados)
res.render('resultado.ejs',{dados:dados})

 })

}