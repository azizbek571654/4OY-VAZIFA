import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IGenreCreationAttr {
  name: string;

}

@Table({ tableName: "Genres" })
export class Genre extends Model<Genre, IGenreCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare name: string;

}



// export class Genre {}
