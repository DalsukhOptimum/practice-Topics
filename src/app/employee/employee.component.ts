import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  userID!: string ;
  page!: string;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   // this will initialized only once
    this.userID = this.activatedRoute.snapshot.paramMap.get("id")!;

   // this will change everytime
    this.activatedRoute.paramMap.subscribe(params => {
      this.userID = params.get('id')!;
 
    });

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.page = params.get('page')!;
    });


    // myObservable = new Observable((observer) => {
    //   console.log('Observable Starts');
    //   observer.next('1');
    //   observer.next('2');
    //   observer.next('3');
    //   observer.next('4');
    //   observer.next('5');
    // });

    // myObservable = new Observable((observer) => {
    //   console.log('Observable Starts');
    //   setTimeout(() => {
    //     observer.next('1');
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next('2');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('3');
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next('4');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('5');
    //   }, 5000);
    // });

  //   ok():any
  //   {
  //    setTimeout(() => {
  //      return 1 ;
  //    }, 3000);
  //   }
  //  async ngOnInit(): Promise<any> {
  //     // this.myObservable.subscribe((val) =>{
  //     //   console.log(val);
  //     // });
  //     let p = this.ok().then((val: any)=>{
  //       console.log(val);
  //     })
      
  //   }
  }
}
