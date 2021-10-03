import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { EMPTY, Observable } from "rxjs";
import { finalize, retryWhen } from "rxjs/operators";

@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {
    constructor (private LoadingCtrl : LoadingController) {

    }

    intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        this.LoadingCtrl.getTop().then(hasLoading => {
            if(!hasLoading){
                this.LoadingCtrl.create({
                    spinner: 'circular',
                    translucent : true
                }).then(loading => loading.present());
            }
        });

        return next.handle(request).pipe(

          
            finalize(() => {
                this.LoadingCtrl.getTop().then(hasLoading => {
                    if(hasLoading) {
                        this.LoadingCtrl.dismiss();
                    }
                })
            })
        );
    }
}