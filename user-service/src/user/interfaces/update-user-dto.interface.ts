export interface UpdateUserDto {
  name: string;
  age?: number;
  type?: number;
  password: string;
  password_confirm: string;
}
