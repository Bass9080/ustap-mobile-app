import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { 

   
  }

  
  system_profile(){

    return this.http.get(base_url() + 'System/get_system_profile');
  }

  login(data){
    return this.http.post('https://ustap.xyz/mobile/Authentication/signin',JSON.stringify(data))

  }

  jobs(){

    return this.http.get(base_url() + 'Jobs/get_all_job');
  }

  alumni(){

    return this.http.get(base_url() + 'AlumniList/get_all_alumni');
  }

  events() {
    return this.http.get(base_url() + 'Events/get_all_events');
  }

  recently_added_events(){
    return this.http.get(base_url() + 'Events/recently_added_events');
  }

  officials() {
    return this.http.get(base_url() + 'Officials/get_all_officials');
  }

  training() {
    return this.http.get(base_url() + 'Trainings/get_trainings');
  }

  getUserData(id) {
    return this.http.get(base_url() + 'Authentication/get_userdata?id='+id);
  }

  getPostData() {
     return this.http.get('https://ustap.xyz/api/PostApi/get_post');
  }

  get_alumni_selected(id){
    return this.http.get(base_url() + 'AlumniList/get_alumni_selected'+ '?id=' + id);

  }
  get_job_selected(id){
    return this.http.get(base_url() + 'Jobs/get_job_selected'+ '?id=' + id);

  }

  get_event_selected(id){

    return this.http.get(base_url() + 'Events/get_event_selected'+ '?id=' + id);

  }
  get_training_selected(id){

    return this.http.get(base_url() + 'Trainings/get_training_selected'+ '?id=' + id);

  }
  

}
function base_url() {

  // return 'http://192.168.254.112/ustap/mobile/';

  return 'https://hoity-toity-sedimen.000webhostapp.com/mobile/';
  
  
}

