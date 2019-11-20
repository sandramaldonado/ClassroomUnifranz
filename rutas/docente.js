var docente = (rutas, bd)=>
{
    rutas.get("/Docente/agregar", (req,res)=>
    {
        res.render("Paginas/Docente/Agregar");
    });

    rutas.get("/Docente/Ver",(req, res)=>
    {
        var callback = (doc)=>
        {
            var docentes = doc;
            var id = Object.keys(docentes);
            res.render("Paginas/Docente/Ver",
            {
                docentes,
                id
            });
        }
        bd.cruds.crudDocente.leer(callback);
    });

    rutas.get("/Docente/AsignarMateria/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudMateria.leer((materia)=>
        {
            var materias = materia;
            bd.crudDocente.leerMaterias(id,(docMaterias)=>
            {
                var nombre = "";
                if(docMaterias[0].length>0)
                {
                    nombre = docMaterias [0][0].nombre_docente;
                }
                docMaterias = docMaterias;

                res.render("Paginas/Docente/AsignarMateria",
                {
                    id_docente:id,
                    docMaterias,
                    materias,
                    nombre
                }
                );
            }
            );
        }
        );
    }
    );


    rutas.get("/Docente/Rubricas/:id",(req,res)=>
    {
        bd.cruds.crudRubrica.leer((ru)=>
        {
            var rubricas = ru;
            var id= req.params.id;
            var callback = (doc)=>
            {
                var docente = doc;
                res.render("Paginas/Docente/Rubrica",
                {
                    docente,
                    rubricas

                });
            }
            bd.cruds.crudDocente.leerID(id,callback);
        });
    });

    rutas.get("/Docente/Eliminar/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudDocente.eliminar(id,()=>
        {
            req.flash("Docente eliminado Exitosamente");
            res.redirect("/Docente/Ver");
        });
        
    });

    rutas.get("/Docente/Modificar/:id",(req,res)=>
    {
        bd.cruds.crudRubrica.leer((rub)=>
        {
            var rubricas = rub;
            var id = req.param.id;
            var callback =(doc)=>
            {
                var docente = doc[0][0];
                res.render("Paginas/Docente/Rubrica",
                {
                    docente,
                    rubri : rubricas,
                }
                );
                bd.cruds.crudDocente.leerID(id,callback);
            }
        }
        );
    }
    );

    
}