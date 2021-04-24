import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  user: any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = { id: this.route.snapshot.params['id']} ;
    console.log(this.user)
    console.log(this.route.queryParams)
    console.log(this.route.fragment)
    this.route.queryParams.subscribe()
    this.route.fragment.subscribe()
  }

}
