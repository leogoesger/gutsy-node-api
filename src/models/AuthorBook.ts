import {
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { Author, Book } from "./";

@Table
class AuthorBook extends Model<AuthorBook> {
    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Book)
    @Column
    public bookId: number;

    @ForeignKey(() => Author)
    @Column
    public authorId: number;
}

export default AuthorBook;
