export class pds{
  public img:string;
  public nome:string;
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

  public estrelas:object;
  public datadenascimento:string;
  public nacionalidade:string;
  public naturalidade:string;
}


export class usuario{
  public img:object;
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
