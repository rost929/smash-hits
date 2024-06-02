import { IsNotEmpty, IsEmail } from "class-validator";

export class UserDto {

    id: string;
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    name: string;

    @IsNotEmpty()
    password: string
}