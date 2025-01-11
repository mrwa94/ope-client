
//Tester
export type Task = {
  id: string;
  reportId: number;
  numberReported: number;
  title: string;
  date: Date;
  sourceReport: string;
  description: string;
  priority: Priority;
  status: string;
  assignee: string;
  serviceName: string;
  serviceId: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
  dueDate: Date;
};

export type RequestTasks = {
  id: string;
  serviceId: number;
  requestNumber: number;
  description: string;
  name: string;
  developerName: string;
  testerHelperName: string;
  analysisName: string;
  designName: string;
  files: string;
  status: string;
  time: number;
  timeSpent: number;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
};

export type Services = 
  {
    id: string;
    serviceId: number;
    tester: string;
    description: string;
    name: string;
    developerName: string;
    testerHelperName: string;
    analysisName: string;
    designName: string;
    files: string;
  }


export type Priority = {
  name: string;
  color: string;
};

export enum IssueCategory {
  Functionality = "وظيفة",
  Gis = "GIS",
  Enhancement = "تحسين متكرر",
  Database = "قاعدة بيانات",
  Security = "حماية البيانات",
  Performance = "الأداء",
  Permissions = "مشاكل الصلاحيات",
  Style = "واجهات المستخدم",
  Syntax = "أخطاء إملائية",
  integration = "تكامل",
}

export type issuesTypes = {
  id: string;
  name: IssueCategory;
};


//tester administration


