import { Column, ConstraintType, DatabaseSchema, Table, Unique } from 'src/sql-tools';

@Table()
@Unique({ name: 'UQ_test', columns: ['id'] })
export class Table1 {
  @Column({ type: 'uuid' })
  id!: string;
}

export const description = 'should add a unique constraint to the table with a specific name';
export const schema: DatabaseSchema = {
  databaseName: 'postgres',
  schemaName: 'public',
  functions: [],
  enums: [],
  extensions: [],
  parameters: [],
  overrides: [],
  tables: [
    {
      name: 'table1',
      columns: [
        {
          name: 'id',
          tableName: 'table1',
          type: 'uuid',
          nullable: false,
          isArray: false,
          primary: false,
          synchronize: true,
        },
      ],
      indexes: [],
      triggers: [],
      constraints: [
        {
          type: ConstraintType.UNIQUE,
          name: 'UQ_test',
          tableName: 'table1',
          columnNames: ['id'],
          synchronize: true,
        },
      ],
      synchronize: true,
    },
  ],
  warnings: [],
};
