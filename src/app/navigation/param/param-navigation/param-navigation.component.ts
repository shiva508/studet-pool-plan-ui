import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-param-navigation',
  templateUrl: './param-navigation.component.html',
  styleUrls: ['./param-navigation.component.css']
})
export class ParamNavigationComponent implements OnInit {
  user: any;
  paramSunscrription: Subscription = new Subscription;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
   this.paramSunscrription= this.route.params.subscribe((params: Params) => {
      this.user.id = params['id']
      this.user.name=params['name']
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramSunscrription.unsubscribe()
  }
}
