export class CreateTodoDto {
    name: string;
    status: 'ACTIVE' | 'COMPLETED';
    details: string
}