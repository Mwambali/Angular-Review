import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getToken();
        if (token) {
            // Clone the request and add the JWT token to the 'Authorization' header
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Pass the cloned request with the JWT token to the next handler
            return next.handle(authReq);
        }

        // If no token is available, continue with the original request
        return next.handle(req);
    }
}




// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { AuthService } from './services/auth.service';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//     constructor(private authService: AuthService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (this.authService.isLoggedIn()) {
//             // If the user is authenticated, add the Authorization header with the token
//             const token = this.authService.getToken();
//             req = req.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//         }

//         return next.handle(req);
//     }
// }
