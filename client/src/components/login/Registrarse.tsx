import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useUsuarioContext } from "../../context/UsuarioContext";
import * as Yup from "yup";

function Registrarse(props: { setShowIniciar: any; showIniciar: any }) {
  const { postUsuario } = useUsuarioContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.showIniciar]);

  return (
    <div className="login-container">
      <Formik
        initialValues={{
          email: "",
          nombre: "",
          password: "",
          passwordAux: "",
        }}
        onSubmit={async (value) => {
          if (await postUsuario(value)) {
            window.location.href = "/";
          }
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("El email es requerido.")
            .min(5, "El email debe tener más de 4 caracteres."),
          nombre: Yup.string()
            .required("El nombre es requerido.")
            .min(4, "La contraseña debe tener más de 3 caracteres."),
          password: Yup.string()
            .required("La contraseña es requerida.")
            .min(8, "La contraseña debe tener más de 7 caracteres.")
            .oneOf(
              [Yup.ref("passwordAux")],
              "Las contraseñas ingresadas no coinciden."
            ),
        })}
      >
        {(formikProps) => (
          <Form className="login-form">
            <h2>Registrarse</h2>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <Field
                as="input"
                type="email"
                name="email"
                placeholder="Ingresa correo"
              />
            </div>
            <div className="form-group" style={{ margin: "25px 0" }}>
              <label>Nombre completo:</label>
              <Field
                as="input"
                type="text"
                name="nombre"
                placeholder="Ingrese nombre completo"
              />
            </div>
            <div className="form-group" style={{ margin: "25px 0" }}>
              <label>Contraseña:</label>
              <Field
                as="input"
                type="password"
                name="password"
                placeholder="Ingresa contraseña"
              />
            </div>
            <div className="form-group" style={{ margin: "25px 0" }}>
              <label>Confirmar contraseña:</label>
              <Field
                as="input"
                type="password"
                name="passwordAux"
                placeholder="Ingresa contraseña nuevamente"
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
              <ErrorMessage name="password">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </div>

            <div className="btn-cont">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  formikProps.isSubmitting ||
                  formikProps.errors.email != undefined ||
                  formikProps.values.email.length === 0 ||
                  formikProps.errors.password != undefined ||
                  formikProps.values.password.length === 0 ||
                  formikProps.errors.passwordAux != undefined ||
                  formikProps.values.passwordAux.length === 0
                }
              >
                Registrarse
              </button>
              <small onClick={() => props.setShowIniciar(true)}>
                Iniciar sesión
              </small>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registrarse;
