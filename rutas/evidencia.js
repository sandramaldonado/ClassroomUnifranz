var evidencia = (rutas, bd)=>
{
    rutas.get("/Evidencia/agregar", (req,res)=>
    {
        res.render("Paginas/Evidencia/Agregar");
    });

    rutas.get("/Evidencia/Ver",(req, res)=>
    {
        var callback = (evi)=>
        {
            var evidencia = evi;
            var id = Object.keys(evidencia);
            res.render("Paginas/Evidencia/Ver",
            {
                evidencia,
                id
            });
        }
        bd.cruds.crudEvidencia.leer(callback);
    });

    rutas.get("/Evidencia/AsignarCurso/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudCurso.leer((curso)=>
        {
            var cursos = curso;
            bd.crudEvidencia.leerCurso(id,(eviCurso)=>
            {
                var nombre = "";
                if(eviCurso[0].length>0)
                {
                    nombre = eviCurso [0][0].nombre_evidencia;
                }
                eviCurso = eviCurso;

                res.render("Paginas/Evidencia/AsignarCurso",
                {
                    id_evidencia:id,
                    eviCurso,
                    cursos,
                    nombre
                }
                );
            }
            );
        }
        );
    }
    );


    rutas.get("/Evidencia/Entregado/:id",(req,res)=>
    {
        bd.cruds.crudEntregado.leer((en)=>
        {
            var entregado = en;
            var id= req.params.id;
            var callback = (en)=>
            {
                var evidencia = evi[0];
                res.render("Paginas/Evidencia/Entregado",
                {
                    evidencia,
                    entregado

                });
            }
            bd.cruds.crudEvidencia.leerID(id,callback);
        });
    });

    rutas.get("/Evidencia/Eliminar/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudEvidencia.eliminar(id,()=>
        {
            req.flash("Evidencia eliminado Exitosamente");
            res.redirect("/Evidencia/Ver");
        });
        
    });

    rutas.get("/Evidencia/Modificar/:id",(req,res)=>
    {
        bd.cruds.crudEntregado.leer((en)=>
        {
            var entregado = en;
            var id = req.param.id;
            var callback =(evi)=>
            {
                var evidencia = evi[0][0];
                res.render("Paginas/Evidencia/Entregado",
                {
                    evidencia,
                    entr : entregado,
                }
                );
                bd.cruds.crudEvidencia.leerID(id,callback);
            }
        }
        );
    }
    );

    
}