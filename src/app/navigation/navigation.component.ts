import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationServiceService } from './service/navigation-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  users: any;
  constructor(private router: Router, private route: ActivatedRoute, private navigationServiceService: NavigationServiceService) { }

  ngOnInit(): void {
  this.users=this.navigationServiceService.users;
  }
  navigateToHome = () => {
    this.router.navigate(['/about'])
  }

  reloadPage = () => {
    // this.router.navigate(['navigation'],{relativeTo:this.route})
  }
  queryParamNavigation = (id:number) => {
    this.router.navigate(['/navigations', id, 'edit'], { queryParams: { allowEdit: '1'},fragment:"loading"})
  }
}
