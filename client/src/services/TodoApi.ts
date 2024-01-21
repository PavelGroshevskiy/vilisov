import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../types/ITodo";

export const todoApi = createApi({
	reducerPath: "todoApi",
	tagTypes: ["Todo"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/" }),
	endpoints: (builder) => ({
		getAllTodos: builder.query<ITodo[], string>({
			query: () => `/todo`,
			providesTags: (result) => ["Todo"],
		}),
		createTodo: builder.mutation<ITodo, ITodo>({
			query: (todo: ITodo) => ({
				url: "todo",
				method: "POST",
				body: todo,
			}),
			invalidatesTags: ["Todo"],
		}),
		updateTodo: builder.mutation<ITodo, ITodo>({
			query: (todo: ITodo) => ({
				url: `todo/${todo.id}`,
				method: "PATCH",
				body: todo,
			}),
			invalidatesTags: ["Todo"],
		}),
		deleteTodo: builder.mutation<ITodo, ITodo>({
			query: (todo: ITodo) => ({
				url: `todo/${todo.id}`,
				method: "DELETE",
				body: todo,
			}),
			invalidatesTags: ["Todo"],
		}),
	}),
});

export const {
	useGetAllTodosQuery,
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} = todoApi;
