import {LayoutLogin} from "@/components/layouts";

const LoginPage = () => {

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		console.log(email, password);
	}

	return (
		<LayoutLogin title="Login" description="Login to your account">
			<section className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
				<h1 className="text-3xl font-bold text-white mb-6">Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-white mb-2" htmlFor="email">
							Email
						</label>
						<input
							className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-white mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
							type="password"
							id="password"
							name="password"
						/>
					</div>
					<button
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mt-4"
						type="submit"
					>
						Login
					</button>
				</form>
			</section>
		</LayoutLogin>
	);
};

export default LoginPage;
