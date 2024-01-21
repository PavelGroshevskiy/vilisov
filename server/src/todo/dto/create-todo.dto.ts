import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly status: boolean;
}
