import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  teacher = [
    {
      "nom": "Sirine TRABELSI",
      "email": "trabelsii.sirine@tekab.dev",
      "phoneNumber": "21176888",
      "dateInscription": "2023-12-04T02:19:41.801Z",
      "id": 4    },
    {
      "nom": "Rihab jdaida",
      "email": "rihab.jdaida@ipsas.tn",
      "phoneNumber": "212121211",
      "dateInscription": "2023-12-04T18:06:35.294Z",
      "id": 9    },
    {
      "nom": "Zied BACHOUAL",
      "email": "zied.bachoual@gmail.com",
      "phoneNumber": "21212121",
      "dateInscription": "2023-12-04T18:07:11.163Z",
      "id": 10
    },
    {
      "nom": "Marwa FAKHFAKH",
      "email": "marwa.fakhfakh@ipsas.tn",
      "phoneNumber": "21212121",
      "dateInscription": "2023-12-04T19:20:39.558Z",
      "id": 11
    },
    {
      "nom": "Mohamed Fawzi ABDELLAOUI",
      "email": "fawzi.abdellaoui@ipsas.tn",
      "phoneNumber": "21221211221",
      "dateInscription": "2023-12-04T19:21:35.670Z",
      "id": 12
    }
  ]
}
