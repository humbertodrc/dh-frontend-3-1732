import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";

interface CustomInputProps {
  name: string;
  control:  Control<any>;
  defaultValue: string;
  type: string;
  label: string;
  required: boolean;
  textFieldProps?: Record<string, any>;
}


const CustomInput = ({
	name,
	control,
	defaultValue,
	type,
	label,
	required,
	textFieldProps,
}: CustomInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({field}) => (
				<TextField
					{...field}
					type={type}
					label={label}
					variant="outlined"
					fullWidth
					required={required}
					sx={{mb: 2}}
					{...textFieldProps}
				/>
			)}
		/>
	);
};
export default CustomInput;
