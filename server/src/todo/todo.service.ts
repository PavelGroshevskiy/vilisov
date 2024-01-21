import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  findOne(id: number): Promise<Todo> {
    return this.todoModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();

    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.status = createTodoDto.status;

    return todo.save();
  }

  update(
    id: number,
    changeTodo: UpdateTodoDto,
  ): Promise<[affectedCount: number, affectedRows: Todo[]]> {
    return this.todoModel.update(
      { ...changeTodo },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
  }

  async remove(id: number): Promise<void> {
    const todo = await this.findOne(id);
    await todo.destroy();
  }
}
