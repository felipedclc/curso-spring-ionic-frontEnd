import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO

@Injectable()
export class ErrorInterceptor implements HttpInterceptor { 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
        console.log("Passou no interceptor");
        return next.handle(req) // CONTINUA A REQUISIÇÃO
        .catch((error, caught) => {

            let errorObj = error; // VARIÁVEL errorObj
            if (errorObj.error) { // SE TIVER O CAMPO ERROR
                errorObj = errorObj.error; // EXTRAINDO APENAS O CAMPO ERROR 
            }
            if (!errorObj.status) { // SE O errorObj NÃO TIVER O CAMPO STATUS(NÃO SERÁ JSON)
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor:"); 
            console.log(errorObj); // MOSTRANDO O ERRO NO CONSOLE

            return Observable.throw(errorObj); // PROPAGANDO O ERRO
        }) as any;
    }
}

export const ErrorInterceptorProvider = { // EXIGÊNCIAS DO VS CODE
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};