import { Component,OnInit } from '@angular/core';
import { IUserModel } from 'src/app/shared/model/user.model';
import { AllService } from 'src/app/shared/services/all.service';

@Component({
  selector: 'app-app-service',
  templateUrl: './app-service.component.html',
  styleUrls: ['./app-service.component.scss']
})
export class AppServiceComponent implements OnInit {
  
  constructor(public allService : AllService) {}

  public users: IUserModel[] = []

  ngOnInit() {
    this.getData()
  }

  public getData() {
    this.allService.getUser().subscribe({
      next:(response) => {
        this.users = response
        console.log(this.users.length)
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

}
