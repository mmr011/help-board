import { Address } from "./Address";
import { User } from "./User"

export type Job = {
  id: string,
  orgId: string,
  startDate: Date,
  endDate: Date,
  address: Address,
  participants: Participants
  capacity: number,
  full: boolean,
  title: string,
  description: string,
};

export type Participants = {
  count: number,
  users: User[]
};
