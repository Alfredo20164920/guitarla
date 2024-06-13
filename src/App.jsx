import { Footer, Guitar, Header } from "./components";

function App() {


	return (
		<>
			<Header />

			<main className="container-xl mt-5">
				<h2 className="text-center">Nuestra Colección</h2>

				<div className="row mt-5">
					<Guitar />
					<Guitar />
					<Guitar />
					<Guitar />
					<Guitar />
					<Guitar />
					<Guitar />
					<Guitar />
					<Guitar />
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
