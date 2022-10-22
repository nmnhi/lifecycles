import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  @Input() value: string = 'procademy';

  constructor() {
    console.log('Constructor is called!');
    console.log(this.value);
  }

  ngOnChanges(change: SimpleChange) {
    console.log('ngOnChanges is called!');
    console.log(change);
  }
  ngOnInit(): void {
    console.log('ngOnInit is called!');
    // console.log(this.value);
  }
  ngDoCheck() {
    console.log('ngDoCheck is called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit is called!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInint is called!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy is called!');
  }
}
