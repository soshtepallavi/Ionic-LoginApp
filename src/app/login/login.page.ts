import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage{
  data: any = [];
  username:string="";
  password:string="";
  getData:string='';
  url: string;
  
  
  constructor(private loginService: RestapiService, private inAppBrowser: InAppBrowser) {}

  saveUser(url:string) {
         console.log(this.username);
         console.log(this.password);
         this.getData= "usr="+this.username+"&pwd="+this.password;
          this.loginService.login(this.getData)
          .subscribe(
              
              resp => {
                  console.log(resp, "res");
                  this.data = resp;
                  const options: InAppBrowserOptions ={
                    zoom:'no',
                    location:'no',
                    hideurlbar:'yes'
                  }
                   const browser = this.inAppBrowser.create(url,'_blank',options);
              },
              err => {

                console.log(2323);
               

                
              },
                    
              () => console.log('Movie Search Complete')
            );
           
             
            
          }
      
              
      
  }
  
  
  

