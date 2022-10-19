import { IsEmail, IsNumber, IsPositive } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  name: string;
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 0,
  })
  @IsPositive()
  age?: number;

  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 0,
  })
  @IsPositive()
  type?: number;

  password: string;
  password_confirm: string;
}
