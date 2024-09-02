import { isAfter, isBefore } from "date-fns"

export default function isValidTicket(from: string | Date, to: string | Date) {
  const now = new Date()
  const isFromValid = isAfter(now, from) && isBefore(from, to)
  const isToValid = isBefore(now, to)
  return isFromValid && isToValid
}
