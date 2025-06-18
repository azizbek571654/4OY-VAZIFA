import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from '../../categories/model/category.model';
import { Kurier } from '../../kurier/model/kurier.model';

@Table({ tableName: 'social' })
export class Social extends Model<
  Social,
  { title: string; description: string; kurier_id: number; category_id: number }
> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      })
      title: string;
    
      @Column({
        type: DataType.STRING,
        allowNull: false,
        // unique: true,
      })
      description: string;
      


      @ForeignKey(() => Kurier)
      @Column({
        type: DataType.BIGINT,
        allowNull: false,
        // unique: true,
      })
      kurier_id: number;
      @BelongsTo(() => Kurier, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      kurier: Kurier



      @ForeignKey(() => Category)
      @Column({
        type: DataType.BIGINT,
        allowNull: false,
        // unique: true,
      })
      category_id: number;
      @BelongsTo(() => Category, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      category: Category;
}