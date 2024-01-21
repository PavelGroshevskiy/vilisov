import { MouseEventHandler } from "react";
import { Button } from "../Button/Button";
import styles from "./TodoItem.module.scss";
import { TodoItemProps } from "./TodoItem.props";
import cn from "classnames";
import { ITodo } from "../../types/ITodo";

const TodoItem = ({ className, todo, remove, update, ...props }: TodoItemProps) => {
	const handleDelete = (event: any) => {
		event.stopPropagation();
		remove(todo);
	};
	const handleUpdateEdit = (event: any) => {
		event.stopPropagation();
		const title = prompt() || "";
		const description = prompt() || "";
		update({ ...todo, title, description });
	};

	const handleUpdateStatus = (event: any) => {
		event.stopPropagation();
		const status = !todo.status;
		console.log({ ...todo });
		update({ ...todo, status });
	};

	return (
		<div
			className={cn(className, styles.todoItem, {
				[styles.done]: todo.status == true,
			})}
			{...props}
		>
			<div onClick={handleUpdateStatus}>
				<b>{todo.title}</b>
				<p>{todo.description}</p>
			</div>

			<div>
				<Button onClick={handleUpdateEdit} appearance="ghost">
					Изменить
				</Button>
				<Button onClick={handleDelete} appearance="orange">
					Удалить
				</Button>
				<hr
					style={{
						color: "black",
						background: "black",
						height: 2,
					}}
				/>
			</div>
		</div>
	);
};

export default TodoItem;
