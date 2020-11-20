import { Component, OnInit } from '@angular/core';
import { NodeService } from './../node.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public pdf_file = 'assets/testPdf.pdf';
  public files = [];
  public binaryString;
  public file_name;

  constructor(private _nodeService: NodeService) { }

  ngOnInit() {

    this._nodeService.getPdfFile().
    subscribe(data => {
        this.files = data;
        
        this.file_name = this.files[0].fileName
        this.binaryString = this.files[0].binaryString;
      }
    );

  }

}
