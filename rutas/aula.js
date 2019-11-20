var aula = (rutas, bd )=>
{
    rutas.get("/Aula/agregar", (req,res)=>
    {
        res.render("Paginas/Aula/Agregar");

    });

    rutas.get("/Aula/Ver",(res)=>
    {
        var callback = (aul)=>
        {
            var aulas = aul;
            var id = Object.keys(aulas);
            res.render("Paginas/Aula/Ver",
            {
                aulas,
                id
            });
        }
        bd.cruds.crudAula.leer(callback);
    });

    rutas.get("/Aula/modificar/:id", (req,res)=>
    {
        var id = req.params.id;
        var callback = (aul)=>
        {
            var aula = aul;

            res.render("Paginas/Aula/Modificar",
            {
                aula
            });
        }
        bd.cruds.crudAula.leerID(id.callback);
    });

    rutas.get("/Aula/Eliminar/:id", (req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudAula.eliminar(id,()=>
        {
            req.flash("Aula elimnada Exitosamente");
            res.redirect("/Aula/Ver");
        }); 
    });
}