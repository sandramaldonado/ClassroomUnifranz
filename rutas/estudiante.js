var estudiante = (rutas,bd,ver)=>
{
    rutas.get("/Estudiante/agregar", (req,res)=>
    {
        res.render("Paginas/Estudiante/Agregar");
    });

    rutas.get("/Estudiante/Ver",(req, res)=>
    {
        var callback = (estu)=> 
        {
            var estudiantes = estu[0];
            var id = Object.keys(estudiantes);
            res.render("Paginas/Estudiante/Ver",
            {
                estudiantes,
                id
            });
        }
        bd.cruds.crudEstudiante.leer(callback);
    });

    rutas.get("/Estudiante/AsignarMaterias/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudMateria.leer((materia)=>
        {
            var materias = materia[0];
            bd.crudEstudiante.leerMaterias(id,(estuMateria)=>
            {
                var nombre= "";
                if(estuMateria[0].length>0)
                {
                    nombre = estuMateria[0][0].nombre_estudiante;
                }
                estuMateria = estuMateria[0];
                res.render("Paginas/Estudiante/AsignarMaterias",
                {
                    id_estudiante:id,
                    estuMateria,
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


    rutas.get("/Estudiante/AsignarCarrera/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudCarrera.leer((carreras)=>
        {
            var carreras = carreras[0];
            bd.crudEstudiante.leerCarrera(id,(estuCarrera)=>
            {
                var nombre= "";
                if(estuCarrera[0].length>0)
                {
                    nombre = estuCarrera[0][0].nombre_estudiante;
                }
                estuCarrera = estuCarrera[0];
                res.render("Paginas/Estudiante/AsignarCarrera",
                {
                    id_estudiante:id,
                    estuCarrera,
                    carreras,
                    nombre
                }
                );
            }
            );
        }
        );
    }
    );


    rutas.get("/Estudiante/modificar/:id", (req,res)=>
    {
        var id = req.params.id;
        var callback = (estu)=> {
            var estudiante = estu[0][0];
            res.render("Paginas/Estudiante/Modificar",
            {
                estudiante
            }
            );
        }
        bd.cruds.crudEstudiante.leerID(id,callback);
    });

    rutas.get("/Estudiante/Eliminar/:id", (req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudEstudiante.eliminar(id,()=>
        {
            req.flash("Estudiante eliminado Exitosamente");
            res.redirect("/Estudiantes/Ver");
        });
    }
    );
}

module.exports = estudiante;