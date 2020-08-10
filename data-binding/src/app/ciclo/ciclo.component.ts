import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {

    @Input()  valorInicial: number = 10;

  constructor() {
    this.log('constructor1');
  }

  ngOnChanges() {
    this.log('ngOnChanges2');
  }

  ngOnInit() {
    this.log('ngOnInit3');
  }

  ngDoCheck() {
    this.log('ngDoCheck4');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit5');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked6');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit7');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked8');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy9');
  }

  private log(hook: String){
    console.log(hook);
  }
}
