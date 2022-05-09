export class SubTaskDTO {
  AssignId:number;
  Project_Code:string;
  SubProject_Name :string;
  StartDate :Date;
  SubProject_DeadLine:Date;
  SubProject_Status :string;
  Project_Cost:number;
  TotalHours:number;
  SubtaskDetails_Json:string;
  ProjectPercentage:number;
  ProjectStatus:string;

  //Update Subtask Properties
  MasterCode:string;
  SubTask_ProjectCode:string;
  AssignTo:string;
  Attachments:string;
  FileToUpload:File;
  Formdata:FormData;
  Attachments2:string;
  Remarks:string;
  
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
  

}