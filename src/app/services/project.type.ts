import { User } from './user.type';
import { SubProject } from './subproject.type';
import { SubProjectStage } from './subprojectstage.type';

export interface Project {
  id?: string;
  name: string;
  createdBy?: User;
  createdOn?: string;
  updatedBy?: string;
  updatedOn?: string;
  responsible: User;
  description?: string;
  logo?: string;
  avatar?: string;
  status?: any;
  subprojects?: SubProject[];
  subprojectstage?: SubProjectStage[];
}
