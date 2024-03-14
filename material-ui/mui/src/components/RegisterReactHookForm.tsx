import {Controller, useForm} from "react-hook-form";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	Typography,
} from "@mui/material";

// useForm: Este hook es utilizado para inicializar el formulario y obtener los métodos necesarios para gestionarlo. Al llamar a useForm, obtienes un objeto con varias propiedades y métodos, como register, handleSubmit, watch, errors, entre otros. Puedes utilizar estos métodos y propiedades para registrar campos de entrada (register), manejar el envío del formulario (handleSubmit), obtener los valores de los campos (watch) y manejar los errores (errors). Podríamos llamar a useForm el "hook principal del formulario", ya que es utilizado para iniciar el proceso de gestión del formulario.

// Controller: Este componente es utilizado para conectar campos de entrada (como input, select, textarea, etc.) con react-hook-form. Toma un controlador (una función de renderizado de campo) como prop y devuelve una versión mejorada del controlador que registra automáticamente el campo con react-hook-form. Puedes usar Controller para envolver tus campos de entrada y conectarlos fácilmente al formulario. Podríamos describir Controller como un "componente de control de campos" que facilita la conexión de los campos de entrada con react-hook-form.

// Tambien podemos obtener register y getValues
  // Register: Este método es utilizado para registrar campos de entrada en react-hook-form. Toma un nombre de campo y opciones como argumentos y devuelve un objeto con propiedades y métodos que necesitas para conectar el campo de entrada con react-hook-form. Puedes utilizar register para registrar campos de entrada y conectarlos al formulario.
  // GetValues: Este método es utilizado para obtener los valores de los campos de entrada registrados en react-hook-form. Toma un nombre de campo como argumento y devuelve el valor del campo de entrada. Puedes utilizar getValues para obtener los valores de los campos de entrada registrados en el formulario.

interface DataForm {
	name: string;
	lastName: string;
	email: string;
	gender: string;
}

const RegisterReactHookForm = () => {

	const {
		control,
		handleSubmit,
    formState: { errors, isValid },
    // register,
    // getValues,
    watch
	} = useForm<DataForm>();

  // Para manejo de errores se utiliza formState y destructuramos el objeto errors
  
  // const testRegister = register("name")
  // console.log(testRegister);
  // console.log(getValues("name"));
  // const firstName = watch("name");
  // console.log(firstName);

	const onSubmit = (data: DataForm) => {
		console.log(data);
	};

	return (
		<Box sx={{maxWidth: "500px", marginTop: "50px"}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography variant="h4" align="center">
					Register
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Nombre */}
					<Controller
						name="name"
						control={control}
						defaultValue=""
						// Para que se muestre el error se deben inidicar las rules
						rules={{required: true}}
						render={({field}) => (
							<TextField
								{...field}
								type="text"
								label="Name"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					{errors.name && <FormHelperText error>Este campo es requerido</FormHelperText>}

					{/* Apellido */}
					<Controller
						name="lastName"
						control={control}
						defaultValue=""
						// Para que se muestre el error se deben inidicar las rules
						rules={{required: true}}
						render={({field}) => (
							<TextField
								{...field}
								type="text"
								label="Last Name"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					{errors.lastName && <FormHelperText error>Este campo es requerido</FormHelperText>}

					{/* Email */}
					<Controller
						name="email"
						control={control}
						defaultValue=""
						// Para que se muestre el error se deben inidicar las rules
						rules={{required: true}}
						render={({field}) => (
							<TextField
								{...field}
								type="email"
								label="Email"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					{errors.email && <FormHelperText error>Este campo es requerido</FormHelperText>}

					{/* Gender */}
					<FormControl fullWidth>
						<InputLabel>Genero</InputLabel>
						<Controller
							name="gender"
							control={control}
							defaultValue=""
							// Para que se muestre el error se deben inidicar las rules
							rules={{required: true}}
							render={({field}) => (
								<Select {...field} label="Género">
									<MenuItem value="famale">Femenino</MenuItem>
									<MenuItem value="male">Masculino</MenuItem>
									<MenuItem value="other">Otro</MenuItem>
								</Select>
							)}
						/>
					</FormControl>

					{errors.gender && <FormHelperText error>Este campo es requerido</FormHelperText>}

					{/* Button */}
					<Box sx={{mt: 3}}>
						<Button type="submit" variant="contained" color="primary" fullWidth disabled={!isValid}>
							Enviar
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
export default RegisterReactHookForm;
