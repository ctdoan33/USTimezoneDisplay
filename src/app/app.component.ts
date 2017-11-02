import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	datetime = Date.now();
	selected = null;
	time = function(offset){
		this.datetime = Date.now();
		if(offset == "clear"){
			this.selected = null;
		}else{
			this.datetime += offset*60*60*1000;
			this.selected = offset;
		}
	}
}
