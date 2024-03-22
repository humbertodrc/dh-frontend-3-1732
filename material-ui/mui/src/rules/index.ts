import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .required("Este campo es requerido")
    .min(3, "Mínimo 3 caracteres")
    .max(20, "Máximo 20 caracteres"),
  lastName: yup
    .string()
    .required("Este campo es requerido")
    .min(3, "Mínimo 3 caracteres")
    .max(20, "Máximo 20 caracteres"),
  email: yup
    .string()
    .required("Este campo es requerido")
    .email("Correo inválido")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
  gender: yup.string().required("Este campo es requerido"),
});