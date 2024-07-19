export interface NotionPage {
  id: string
  properties: {
    Name?: {
      title: Array<{
        plain_text: string
      }>
    }
  }
}

export interface NotionBlock {
  type: string
  paragraph?: {
    rich_text: Array<{
      plain_text: string
    }>
  }
  heading_1?: {
    rich_text: Array<{
      plain_text: string
    }>
  }
  heading_2?: {
    rich_text: Array<{
      plain_text: string
    }>
  }
  heading_3?: {
    rich_text: Array<{
      plain_text: string
    }>
  }
  bulleted_list_item?: {
    rich_text: Array<{
      plain_text: string
    }>
  }
  numbered_list_item?: {
    rich_text: Array<{
      plain_text: string
    }>
  }
  image?: {
    file?: {
      url: string
    }
    external?: {
      url: string
    }
  }
  code?: {
    language: string
    rich_text: Array<{
      plain_text: string
    }>
  }
}
