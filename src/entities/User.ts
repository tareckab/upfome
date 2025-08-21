import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity() // indica que vai ser uma tabela no banco de dados
export class User{ // "export" serve para conseguirmos instanciar a classe 

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
    
    @Column()
    email!: string

    @Column()
    birthdata!: Date


}