export interface IAddressProps {
  id: number
  label: string
  time: string
  coordinates: [number, number]
}
export interface IAddressListProps {
  label: string
  time: string
  master: string
  doctor: string
  otherServices?: string
}
