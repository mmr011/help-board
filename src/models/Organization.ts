import { Address } from "./Address"
import { User } from "./User"

export type Organization = {
  id: string,
  email: string,
  password?: string,
  jobs?: string[],
  users?: User[],
  address: Address
}
