export class SubTaskDTO {
  AssignId:number;
  Project_Code:string;
  SubProject_Name :string;
  StartDate :Date;
  Start_Date: Date|string;
  Title:string;
  portfolio_id:any;
  End_Date: Date|string;
  Modified_DT: Date;
  message:any
  SubProject_DeadLine:Date;
  SubProject_Status :string;
  Project_Cost:number;
  TotalHours:number;
  SubtaskDetails_Json:string;
  AssigntaskDetails_Json:string;
  ProjectPercentage:number;
  ProjectStatus:string;
  selected_emp:any
  //Update Subtask Properties
  MasterCode:string;
  SubTask_ProjectCode:string;
  AssignTo:string;
  AssignedTo:string;
  Attachments:string;
  FileToUpload:File;
  Formdata:FormData;
  Attachments2:string;
  Remarks:string;
  file:any;
  SubtaskDescription:string;
  Duration:number;
  Emp_No:string;
  Comp_No:string;
  Team_Res:string;
  Team_Autho:string;
  Team_Coor:string;
  Team_Informer:string;
  Team_Support:string;
  Project_Owner:string;
  IsActive:string;
  Message:string;
  ProjectBlock:string;
  EmployeeName:string;

  RowsOfPage: number;
  PageNumber: number;
  PageSize:number;
  sort:string;

  startdate:any;
  enddate:any;

  EventNumber:string;
  auditor:string;
  owner:string;
  Schedule_id:string;

  submissionDate:string;
  type:string;
  deadline:string;

  PortfolioId:number;
}
