export class Employee {
    public _id?: string;
    public Name: string;
    public Address: string;
    public Email: string;
    public Password: string;
}
export class Task {
    public _id?: string;
    public TaskName: string;
    public Desc: string;
    public AssignDate: Date;
    public CompleteDate: Date;
    public MemberEmail: string;
}
export class TaskReport {
    public _id?: string;
    public TaskName: string;
    public Email: string;
    public Des: string;
    public AssignDate: string;
    public ReportData: string;
}
