export interface IAddressProps {
  id: number
  label: string
  time: string
  coordinates: [number, number]
}
export interface IAddressListProps {
  address: string
  time: string
  master: string
  doctor: string
  otherServices?: string
  coords?: [number, number]
}
