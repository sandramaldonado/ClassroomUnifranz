var materia = (rutas,bd, ver)=>
{
    rutas.get("/Materia/agregar",(req,res)=>
    {
        res.render("Paginas/Materia/Agregar");
    });

    rutas.get("/Materia/Ver", (req, res)=>
    {
        var callback = (mat)=>
        {
            var materias = mat[0];
            var id = Object.keys(materias);
            res.render("Paginas/Materia/Ver",
            {
                materias,
                id
            });
    
        }
        bd.cruds.crudMateria.leer(callback);
    });
    rutas.get("/Materia/AsignarCarrera/:id", (req,res)=>
    {
        var materias = materias[0];
        bd.crudMateria.leerCarrera(id,(matCarrera)=>
        {
            var titulo = "";
            if(matCarrera[0].length>0)
            {
                titulo = matCarrera [0][0].titulo_materia;
            }
            matCarrera = matCarrera[0];
            res.render("Paginas/Materia/AsignarCarrera",
            {
                id_materia:id,
                matCarrera,
                carreras,
                titulo
            });
        });
    });

    rutas.get("/Materia/modificar/:id", (req, res)=>
    {
        var id = req.params.id;
        var callback = (mat)=>
        {
            var materia = mat[0][0];
            res.render("Paginas/Materia/Modificar",
            {
                materia
            });
        }
        bd.cruds.crudMateria.leerId(id,callback);
    });

    rutas.get("/Materia/eliminar/:id",(req, res)=>
    {
        var id = req.params.id;
        bd.crudMateria.eliminar(id,()=>
        {
            req.flash("Materia eliminada Exitosamente");
            res.redirect("/Materia/Ver");
        });
    });
}