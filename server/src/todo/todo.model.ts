import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column({ defaultValue: false })
  status: boolean;
}
