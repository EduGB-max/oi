module.exports = (app)=>{
    app.get('/localizacao',(req,res)=>{
        res.render('pagina4.ejs')
    })

    //atender a requisição /mapa exibindo osite maps.google.com
    app.get('/mapa',(req,res)=>{
        res.redirect('http://maps.google.com')
    })
}
