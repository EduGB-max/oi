const { app } = require("../config/servidor")

module.exports = (app)=>{
    //atender a requisicao /portifolio com o conteúdo de portfolio.ejs
    app.get('/portifolio',(req,res)=>{
        res.render('portifolio.ejs')
    })
}


