import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreativePlanner';
  isLoading: boolean;
  constructor() {}
  
  // _loadChildComponent = false;
  // parentToChild: string;
  // objShareDTO: ShareDto;

  ngOnInit() {
    if (environment.production) {
     
        if (location.protocol === 'http:') {
          window.location.href = location.href.replace('http', 'https');
        }
      }
  }
}
