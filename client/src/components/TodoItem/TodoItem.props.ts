import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ITodo } from "../../types/ITodo";

export interface TodoItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	todo: ITodo;
	remove: (todo: ITodo) => void;
	update: (todo: ITodo) => void;
}
