import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreateLanguageDto } from '../dto/create-language.dto';
import { User } from '../../users/model/user.model';
@Table({ tableName: 'Language' })
export class Language extends Model<Language, CreateLanguageDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => User)
  user?: User;
}
