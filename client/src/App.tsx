import "./App.scss";
import { Layout } from "./layout/Layout";
import { TodoForm } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<Layout>
				<div className="App">
					<TodoForm />
				</div>
			</Layout>
		</Provider>
	);
}

export default App;
