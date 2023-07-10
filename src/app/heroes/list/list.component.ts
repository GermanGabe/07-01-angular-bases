import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironmane','Hulk','She Julk','Thor'];
  public deleteHero?:string ;

removeLastHero():void{
  this.deleteHero = this.heroNames.pop();
}


}
