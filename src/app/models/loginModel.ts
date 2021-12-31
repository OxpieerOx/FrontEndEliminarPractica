import { ILoginRequest } from "../interfaces/loginRequest";

export class LoginModel implements ILoginRequest{
    password='';
    username='';
}