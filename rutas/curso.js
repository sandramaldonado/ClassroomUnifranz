var curso = (rutas, bd)=>
{
    rutas.get("/Curso/agregar", (req,res)=>
    {
        res.render("Paginas/Curso/Agregar");
    });

    rutas.get("/Curso/Ver",(req, res)=>
    {
        var callback = (cur)=>
        {
            var cursos = cur;
            var id = Object.keys(cursos);
            res.render("Paginas/Curso/Ver",
            {
                cursos,
                id
            });
        }
        bd.cruds.crudCurso.leer(callback);
    });

    rutas.get("/Curso/AsignarMateria/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudMateria.leer((materia)=>
        {
            var materias = materia;
            bd.crudCurso.leerMaterias(id,(curMateria)=>
            {
                var nombre = "";
                if(curMateria[0].length>0)
                {
                    nombre = curMateria [0][0].nombre_curso;
                }
                curMateria = curMateria;

                res.render("Paginas/Curso/AsignarMateria",
                {
                    id_curso:id,
                    curMateria,
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

    rutas.get("/Curso/AsignarDocente/:id", (req, res)=>
    {
        var id = req.params.id;
        bd.cruds.crudDocente.leer((doc)=>
        {
            var docente = doc;
            bd.crudCurso.leerCurso(id,(curDocente)=>
            {
                var nombre="";
                if(curDocente[0].length>0)
                {
                    nombre = curDocente [0][0].nombre_docente;
                }
                curDocente = curDocente;

                res.render("Paginas/Curso/AsignarDocente",
                {
                    id_curso:id,
                    curDocente,
                    docente,
                    nombre
                });
            });
        });
    });

    rutas.get("/Curso/AsignarEstudiante/:id", (req, res)=>
    {
        var id = req.params.id;
        bd.cruds.crudEstudiante.leer((estu)=>
        {
            var estudiantes = estudiantes[0];
            bd.crudCurso.leerCurso(id,(curEstudiante)=>
            {
                var nombre="";
                if(curEstudiante[0].length>0)
                {
                    nombre = curEstudiante [0][0].nombre_estudiante;
                }
                curEstudiante = curEstudiante[0];

                res.render("Paginas/Curso/AsignarEstudiante",
                {
                    id_curso:id,
                    curEstudiante,
                    estudiantes,
                    nombre
                });
            });
        });
    });

    rutas.get("/Curso/Asistencia/:id",(req,res)=>
    {
        bd.cruds.crudAsistencia.leer((asis)=>
        {
            var asistencias = asis;
            var id= req.params.id;
            var callback = (cur)=>
            {
                var curso = cur[0][0];
                res.render("Paginas/Curso/Asistencia",
                {
                    curso,
                    asistencias

                });
            }
            bd.cruds.crudCurso.leerID(id,callback);
        });
    });

    rutas.get("/Curso/Horario/:id",(req,res)=>
    {
        bd.cruds.crudHorario.leer((hor)=>
        {
            var horarios = hor;
            var id= req.params.id;
            var callback = (cur)=>
            {
                var curso = cur[0][0];
                res.render("Paginas/Curso/Horario",
                {
                    curso,
                    horarios

                });
            }
            bd.cruds.crudCurso.leerID(id,callback);
        });
    });

    rutas.get("/Curso/Eliminar/:id",(req,res)=>
    {
        var id = req.params.id;
        bd.cruds.crudCurso.eliminar(id,()=>
        {
            req.flash("Curso eliminado Exitosamente");
            res.redirect("/Curso/Ver");
        });
        
    });

    rutas.get("/Curso/Modificar/:id",(req,res)=>
    {
        bd.cruds.crudCurso.leer((asis)=>
        {
            var asistencias = asis;
            var id = req.param.id;
            var callback =(curs)=>
            {
                var curso = curs[0][0];
                res.render("Paginas/Curso/Asistencia",
                {
                    curso,
                    asisten : asistencias,
                }
                );
                bd.cruds.crudCurso.leerID(id,callback);
            }
        }
        );
    }
    );

    
}