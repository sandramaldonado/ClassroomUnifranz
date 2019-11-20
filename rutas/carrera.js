var carrera = (rutas,bd,ver)=>
{
    rutas.get("/Carrera/Anadir", (req,res)=>
    {
        res.render("Paginas/Carrera/Agregar");
    }
    );

    rutas.get("/Carrera/Ver",(req,res)=>
    {
        var callback = (carr)=>
        {
            var carreras = carr [0];
            var id=Object.keys(carreras);
            res.render("Paginas/Carrera/Ver",
            {
                carrera,
                id
            });
        }
        bd.cruds.crudCarrera.leer(callback);
    });

    rutas.get("/Carrera/modificar/:id", (req,res)=>
    {
        var id = req.params.id;
        var callback = (carr)=>
        {
            var carrera = carr[0][0];
            res.render("Paginas/Carrera/Modificar",
            {
                carrera
            });
        }
        bd.cruds.crudCarrera.leerID(id,callback);
    });

    rutas.get("/Carrera/Eliminar/:id", (req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudCarrera.eliminar(id,()=>
        {
            req.flash("Carrera Eliminada Exitosamente");
            res.redirect("/Carrera/Ver");
        });
    });
}
module.exports = carrera;