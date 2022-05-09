export class UserDetailsDTO {
    UserName: string;
    Password: string;
    Active: boolean;
   
    Emp_Comp_No: string;
    SystemRole: string;
    Created_On: Date;
    Expired_On: Date;
    Loggedon: Date;
    Sales_Acc: string;
    Rejoin: boolean;
    DB_UserId: string;
    DB_Password: string;
   
    DateOfJoin: Date;
    Emp_Email: string;
    Emp_First_Name: string;
    Emp_Last_Name: string;
    Emp_Second_Name: string;
    Gender: string;
    Emp_Dept_No: string;
    TM_DisplayName:string;
    ProjectType: string;
    Team_Support:string;
   
    ProjectCodes: string;
    Project_Code: string;
    Exec_BlockName: string;
    Status: string;
    Emp_No: string;
    RowsOfPage: number;
    SelectedBlock_No:string;
    SelectedEmp_No:string;

    SelectedEmployee:string;
    SelectedCompany:string;
    SelectedStatus:string;
    
    PageNumber: number;
    PageSize:number;
    SearchText: string;
    PortfolioId:number; 
    IsPolicy:number;
}
