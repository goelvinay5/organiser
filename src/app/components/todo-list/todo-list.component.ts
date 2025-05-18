import { Component, ViewChild, ElementRef, computed, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { TaskService } from '../../services/task.service';
import { TodoTask, BaseTask } from '../../models/task.interface';
import { TaskListComponent } from '../shared/task-list/task-list.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskListComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoListComponent {
  @ViewChild('taskDialog') taskDialog!: ElementRef<HTMLDialogElement>;

  editingTask: boolean = false;
  tagInput: string = '';
  newTask: Partial<TodoTask> = this.getEmptyTask();

  tasks = computed(() => this.taskService.getTasks()());

  columnDefs: ColDef[] = [
    {
      field: 'completed',
      headerName: 'Status',
      width: 100,
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    { field: 'title', flex: 2 },
    { field: 'priority' },
    { field: 'tags', valueFormatter: params => params.value?.join(', ') || '' },
    {
      field: 'dueDate',
      valueFormatter: params => params.value ? new Date(params.value).toLocaleDateString() : ''
    }
  ];

  constructor(private taskService: TaskService) {}

  openAddTaskDialog() {
    this.editingTask = false;
    this.resetNewTask();
    this.taskDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.taskDialog.nativeElement.close();
    this.resetNewTask();
  }

  onSubmitTask() {
    if (!this.newTask.title) return;

    const tags = this.tagInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const task: TodoTask = {
      id: crypto.randomUUID(),
      title: this.newTask.title!,
      description: this.newTask.description || '',
      priority: this.newTask.priority as 'low' | 'medium' | 'high',
      completed: false,
      tags: tags,
      created: new Date(),
      modified: new Date(),
      dueDate: this.newTask.dueDate
    };

    this.taskService.addTask(task);
    this.closeDialog();
  }

  onTaskUpdate(task: BaseTask) {
    this.taskService.updateTask(task as TodoTask);
  }

  onTaskDelete(taskIds: string[]) {
    taskIds.forEach(id => this.taskService.deleteTask(id));
  }

  onSelectionChange(tasks: BaseTask[]) {
    // Handle selection if needed
  }

  onFilterChange(filters: { search: string; priority: string; status: string }) {
    // Handle filter changes if needed
  }

  private resetNewTask() {
    this.newTask = this.getEmptyTask();
    this.tagInput = '';
  }

  private getEmptyTask(): Partial<TodoTask> {
    return {
      title: '',
      description: '',
      priority: 'medium',
      tags: [],
      completed: false
    };
  }
}
