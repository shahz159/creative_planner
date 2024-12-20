// import { Time } from '@angular/common';

export class PortfolioDTO {
    Portfolio_ID: number;
    Project_ID: number;
    _portfolioName:any;
    Portfolio_Name: string;
    Project_Code: string;
    Project_Name: string;
    Project_Description: string;
    Project_Type: string;
    Exec_BlockName: string;
    Exec_BlockNo: string;
    Project_Category: string;
    User_Name: string;
    User_ID: string;
    Project_End_Date: string;
    Status: string;
    Created_DT: Date;
    Created_By: string;
    Modified_By: string;
    Modified_DT: Date;
    SelectedProjects = [];
    SelectedPortIdsJson: any;
    //FlagId:number;
    Emp_SystemRole: string;
    TM_DisplayName: string;
    Team_Autho: string;
    Team_Res: string;
    Project_Owner: string;
    Emp_No: string;
    DeadLine: Date;
    SelectedProjectsJson: string
    EndDate: Date;
    LatestUpDate: Date;
    ProjectJson: any
    SharedPortfolioJson: any;
    JosnProjectsByPid: any;
    JsonStatusCount: any;
    EmployeeId: string;
    PageNumber: number;
    RowsOfPage: number;
    //------Shareed parameters -------//
    CompanyId: string;
    //EmployeeId: string;
    Shared_To: string;
    Preferences: string;
    Shared_On: Date;
    Shared_By: string;
    Com_Name: string;
    TM_Coor: string;
    Team_informer: string;
    Team_Support: string;
    Project_Auditor: string;
    Remarks: string;
    DurationTime: string;
    Project_Block: string;
    Delaydays: number;
    IsDeleted: boolean;
    DeletedBy: string;
    SharedbyEmpNo: string;
    Project_Cost: number;
    ReportType: string;
    Deleted_By: string;
    ProjectsCount: number;
    Proj_Percentage: number;
    result: number;
    SearchText: string;
    TotalPortfolios: number;
}

