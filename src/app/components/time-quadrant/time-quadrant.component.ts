import { Component, ViewChild, ElementRef, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { TaskService } from '../../services/task.service';
import { TimeQuadrantTask } from '../../models/task.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-time-quadrant',
  templateUrl: './time-quadrant.component.html',
  styleUrls: ['./time-quadrant.component.scss'],
  imports: [CommonModule, FormsModule, AgGridModule, RouterModule],
  standalone: true
})
export class TimeQuadrantComponent {
  @ViewChild('taskDialog') taskDialog!: ElementRef<HTMLDialogElement>;

  selectedQuadrant: 1 | 2 | 3 | 4 = 1;
  newTask: Partial<TimeQuadrantTask> = {
    title: '',
    description: '',
    priority: 'medium',
    category: '',
    completed: false
  };

  columnDefs: ColDef[] = [
    { field: 'title', sortable: true, filter: true },
    { field: 'category', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
    {
      field: 'completed',
      sortable: true,
      filter: true,
      cellRenderer: 'checkboxRenderer'
    }
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true
  };

  constructor(private taskService: TaskService) {}

  q1Tasks = computed(() => 
    this.taskService.getTimeQuadrantTasks()().filter(task => task.quadrant === 1)
  );

  q2Tasks = computed(() => 
    this.taskService.getTimeQuadrantTasks()().filter(task => task.quadrant === 2)
  );

  q3Tasks = computed(() => 
    this.taskService.getTimeQuadrantTasks()().filter(task => task.quadrant === 3)
  );

  q4Tasks = computed(() => 
    this.taskService.getTimeQuadrantTasks()().filter(task => task.quadrant === 4)
  );

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }

  addTask(quadrant: 1 | 2 | 3 | 4) {
    this.selectedQuadrant = quadrant;
    this.taskDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.taskDialog.nativeElement.close();
    this.resetNewTask();
  }

  onSubmitTask() {
    if (!this.newTask.title) return;

    const task: TimeQuadrantTask = {
      id: crypto.randomUUID(),
      title: this.newTask.title!,
      description: this.newTask.description || '',
      priority: this.newTask.priority as 'low' | 'medium' | 'high',
      category: this.newTask.category || '',
      completed: false,
      quadrant: this.selectedQuadrant,
      created: new Date(),
      modified: new Date()
    };

    this.taskService.addTimeQuadrantTask(task);
    this.closeDialog();
  }

  private resetNewTask() {
    this.newTask = {
      title: '',
      description: '',
      priority: 'medium',
      category: '',
      completed: false
    };
  }
}
