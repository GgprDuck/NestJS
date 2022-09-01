import { CreateUserDto} from "./create-user.dto";
import { PartialType, OmitType } from '@nestjs/swagger';

export class UpdateCatDto extends PartialType(
    OmitType(CreateUserDto, ['_id'] as const),
  ) {}

