import { ApiProperty } from "@nestjs/swagger";

import { IsNotEmpty } from "class-validator";

export class RejectFriendRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;
}
