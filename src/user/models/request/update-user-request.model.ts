import {
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Matches,
  MaxLength,
} from 'class-validator';

export class UpdateUserRequest {
  @IsOptional()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9\-]+$/)
  @MaxLength(20)
  username?: string;

  @IsOptional()
  @IsNotEmpty()
  @Matches(/^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ]+$/)
  @MaxLength(20)
  firstName?: string;

  @IsOptional()
  @IsNotEmpty()
  @Matches(/^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$/)
  @MaxLength(40)
  lastName?: string;

  @IsOptional()
  @IsNotEmpty()
  @MaxLength(40)
  @Matches(/^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$/)
  middleName?: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @Matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
  birthDate?: string | null; // ISO Date
}
