import { ReactNode } from "react";

export interface BookmarkContent {
  heading: string;
  text: string;
}

export interface BookmarksLayouts {
  date: string;
  content: BookmarkContent[];
}

export interface imgData {
  date: string;
  img: string;
  text: string;
}

export interface FieldType {
  url?: string;
  title?: string;
  description?: string;
  tags?: string[];
  date?: string;
  img?: string;
};

export interface AdminLayout {
  children: ReactNode
}

export interface BlogPostContent {
  text: string;
  hashtags: string;
}

export interface BlogPost {
  date: string;
  content: BlogPostContent[];
}


