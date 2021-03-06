import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Room } from './models/room.model';
import { PageID } from '../../draw/models/pageID.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  constructor(public router:Router) {}
  @Input()
  room: Room;
  pageID: PageID;

  mouseDown() {

    this.room.id = this.pageID.id;
    console.log(this.pageID.id);
    this.router.navigate(['draw'])
  }
  ngOnInit(): void {}
}
