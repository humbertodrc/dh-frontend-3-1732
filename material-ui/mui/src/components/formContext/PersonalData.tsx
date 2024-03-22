import { Typography } from "@mui/material";
import CustomInput from "../mui/CustomInput";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const PersonalData = () => {

  const {control, formState: {errors}} = useFormContext();

	return (
		<>
			<CustomInput
				name="name"
				label="Nombre"
				type="text"
				control={control}
				defaultValue=""
				required
			/>

			<Typography variant="caption" color="error">
				<ErrorMessage name="name" errors={errors} />
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
				<ErrorMessage name="lastName" errors={errors} />
			</Typography>
		</>
	);
};
export default PersonalData;
