export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface Post {
  type_of: string;
  id: number;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  last_comment_at: string;
  updated_at: string;
  social_image: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  cover_image: string;
  user: User;
  tag_list: string[];
  readable_publish_date: string;
  published_timestamp: string;
}
