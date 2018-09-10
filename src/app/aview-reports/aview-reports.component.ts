import { Component, OnInit } from '@angular/core';
import { TaskReport } from '../DoItNowClasses';
import { TaskReportService } from '../task-report.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-aview-reports',
  templateUrl: './aview-reports.component.html',
  styles: []
})
export class AViewReportsComponent implements OnInit {
  private reportObj: TaskReport;
  constructor(private q: TaskReportService) { }
  ngOnInit() {
    this.GetEmployee();
  }
  GetEmployee() {
    this.q.getTaskReport().subscribe(
      data => {
        this.reportObj = data['msg'];
      }
    );
  }
  downloadData(ReportData) {
    var filename = ReportData;
    this.q.downloadReport(filename).subscribe(
      data => {
        saveAs(data, filename)
      }
    );
  }
}
