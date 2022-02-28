import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageLogService } from '../message-log.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public message = "message from child";
  name = "han";

  showText = false;
  text = "Toggled text";

  @Input()
  childMessage: string = "Default message from child";

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private logger: MessageLogService) { }

  ngOnInit(): void {
    this.logger.logMessage("testing dependency injection");
  }

  sendToParent () {
    console.log('it worked for function');
    this.messageEvent.emit("test message from child");
  }

  toggleText(): void {
    this.showText = !this.showText;
  }

}
