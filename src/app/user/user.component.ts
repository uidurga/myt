import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  formGroup: FormGroup;
  Router: any;

  constructor(private authService:AuthServiceService,
    private router: Router,
    ) { }

  

  ngOnInit() {
    this.initform();
  }
  
  initform(){
    this.formGroup = new FormGroup({
      EmailAddress: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
      });
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.user(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert('hi');
        }
        else{
          alert('success');
          this.router.navigateByUrl('/schoolhome');
        }
      })
    }
  }

}
