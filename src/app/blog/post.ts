export interface Post {
  title: string; // Post title
  author: string; // Post author
  content: string; // Post body
  metadata: PostMetadata; // Defined below
}

export interface PostMetadata {
  postDate: string; // Post posting date
  published: boolean; // Whether post is public or not
  subsOnly: boolean; // Whether or not the post is available to unsubscribers
}
