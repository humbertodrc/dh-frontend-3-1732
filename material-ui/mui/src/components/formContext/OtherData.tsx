import {
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import CustomInput from "../mui/CustomInput";
import {ErrorMessage} from "@hookform/error-message";

const OtherData = () => {
	const {
		control,
		formState: {errors},
	} = useFormContext();

	return (
		<>
			<CustomInput
				name="email"
				label="Correo"
				type="email"
				control={control}
				defaultValue=""
				required
			/>

			<Typography variant="caption" color="error">
				<ErrorMessage name="email" errors={errors} />
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
				<ErrorMessage name="gender" errors={errors} />
			</Typography>
		</>
	);
};
export default OtherData;
