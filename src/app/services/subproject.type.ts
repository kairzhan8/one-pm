import { SubProjectStage } from './subprojectstage.type';

export interface SubProject {
  subProjectId: number;
  projectId: string;
  name: string;
  createdBy?: string;
  createdOn?: string;
  updatedBy?: string;
  updatedOn?: string;
  comment?: string;
  startDate?: string;
  dueDate?: string;
  status?: any;
  description: string;
  subprojectstage: SubProjectStage[];
}
