import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Formulario(props: { usuarioInformation: any }) {
  return (
    <div id="formulario-account" className="container">
      <Formik
        initialValues={{
          email: props.usuarioInformation.email || "",
          nombre: props.usuarioInformation.nombre || "",
          direccion: props.usuarioInformation.direccion || "",
          telefono: props.usuarioInformation.telefono || "",
          piso: props.usuarioInformation.piso || "",
        }}
        onSubmit={async (value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("El email es requerido.")
            .min(5, "El email debe tener más de 4 caracteres."),
          nombre: Yup.string()
            .required("El nombre es requerido.")
            .min(4, "El nombre debe tener más de 3 caracteres."),
          telefono: Yup.string().required("El telefono es requerido."),
          direccion: Yup.string().required("La dirección es requerida."),
        })}
      >
        {(formikProps) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico:</label>
              <Field
                as="input"
                type="email"
                name="email"
                placeholder="Ingresa su correo electrónico"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nombre completo:</label>
              <Field
                as="input"
                type="text"
                name="nombre"
                placeholder="Ingrese nombre completo"
                className="form-control"
              />{" "}
            </div>

            <div className="direccion">
              <div className="mb-3">
                <label className="form-label">Dirección:</label>
                <Field
                  as="input"
                  type="text"
                  name="direccion"
                  placeholder="Ingrese su dirección"
                  className="form-control"
                />{" "}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Piso: <small>{"(opcional)"}</small>
                </label>
                <Field
                  as="input"
                  type="text"
                  name="piso"
                  placeholder="Ingrese su piso"
                  className="form-control"
                />{" "}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono:</label>
              <Field
                as="input"
                type="text"
                name="telefono"
                placeholder="Ingrese su teléfono"
                className="form-control"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <ErrorMessage name="email">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
              <ErrorMessage name="direccion">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
              <ErrorMessage name="nombre">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
              <ErrorMessage name="password">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
              <ErrorMessage name="telefono">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
              <ErrorMessage name="piso">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                formikProps.isSubmitting ||
                formikProps.errors.email != undefined ||
                formikProps.values.email.length === 0 ||
                formikProps.errors.nombre != undefined ||
                formikProps.values.nombre.length === 0 ||
                formikProps.errors.direccion != undefined ||
                formikProps.values.direccion.length === 0 ||
                formikProps.errors.telefono != undefined ||
                formikProps.values.telefono.length === 0
              }
            >
              Modificar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Formulario;
