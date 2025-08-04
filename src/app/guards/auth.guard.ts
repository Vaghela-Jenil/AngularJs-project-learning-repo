import { CanActivate, CanActivateFn } from "@angular/router";
import { inject, Inject } from "@angular/core";
import { AuthServiseTs } from "../services/auth.servise.ts";
import { Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthServiseTs);
    const router = inject(Router);

    if (auth.check()) {
        return true;
    }
    else {
        return router.navigate(['/login']);
    }
}
