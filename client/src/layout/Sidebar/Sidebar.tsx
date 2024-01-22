import cn from "classnames";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";

import {
	useDeleteTodoMutation,
	useGetAllTodosQuery,
	useUpdateTodoMutation,
} from "../../services/TodoApi";
import { TodoItem } from "../../components";
import { ITodo } from "../../types/ITodo";

const Sidebar = ({ className, ...props }: SidebarProps) => {
	const { data: todoItems, isLoading, error } = useGetAllTodosQuery("");
	const [deleteTodo, {}] = useDeleteTodoMutation();
	const [updateTodo, {}] = useUpdateTodoMutation();

	const handleRemove = (todo: ITodo) => {
		deleteTodo(todo);
	};
	const handleUpdate = (todo: ITodo) => {
		updateTodo(todo);
	};

	if (isLoading)
		return (
			<div className={cn(className, styles.sidebar)} {...props}>
				...Loading
			</div>
		);

	if (error)
		return (
			<div className={cn(className, styles.sidebar)} {...props}>
				{`Произошла ошибка ${error}`}
			</div>
		);

	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			{todoItems &&
				todoItems
					.map((todoItem: ITodo) => (
						<TodoItem
							key={todoItem.id}
							todo={todoItem}
							remove={handleRemove}
							update={handleUpdate}
						/>
					))
					.sort(function (a, b) {
						if (a.props.todo.id < b.props.todo.id) {
							return 1;
						}
						if (a.props.todo.id > b.props.todo.id) {
							return -1;
						}

						return 0;
					})}
		</div>
	);
};

export default Sidebar;
