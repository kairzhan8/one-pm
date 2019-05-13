export interface SubProjectStage {
  subProjectId: number;
  stageId: number;
  createdBy?: string;
  createdOn?: string;
  updatedBy?: string;
  updatedOn?: string;
  projectStage: string;
  projectPlatform: string;
  usTotal?: number;
  usToDo?: number;
  usInProgress?: number;
  usCheck?: number;
  usDone?: number;
  startDate?: string;
  dueDate?: string;
  comment?: string;
}
