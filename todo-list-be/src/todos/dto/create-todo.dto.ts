import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEnum(['ACTIVE', 'COMPLETED'], {
        message: "Valid status required"
    })
    status: 'ACTIVE' | 'COMPLETED';
    details: string
}