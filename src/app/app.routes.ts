import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WorkingDayTimetableComponent } from './components/working-day-timetable/working-day-timetable.component';
import { HolidayTimetableComponent } from './components/holiday-timetable/holiday-timetable.component';
import { HowWasMyDayComponent } from './components/how-was-my-day/how-was-my-day.component';
import { DailyTasksComponent } from './components/daily-tasks/daily-tasks.component';
import { WeeklyTasksComponent } from './components/weekly-tasks/weekly-tasks.component';
import { MonthlyTasksComponent } from './components/monthly-tasks/monthly-tasks.component';
import { QuarterlyTasksComponent } from './components/quarterly-tasks/quarterly-tasks.component';
import { SemiAnnualTasksComponent } from './components/semi-annual-tasks/semi-annual-tasks.component';
import { YearlyTasksComponent } from './components/yearly-tasks/yearly-tasks.component';
import { TasksGoalsComponent } from './components/tasks-goals/tasks-goals.component';
import { SmartGoalsComponent } from './components/smart-goals/smart-goals.component';
import { TimeQuadrantComponent } from './components/time-quadrant/time-quadrant.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'working-day-timetable', component: WorkingDayTimetableComponent },
  { path: 'holiday-timetable', component: HolidayTimetableComponent },
  { path: 'how-was-my-day', component: HowWasMyDayComponent },
  { path: 'daily-tasks', component: DailyTasksComponent },
  { path: 'weekly-tasks', component: WeeklyTasksComponent },
  { path: 'monthly-tasks', component: MonthlyTasksComponent },
  { path: 'quarterly-tasks', component: QuarterlyTasksComponent },
  { path: 'semi-annual-tasks', component: SemiAnnualTasksComponent },
  { path: 'yearly-tasks', component: YearlyTasksComponent },
  { path: 'tasks-goals', component: TasksGoalsComponent },
  { path: 'smart-goals', component: SmartGoalsComponent },
  { path: 'time-quadrant', component: TimeQuadrantComponent }
];
