import {Servidores} from './servidores.model';

export class ServiceServidores {
  public servidores: Array<Servidores> = [
    {
      id: 0,
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
      estrelas:[10],

      cpf:"00000000000",

      nome_pai:"",
      nome_mae:"",
      estado_civil:"",
      datadenascimento:"",
      nacionalidade:"",
      naturalidade:"",
      rg:""

    },
    {
      id: 1,
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
      cpf:"00000001000",
      estrelas:[10],
      nome_pai:"",
      nome_mae:"",
      estado_civil:"",
      datadenascimento:"",
      nacionalidade:"",
      naturalidade:"",
      rg:""
    },
    {
      id: 2,
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
      estrelas:[10],
      cpf:"00003300000",
      nome_pai:"",
      nome_mae:"",
      estado_civil:"",
      datadenascimento:"",
      nacionalidade:"",
      naturalidade:"",
      rg:""
    }


  ];
  public getServidores(): Array<Servidores> {
    return this.servidores;
  }
}
