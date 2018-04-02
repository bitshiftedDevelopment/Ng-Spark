export interface Article {
  title: string; // Article title
  author: string; // Article author
  content: string; // Article body
  metadata: ArticleMetadata; // Defined below
}

export interface ArticleMetadata {
  postDate: string; // Article posting date
  published: boolean; // Whether article is public or not
  subsOnly: boolean; // Whether or not the article is available to unsubscribers
}
