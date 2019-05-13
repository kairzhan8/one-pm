import { Injectable } from '@angular/core';
import { SubProject } from './subproject.type';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubprojectService {
  private subprojects: SubProject[] = [
    {
      subProjectId: 1,
      projectId: '1',
      name: 'Forte МБИ',
      description: 'Mobile Internet banking',
      comment: 'finish',
      startDate: '12.12.2018',
      dueDate: '12.12.2019',
      subprojectstage: [
        {
          subProjectId: 1,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11,
          comment: 'finish',
          startDate: '12.12.2018',
          dueDate: '12.12.2019'
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 15,
          comment: 'finish',
          startDate: '12.12.2018',
          dueDate: '12.12.2019'
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 16
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 17
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 18
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: null,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: null
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 20
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 21
        },
        {
          subProjectId: 1,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 22
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        }
      ]
    },
    {
      subProjectId: 1,
      projectId: '4',
      name: 'Forte МБИ',
      description: 'Mobile Internet banking',
      comment: 'finish',
      startDate: '12.12.2018',
      dueDate: '12.12.2019',
      subprojectstage: [
        {
          subProjectId: 1,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11,
          comment: 'finish',
          startDate: '12.12.2018',
          dueDate: '12.12.2019'
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 15,
          comment: 'finish',
          startDate: '12.12.2018',
          dueDate: '12.12.2019'
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 16
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 17
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 18
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: null,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: null
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 20
        },
        {
          subProjectId: 1,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 21
        },
        {
          subProjectId: 1,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 22
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 1,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
      ]
    },
    {
      subProjectId: 2,
      projectId: '1',
      name: 'Модуль чата и чат-бота',
      description: 'Chat bot',
      subprojectstage: [
        {
          subProjectId: 2,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: null
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 2,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        }
      ]
    },
    {
      subProjectId: 3,
      projectId: '1',
      name: 'АРМ администартора',
      description: 'APM',
      subprojectstage: [
        {
          subProjectId: 3,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        }
      ]
    },
    {
      subProjectId: 3,
      projectId: '2',
      name: 'АРМ администартора 2',
      description: 'APM',
      subprojectstage: [
        {
          subProjectId: 3,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        }
      ]
    },
    {
      subProjectId: 3,
      projectId: '2',
      name: 'АРМ администартора 2',
      description: 'APM',
      subprojectstage: [
        {
          subProjectId: 3,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        }
      ]
    },
    {
      subProjectId: 3,
      projectId: '3',
      name: 'АРМ администартора 3',
      description: 'APM',
      subprojectstage: [
        {
          subProjectId: 3,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        }
      ]
    },
    {
      subProjectId: 3,
      projectId: '3',
      name: 'АРМ администартора 3',
      description: 'APM',
      subprojectstage: [
        {
          subProjectId: 3,
          stageId: 1,
          projectStage: 'businessAnalysis',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 2,
          projectStage: 'design',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 3,
          projectStage: 'backend',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'web',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'webAdaptive',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidMobile',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'iosTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'androidTab',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 4,
          projectStage: 'frontend',
          projectPlatform: 'windows',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },
        {
          subProjectId: 3,
          stageId: 5,
          projectStage: 'QA',
          projectPlatform: '',
          usTotal: 100,
          usToDo: 25,
          usInProgress: 75,
          usCheck: 20,
          usDone: 11
        },

      ]
    },


  ];

  constructor() { }

  getSubprojects(): Observable<SubProject[]> {
    return of(this.subprojects);
  }
}
