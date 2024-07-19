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
}
