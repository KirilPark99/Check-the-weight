import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

class result{
  constructor(public height: number,public weight: number,public cheked: boolean ) {

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public height : number = 0;
  public weight : number = 0;

  public history: Array<result> = [];
  public heights: Array<number> = [157,160,162,165,
                                   168,170,173,175,178,
                                   180,183,185,188,190,193];
  public weights: Array<Array<number>> = [[55,60],[56,62],[58,63],[59,65],
                                          [61,67],[63,69],[65,71],[66,73],[68,75],
                                          [70,77],[72,80],[74,82],[76,84],[78,86]];


  check(height: number,weight: number) {
    if(height>=this.heights[0] && height<=this.heights[this.heights.length-1]){

      for(let i = 0; i < this.heights.length-1; i++){

        if(height>=this.heights[i] && height<=this.heights[i+1] ) {
        
            if (weight>=this.weights[i][0] && weight<=this.weights[i][1]) {
                alert("Ok");
                this.history.push(new result(height,weight,true));
                return;
            } else {
              alert("Not ok");
              this.history.push(new result(height,weight,false));
              return;
          }
        } 
      }
    }

    else{
    alert("Not ok");
        this.history.push(new result(height,weight,false));
    }
  }
  
  isShow: boolean = false;
  
  showHistory(){
    this.isShow = !this.isShow;  
  }

  ngOnInit(){

  }
}
