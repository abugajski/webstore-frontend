/**
 * Created by hubertus on 3/26/17.
 */
import { Component } from '@angular/core';
import { FlavorService } from './flavor.service';
import { Flavor } from './flavor';

@Component({
  selector: 'flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.css']
})

export class FlavorComponent {

  flavors = [];

  constructor(private _flavorService: FlavorService){}

  ngOnInit(){
    this.getFlavors();
  }

  addFlavor(){
    var flavor = new Flavor();
    flavor.name = null;
    flavor.id = null;
    this.flavors.push(flavor);
  }

  saveFlavorChanges(){
    console.log("saveChanges");
    for (let flavor of this.flavors){
      if(flavor.id === null && flavor.name != null){
        this._flavorService.create(flavor.name)
          .then(() => {this.getFlavors();});
      }else {
        if(flavor.name != null && flavor.name != ''){
          this._flavorService.update(flavor)
            .then(() => {this.getFlavors();});
        }
        else {
          this.getFlavors();
        }
      }
    }
  }

  deleteFlavor(flavor: Flavor){
    if(flavor.id != null){
      this._flavorService.delete(flavor.id);
    }
    var index = this.flavors.indexOf(flavor);
    this.flavors.splice(index,1);
  }

  getFlavors(): void{
    this._flavorService
      .getFlavors()
      .subscribe(resFlavors => this.flavors = resFlavors);
  }

}
