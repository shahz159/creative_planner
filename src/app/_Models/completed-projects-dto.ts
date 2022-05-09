export class CompletedProjectsDTO {
    //Calendar Event
    title: string;
    end: string;
    start: string;
    color: string;
    textColor: string;
    //
    Emp_No: string;
    Project_Name: string;
    Exec_BlockName: string;
    ReportType: string;
    TM_DisplayName: string;
    DeadLine: Date;
    Status: string;
    Mode: string;

    Assign_Id: number;
    Task_Name: string;
    Task_Description: string;
    Start_Date: Date;
    End_Date: Date;
    ProjectType: string;
    Employee: string;
    RowsOfPage: number;
    PageNumber: number;

    //Calendar Projects Properties
    // title:string;
    // date:Date;
    Project_Code: string;
    DPG: Date;
    Month: string;
    Year: string;

    //Raci Details//
    ProjectOwner: string;
    TeamRes: string;
    TeamAutho: string;
    TeamCoor: string;
    TeamInformer: string;
    TeamSupport: string;

    Client_Name: string;
    Com_Name: string;
    Project_Cost: string;
    Project_Description: string;
    //JSon Objects
    ProjectType_Json: string;
    Status_Json: string;
    Employee_Json: string;

    //Actual Data params
    JsonData_Json: string;
    SelectedStatus: string;
    SelectedEmp_No: string;
    SelectedBlock_No: string;
    PageSize: number;
    Project_SearchText: string;
    SubmissionType: number;
    SubmissionType1: string;
    Duration: number;
    Link_Status: boolean;
    CategoryId: number;
    Filter:string;
}
