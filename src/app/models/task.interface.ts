export interface BaseTask {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  created: Date;
  modified: Date;
  dueDate?: Date;
}

export interface TodoTask extends BaseTask {
  tags: string[];
}

export interface TimeQuadrantTask extends BaseTask {
  quadrant: 1 | 2 | 3 | 4; // 1: Important & Urgent, 2: Important & Not Urgent, 3: Not Important & Urgent, 4: Not Important & Not Urgent
  category: string;
}

export interface Goal extends BaseTask {
  specific: string;
  measurable: string;
  achievable: string;
  relevant: string;
  timeBound: {
    startDate: Date;
    endDate: Date;
  };
  status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
  progress: number;
  tasks: string[];
  measurements?: string[];
}
