import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const coleccionProyectos = new Mongo.Collection("proyectos");
export const coleccionClientes = new Mongo.Collection("clientes");

Meteor.methods({
  "proyectos.insert"(
    varNombre,
    varDescripcion,
    varResponsable,
    varFechaInicio,
    varFechaEntrega,
    varEstado
  ) {
    check(varNombre, String);
    check(varDescripcion, String);
    check(varResponsable, String);
    check(varFechaInicio, Date);
    check(varFechaEntrega, Date);
    check(varEstado, String);

    coleccionProyectos.insert({
      nombre: varNombre,
      descripcion: varDescripcion,
      responsable: varResponsable,
      fechaInicio: varFechaInicio,
      fechaEntrega: varFechaEntrega,
      estado: varEstado
    });
  },
  "tareas.insert"(
    varIdProyecto,
    varNombreTarea,
    varDescripcionTarea,
    varPrioridadTarea,
    varFechaCreacionTarea
  ) {
    check(varNombreTarea, String);
    check(varDescripcionTarea, String);
    check(varPrioridadTarea, String);
    check(varFechaCreacionTarea, Date);

    coleccionProyectos.update(
      { _id: varIdProyecto },
      {
        $addToSet: {
          tareas: {
            nombre: varNombreTarea,
            descripcion: varDescripcionTarea,
            prioridad: varPrioridadTarea,
            fechaCreacion: varFechaCreacionTarea
          }
        }
      }
    );
  },
  "clientes.insert"(
    varNombre,
    varPassword,
    varEmail
  ) {
    check(varNombre, String);
    check(varPassword, String);
    check(varEmail, String);

    coleccionClientes.insert({
      usuario: varNombre,
      pwd: varPassword,
      email: varEmail
    });
  }

});
