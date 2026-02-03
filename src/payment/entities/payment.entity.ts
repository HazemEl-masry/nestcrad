import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;

    @Column()
    price: string;

    @Column("text")
    comment: string;

    @Column('int')
    views: number;

    @Column()
    isPublished: boolean;

    @Column("int")
    likes: number;
}
