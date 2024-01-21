import styles from "./TodoForm.module.scss";
import { TodoFormProps } from "./TodoForm.props";
import cn from "classnames";
import { Button } from "../Button/Button";
import { FormEvent } from "react";
import { InputForm } from "../InputForm/InputForm";
import { useCreateTodoMutation } from "../../services/TodoApi";
import { ITodo } from "../../types/ITodo";

const TodoForm = ({ className, ...props }: TodoFormProps) => {
	const [createTodo, {}] = useCreateTodoMutation();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);
		console.log(e.currentTarget);
		e.preventDefault();
		const title = formData.get("title");
		const description = formData.get("description");
		formData.set("title", "");
		createTodo({ title, description } as ITodo);
	};

	return (
		<div className={cn(className, styles.todoForm)} {...props}>
			<form onSubmit={handleSubmit}>
				<h1>Добавить задание</h1>
				<div>
					<InputForm name="title" placeholder="Заголовок" />
					<InputForm name="description" placeholder="Описанние" />
					<Button appearance="blue">Создать</Button>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
