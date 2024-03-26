import {Button, Container, Stack, TextField, Typography} from "@mui/material";
import {useFieldArray, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const FormUseFieldArray = () => {
	const shema = yup.object({
		receta: yup.string().required("El campo es requerido"),
		ingredientes: yup.array().of(
			yup.object({
				value: yup.string().required("El campo es requerido"),
			})
		),
	});

	const {
		register,
		formState: {errors},
    control,
    handleSubmit
	} = useForm({
		resolver: yupResolver(shema),
		defaultValues: {
			receta: "",
			ingredientes: [
				{
					value: "",
				},
			],
		},
	});

	const {fields, append, remove} = useFieldArray({
		control,
		name: "ingredientes",
  });
  
  const onSubmit = (data: any) => {
    console.log(data);
  }

	return (
		<Container maxWidth="sm" sx={{marginTop: 5}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h4" sx={{mb: 4}}>
					Form con useFieldArray
				</Typography>

				<TextField
					id="outlined-basic"
					label="Receta"
					variant="outlined"
					fullWidth
					{...register("receta")}
					error={errors.receta ? true : false}
					helperText={errors.receta?.message}
				/>

				{/* Iterar sobre el fields */}
				{fields.map((field, index) => {
					return (
						<Stack
							key={field.id}
							direction="row"
							spacing={2}
							sx={{marginTop: 4}}
						>
							<TextField
								id="outlined-basic"
								label="Ingrediente"
								variant="outlined"
								{...register(`ingredientes.${index}.value`)}
								sx={{
									width: 0.7,
									borderRadius: 1,
								}}
								error={errors.ingredientes?.[index]?.value ? true : false}
								helperText={errors.ingredientes?.[index]?.value?.message}
							/>
							<Button
								variant="outlined"
								color="primary"
								sx={{width: 0.3, borderRadius: 1}}
								onClick={() => remove(index)}
							>
								Eliminar
							</Button>
						</Stack>
					);
        })}
        
        {/* Buttons */}
        <Button
          variant="contained"
          sx={{ width: 1, mt: 4, borderRadius: 1 }}
          onClick={() => append({ value: ""})}
        >
          Agregar Ingrediente
        </Button>

        <Button
          variant="contained"
          type="submit"
          sx={{ width: 1, mt: 4, borderRadius: 1 }}
        >
          Guardar Receta
        </Button>
			</form>
		</Container>
	);
};
export default FormUseFieldArray;
