import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ ApiServiceService]
})
export class PrincipalComponent implements OnInit {
  estrofe : String;
  constructor(public api: ApiServiceService) {
    this.estrofe = this.api.estouVivo();
    
  }

  ngOnInit() {
  }

}
