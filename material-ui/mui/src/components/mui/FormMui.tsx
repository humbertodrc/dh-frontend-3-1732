import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Typography,
} from "@mui/material";
import CustomInput from "./CustomInput";
import {Controller, useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormMui = () => {
	const schema = yup.object({
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

	type DataForm = yup.InferType<typeof schema>;

	const {
		control,
		formState: {errors},
		handleSubmit,
	} = useForm<DataForm>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues: {
			name: "",
			lastName: "",
			email: "",
			gender: "",
		},
	});

	const onSubmit = (data: DataForm) => {
		console.log(data);
	};

	return (
		<Box sx={{width: "500px", marginTop: "50px"}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography variant="h4" align="center">
					Form MUI
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CustomInput
						name="name"
						label="Nombre"
						type="text"
						control={control}
						defaultValue=""
						required
					/>

					<Typography variant="caption" color="error">
						{errors.name?.message}
          </Typography>
          
          <CustomInput
            name="lastName"
            label="Apellido"
            type="text"
            control={control}
            defaultValue=""
            required
          />

          <Typography variant="caption" color="error">
            {errors.lastName?.message}
          </Typography>

					<CustomInput
						name="email"
						label="Correo"
						type="email"
						control={control}
						defaultValue=""
						required
					/>

					<Typography variant="caption" color="error">
						{errors.email?.message}
					</Typography>

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
									<MenuItem value="female">Femenino</MenuItem>
									<MenuItem value="male">Masculino</MenuItem>
									<MenuItem value="other">Otro</MenuItem>
								</Select>
							)}
						/>
					</FormControl>

					<Typography variant="caption" color="error">
						{errors.gender?.message}
					</Typography>

					<Box sx={{mt: 2}}>
						<Button fullWidth type="submit" variant="contained" color="primary">
							Enviar
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
export default FormMui;
