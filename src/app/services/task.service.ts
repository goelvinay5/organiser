import { Injectable, Signal, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { TodoTask, TimeQuadrantTask, Goal } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private todoTasks = signal<TodoTask[]>([]);
  private timeQuadrantTasks = signal<TimeQuadrantTask[]>([]);
  private goals = signal<Goal[]>([]);

  constructor(private storageService: StorageService) {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const savedTodoTasks = this.storageService.get<TodoTask[]>('todoTasks') || [];
    const savedQuadrantTasks = this.storageService.get<TimeQuadrantTask[]>('quadrantTasks') || [];
    const savedGoals = this.storageService.get<Goal[]>('goals') || [];

    this.todoTasks.set(savedTodoTasks);
    this.timeQuadrantTasks.set(savedQuadrantTasks);
    this.goals.set(savedGoals);
  }

  // Todo Tasks
  getTasks(): Signal<TodoTask[]> {
    return this.todoTasks;
  }

  addTask(task: TodoTask) {
    const newTasks = [...this.todoTasks(), task];
    this.todoTasks.set(newTasks);
    this.storageService.save('todoTasks', newTasks);
  }

  updateTask(updatedTask: TodoTask) {
    const newTasks = this.todoTasks().map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.todoTasks.set(newTasks);
    this.storageService.save('todoTasks', newTasks);
  }

  deleteTask(taskId: string) {
    const newTasks = this.todoTasks().filter(task => task.id !== taskId);
    this.todoTasks.set(newTasks);
    this.storageService.save('todoTasks', newTasks);
  }

  // Time Quadrant Tasks
  getTimeQuadrantTasks(): Signal<TimeQuadrantTask[]> {
    return this.timeQuadrantTasks;
  }

  addTimeQuadrantTask(task: TimeQuadrantTask) {
    const newTasks = [...this.timeQuadrantTasks(), task];
    this.timeQuadrantTasks.set(newTasks);
    this.storageService.save('quadrantTasks', newTasks);
  }

  updateTimeQuadrantTask(updatedTask: TimeQuadrantTask) {
    const newTasks = this.timeQuadrantTasks().map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.timeQuadrantTasks.set(newTasks);
    this.storageService.save('quadrantTasks', newTasks);
  }

  deleteTimeQuadrantTask(taskId: string) {
    const newTasks = this.timeQuadrantTasks().filter(task => task.id !== taskId);
    this.timeQuadrantTasks.set(newTasks);
    this.storageService.save('quadrantTasks', newTasks);
  }

  // Goals
  getGoals(): Signal<Goal[]> {
    return this.goals;
  }

  addGoal(goal: Goal) {
    const newGoals = [...this.goals(), goal];
    this.goals.set(newGoals);
    this.storageService.save('goals', newGoals);
  }

  updateGoal(updatedGoal: Goal) {
    const newGoals = this.goals().map(goal =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    this.goals.set(newGoals);
    this.storageService.save('goals', newGoals);
  }

  deleteGoal(goalId: string) {
    const newGoals = this.goals().filter(goal => goal.id !== goalId);
    this.goals.set(newGoals);
    this.storageService.save('goals', newGoals);
  }
}