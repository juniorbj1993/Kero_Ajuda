import {Servidores} from './servidores.model';

export class ServiceServidores {
  public servidores: Array<Servidores> = [
    {
      img: "none",
      nome: "Jorge Carlos",
      telefone: "(88) 988525252",
      email: "carlos@gmail.com",
      funcao: "Pedreiro",
      categoria: "Pedreiro",

      estado: "Ceará",
      cidade: "Juazeiro do Norte",
      bairro: "Centro",
      rua: "São Pedro",
      numero: "200",

      curriculos:"object",

      estrelas:[10]
    },
    {
      img: "none",
      nome: "João Batista Júnior",
      telefone: "(88) 998048587",
      email: "juniorbj1993@gmail.com",
      funcao: "Programador",
      categoria: "Serviços de Informática",

      estado: "Ceará",
      cidade: "Juazeiro do Norte",
      bairro: "São José",
      rua: "Assis de melo",
      numero: "71",

      curriculos:"object",

      estrelas:[10]
    },
    {
      img: "none",
      nome: "Roberta",
      telefone: "(88) 998048587",
      email: "roberta@gmail.com",
      funcao: "Doméstica",
      categoria: "Serviços Domesticos",

      estado: "Ceará",
      cidade: "Crato",
      bairro: "Seminário",
      rua: "rua 01",
      numero: "71",

      curriculos:"object",

      estrelas:[10]
    }


  ];
  public getServidores(): Array<Servidores> {
    return this.servidores;
  }
}
