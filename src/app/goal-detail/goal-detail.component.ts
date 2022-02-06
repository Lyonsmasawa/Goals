import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() { }

  goalDelete(complete: boolean){
    this.isComplete.emit(complete)
  }

  ngOnInit(): void {
  }

}
