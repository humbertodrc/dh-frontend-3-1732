import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

const Form = () => {
	return (
		<Box component="section" sx={{maxWidth: 500}}>
			<Paper
				elevation={2}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography
					component="h1"
					variant="h1"
					sx={{fontWeight: 500, fontSize: 24}}
				>
					Registrate para recibir las últimas noticias
				</Typography>

				<Grid item xs={12}>
					<TextField
						id="outlined-basic"
						label="Nombre"
						variant="outlined"
						sx={{width: 1}}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						id="outlined-basic"
						label="Correo"
						type="email"
						variant="outlined"
						sx={{width: 1}}
					/>
				</Grid>

				<Grid item xs={12}>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="female"
							name="radio-buttons-group"
						>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel
								value="other"
								control={<Radio />}
								label="Other"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>

				<Button variant="contained" color="primary">
					Enviar
				</Button>
			</Paper>
		</Box>
	);
};
export default Form;
