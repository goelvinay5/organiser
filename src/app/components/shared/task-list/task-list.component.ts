import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, GridApi, ICellRendererParams } from 'ag-grid-community';
import { BaseTask } from '../../../models/task.interface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridModule],
  template: `
    <div class="task-list-container">
      <!-- Search and filters -->
      <div class="filters">
        <div class="search-box">
          <input type="text" [(ngModel)]="searchText" placeholder="Search tasks..." (input)="onFilterChange()">
        </div>
        <div class="filter-options">
          <select [(ngModel)]="priorityFilter" (change)="onFilterChange()">
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select [(ngModel)]="statusFilter" (change)="onFilterChange()">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <ng-content select="[additionalFilters]"></ng-content>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid-container ag-theme-alpine">
        <ag-grid-angular
          [rowData]="filteredTasks"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [rowSelection]="'multiple'"
          (gridReady)="onGridReady($event)"
          (selectionChanged)="onSelectionChanged($event)"
        >
        </ag-grid-angular>
      </div>

      <!-- Actions -->
      <div class="bulk-actions" *ngIf="selectedTasks.length > 0">
        <button (click)="onMarkComplete()">Mark Completed</button>
        <button (click)="onDelete()">Delete Selected</button>
        <ng-content select="[additionalActions]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: BaseTask[] = [];
  @Input() columnDefs: ColDef[] = [];
  @Input() showTags: boolean = false;

  @Output() taskUpdate = new EventEmitter<BaseTask>();
  @Output() taskDelete = new EventEmitter<string[]>();
  @Output() selectionChange = new EventEmitter<BaseTask[]>();
  @Output() filterChange = new EventEmitter<{
    search: string;
    priority: string;
    status: string;
  }>();

  private gridApi: GridApi | null = null;
  searchText: string = '';
  priorityFilter: string = 'all';
  statusFilter: string = 'all';
  selectedTasks: BaseTask[] = [];
  filteredTasks: BaseTask[] = [];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true,
    filter: true
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.updateFilteredTasks();
  }

  onFilterChange() {
    this.filterChange.emit({
      search: this.searchText,
      priority: this.priorityFilter,
      status: this.statusFilter
    });
    this.updateFilteredTasks();
  }

  onSelectionChanged(event: any) {
    this.selectedTasks = this.gridApi?.getSelectedRows() || [];
    this.selectionChange.emit(this.selectedTasks);
  }

  onMarkComplete() {
    this.selectedTasks.forEach(task => {
      this.taskUpdate.emit({ ...task, completed: true });
    });
    this.gridApi?.deselectAll();
  }

  onDelete() {
    if (confirm('Are you sure you want to delete the selected tasks?')) {
      const taskIds = this.selectedTasks.map(task => task.id);
      this.taskDelete.emit(taskIds);
      this.gridApi?.deselectAll();
    }
  }

  private updateFilteredTasks() {
    let filtered = [...this.tasks];
    
    if (this.searchText) {
      const search = this.searchText.toLowerCase();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(search) ||
        (task.description?.toLowerCase()?.includes(search) || false)
      );
    }

    if (this.priorityFilter !== 'all') {
      filtered = filtered.filter(task => task.priority === this.priorityFilter);
    }

    if (this.statusFilter !== 'all') {
      const completed = this.statusFilter === 'completed';
      filtered = filtered.filter(task => task.completed === completed);
    }

    this.filteredTasks = filtered;
  }
}