import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
//  newServerName = '';
//  newServerContent = '';
    @Output() serverCreated = new  EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new  EventEmitter<{serverName: string, serverContent: string}>();
    @ViewChild('serverContentInput') serverContentInput: ElementRef;
    
  constructor() { }

  ngOnInit() {
  }
 onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
     console.log(this.serverContentInput.nativeElement.value);
//     this.serverCreated.emit({
//         serverName: nameInput.value,
//         serverContent: contentInput.value
//     });
     this.serverCreated.emit({
         serverName: nameInput.value,
         serverContent: this.serverContentInput.nativeElement.value
     });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
//     this.blueprintCreated.emit({
//         serverName: nameInput.value,
//         serverContent: contentInput.value
//     });
     this.blueprintCreated.emit({
         serverName: nameInput.value,
         serverContent: this.serverContentInput.nativeElement.value
     });
  }
}
