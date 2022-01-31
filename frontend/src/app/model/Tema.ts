import { Postagem } from "./Postagem";

export class Tema {
    public id: number;
    public descricao: string;
    public assunto: string;
    public hashtag: string;
    public postagem: Postagem[]
}
