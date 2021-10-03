import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class SignupPageForm {

    private formBuilder : FormBuilder;
    private form : FormGroup; 

    constructor (formBuilder : FormBuilder) {
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }


    createForm() : FormGroup {
        return this.formBuilder.group({
            first_name : ['', [Validators.required]],
            middle_name : ['', [Validators.required]],
            last_name : ['', [Validators.required]],
            email : ['', [Validators.required, Validators.email]],
            phone_number : ['', [Validators.required]],
            image : ['', [Validators.required]],
           
        })
    } 
    getForm() : FormGroup {

        return this.form;

    }
} 