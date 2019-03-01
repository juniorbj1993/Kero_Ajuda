export class pds{
  public nome:string;
  public img: string = '../../assets/imgs/semimagem.jpg';
  public sobrenome:string;
  public telefone: string;
  public email: string;
  public funcao:string;
  public cpf:string;
  public rg:string;


  public estado: string;
  public cidade: string;
  public bairro:string;
  public rua:string;
  public numero:string;

  public estrelas:object = {
    bom: 0,
    otimo: 0,
    ruim: 0
  };
  public datadenascimento:string;
  public nacionalidade:string;
  public naturalidade:string;
  public pagamento: number = 0;
}


export class usuario{
  public nome:string;
  public sobrenome:string;
  public telefone: string;
  public email: string;
  public cpf:string;
  public datadenascimento:string;
  public nacionalidade:string;
  public naturalidade:string;


  public estado: string;
  public cidade: string;
  public bairro:string;
  public rua:string;
  public numero:string;

  public estrelas:Array<number>;

}
