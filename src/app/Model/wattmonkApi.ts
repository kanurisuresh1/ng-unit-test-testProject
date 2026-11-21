// export type Root = wattMonkApi[]

export type Root = wattMonkApi[]

export interface wattMonkApi {
  id: number
  announcement: number
  status: boolean
  published_at: string
  created_at: string
  updated_at: string
  colorcode: string
  textcolor: string
  type: string
  usertype: string
  usergroup: string
  role: any
  users: any
}




// alertAnnoument

// export interface wattMonkApi {
//   id: number
//   status: boolean
//   type: string
//   role: any
//   announcement: string
//   colorcode: string
//   textcolor: string
//   usertype: string
//   usergroup?: Usergroup
//   users: any
// }

// export interface Usergroup {
//   id: number
//   name: string
//   description: string
//   status: boolean
//   created_at: string
//   updated_at: string
//   created_by: any
//   updated_by: any
//   announcement: number
// }
