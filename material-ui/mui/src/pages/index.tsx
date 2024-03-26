import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
// import Form from "@/components/Form";
import Table from "@/components/Table";
import RegisterReactHookForm from "@/components/RegisterReactHookForm";
import FormMui from "@/components/mui/FormMui";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/rules";
import * as yup from "yup";
import Form from "@/components/formContext/Form";
import FormUseFieldArray from "@/components/formUseFieldArray/Form";

export default function Home() {

	type DataForm = yup.InferType<typeof schema>;

	const method = useForm<DataForm>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues: {
			name: "",
			lastName: "",
			email: "",
			gender: "",
		}
	})	

	return (
		<>
			<Head>
				<title>Material UI</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main}`}>
				{/* <Form /> */}
				{/* <Table /> */}
				{/* <RegisterReactHookForm /> */}
				{/* <FormMui /> */}
				{/* <FormProvider {...method}>
						<Form />
				</FormProvider> */}
				<FormUseFieldArray />
			</main>
		</>
	);
}
