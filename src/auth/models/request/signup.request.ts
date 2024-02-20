import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignupRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  // alphanumeric characters and - are valid
  // you can change this as you like
  @Matches(/^[a-zA-Z0-9\-]+$/)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @Matches(/^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$/)
  @MaxLength(20)
  firstName: string;

  @IsNotEmpty()
  @Matches(/^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$/)
  @MaxLength(20)
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @Matches(/^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$/)
  @MaxLength(20)
  middleName?: string;
}
