export type User = {
  id: string,
  email: string,
  password?: string,
  orgOwner?: boolean,
  organizationIds?: string[],
  jobs?: string[]
}
