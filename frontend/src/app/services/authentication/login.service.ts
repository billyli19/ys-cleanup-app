import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor() {}

    getAllUsers(): User[] {
        return [];
    }
}