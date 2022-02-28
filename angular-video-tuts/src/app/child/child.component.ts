import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public message = "message from child";

  @Input()
  childMessage: string = "Default message from child";

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent () {
    console.log('it worked for function');
    this.messageEvent.emit("test message from child");
  }

}
