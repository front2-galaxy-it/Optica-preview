export interface FormData {
  name: string
  surname: string
  patronymic: string
  birthDate: string
  phone: string
  email: string
  oldPassword: string
  newPassword: string
  reNewPassword: string
  vacancy: string
  policyAgree: boolean
  file: FileList
}

export interface AddressData {
  address: string
  postOffice: string
  name: string
  surname: string
  patronymic: string
  phone: string
  city: string
  zipCode: string
  district: string
  street: string
  houseNumber: string
  houseHull: string
  apartments: string
}
