import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly apiService:ApiService){}
  title;
  appSource:any;
  welcomMessageText = "Hello the World!";

  
  ngOnInit(){
    this.apiService.getApiContext().subscribe(data =>{
      console.log("Api Works; "+ data);
      this.appSource = data["api-back"];
    });

    if(this.appSource == null){  
      this.appSource = "None";
    };
    this.title = 'app-front';
  }
}
