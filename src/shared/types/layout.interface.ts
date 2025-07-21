export type ILayoutNames =
  | "home"
  | "blog"
  | "authors"
  | "about"
  | "contacts"
  | "cases"
  | "services"
  | "solutions"
  | "privacy"

export type IModuleTemplates =
  | "banner"
  | "service"
  | "how_we_perform"
  | "who_we_are"
  | "order_consultation"
  | "technologies"
  | "blog"
  | "reviews"
  | "questions"

// export interface ILayout {
//   slug: string
//   title: string
//   meta_h1: string
//   meta_description: string
//   meta_title: string
//   meta_keywords: string
//   robots?: IRobots
//   modules?: IModule[]
// }

export interface IRobots {
  index: string
  follow: string
}

// export interface IModule {
//   template: IModuleTemplates
//   // settings: Record<string, unknown>
//   settings: any
// }

export interface IBreadCrumbsItem {
  type: string
  slug: string
  titleKey: string
}
