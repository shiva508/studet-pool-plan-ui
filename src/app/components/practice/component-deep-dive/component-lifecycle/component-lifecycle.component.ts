import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { LifeCycleModel } from '../life-cycle-model';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() cycle: LifeCycleModel = new LifeCycleModel('', '');
  @Input() cycleName: string = '';
  @ViewChild('cycleNameLocalReferance', { static: true }) cycleNameLocalReferance: any;
  @ContentChild('contentChildLocalReferance') contentChildLocalReferance: any;
  
  constructor() { console.log('constructor') }

  ngOnChanges(change: SimpleChange) {
    console.log("Changes");
    console.log(change)
  }

  ngOnInit(): void {
    console.log('init()')
    console.log('OHHH:' + this.cycleNameLocalReferance.nativeElement.textContent)
     console.log('gdg' + this.contentChildLocalReferance)
  }
  ngDoCheck() {
    console.log('ngDoCheck()')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit()')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit()')
    console.log('OHHH:' + this.cycleNameLocalReferance.nativeElement.textContent)
     console.log('gdg' + this.contentChildLocalReferance)
  }
  ngAfterViewChecked=() =>{
    console.log('ngAfterViewChecked()')
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy()')
  }
}
