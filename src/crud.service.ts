import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class CrudService {
  keydadosuser: string;

  constructor(
    public db: AngularFireDatabase
    ) { }

  // insert(dado: string) {

  // }

  update(id:string,dado: string, key: string) {


    this.db.database.ref('UserData/').child(id).once('value')
    .then((snapshot)=>{
        snapshot.forEach((childSnapshot: any)=>{
            this.keydadosuser = childSnapshot.key;
            console.log(this.keydadosuser)
            this.db.database.ref(`UserData/${id}/${this.keydadosuser}`)
            .update({
              key:dado
            })
            .then((resposta)=>{
              console.log(resposta)
              console.log("OK")
            })

            .catch((error: any) => {
              console.error(error);
            });
        })
    })
    .catch(()=>{

    })




  }

  // getAll() {

  // }

  // delete(key: string) {
  //   this.db.object(`contato/${key}`).remove();
  // }

}
