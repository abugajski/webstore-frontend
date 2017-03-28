/**
 * Created by hubertus on 3/15/17.
 */
import { Component, OnInit } from '@angular/core';
import { ProducerService } from './producer.service'
import { Producer } from './producer.model';

@Component({
  selector: 'producers',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})

export class ProducerComponent implements OnInit{

  producers = [];

  constructor(private _producerService: ProducerService){}

  ngOnInit(){
    this.getProducers();
  }

  addProducer(){
    var producer = new Producer();
    producer.name = null;
    producer.id = null;
    this.producers.push(producer);
  }

  saveProducerChanges(){
    console.log("saveChanges");
    for (let producer of this.producers){
      if(producer.id === null && producer.name != null){
        this._producerService.create(producer.name)
          .then(() => {this.getProducers();});
      }else {
        if(producer.name != null && producer.name != ''){
          this._producerService.update(producer)
            .then(() => {this.getProducers();});
        }
        else {
          this.getProducers();
        }
      }
    }
  }

  deleteProducer(producer: Producer){
    if(producer.id != null){
      this._producerService.delete(producer.id);
    }
    var index = this.producers.indexOf(producer);
    this.producers.splice(index,1);
  }

  getProducers(): void{
    this._producerService
      .getProducers()
      .subscribe(resProducers => this.producers = resProducers);
  }

}
