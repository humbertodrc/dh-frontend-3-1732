import {Box, Button, Paper, Typography} from "@mui/material";
import OtherData from "./OtherData";
import PersonalData from "./PersonalData";
import {useFormContext, useWatch} from "react-hook-form";

const Form = () => {
	const {handleSubmit, reset, watch, control} = useFormContext();

	const onSubmit = (data: any) => {
		console.log(data);
		reset();
	};

	// Escuchar todo los inputs
	// console.log(watch());
	// console.log(watch("name"));

	const name = useWatch({
		name: ["name", "lastName"],
    control,
	});

	return (
		<Box sx={{width: "700px", marginTop: "50px"}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography variant="h4" align="center">
          Form MUI y React Hook Form 
          <Typography variant="caption" color="primary">
            {name}
          </Typography>
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<PersonalData />

					<OtherData />

					<Box sx={{mt: 2, display: "flex", gap: 4}}>
						<Button
							fullWidth
							type="reset"
							variant="contained"
							color="secondary"
							onClick={() => reset()}
						>
							Limpiar
						</Button>

						<Button
							fullWidth
							type="reset"
							variant="contained"
							color="info"
							onClick={() => {
								reset(
									{
										name: "",
										lastName: "",
									},
									{keepDefaultValues: true}
								);
							}}
						>
							Limpiar campos
						</Button>

						<Button fullWidth type="submit" variant="contained" color="primary">
							Enviar
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
export default Form;
