import { Injectable, NotFoundException } from '@nestjs/common';
export interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: PostModel[] = [
  {
    id: 1,
    author: 'newjeans_official',
    title: '뉴진스 민지',
    content: '메이크업 고치고 있는 민지',
    likeCount: 10,
    commentCount: 5,
  },
  {
    id: 2,
    author: 'newjeans_official',
    title: '뉴진스 해린',
    content: '노래 연습 하고 있는 해린',
    likeCount: 10,
    commentCount: 5,
  },
  {
    id: 3,
    author: 'blackpink_official',
    title: '블랙핑크 로제',
    content: '춤 연습 하고 있는 로제',
    likeCount: 10,
    commentCount: 5,
  },
];
@Injectable()
export class PostsService {
  getAllPosts() {
    return posts;
  }

  getPostById(id: number) {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return posts.find((post) => post.id === +id);
  }

  createPost(author: string, title: string, content: string) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };
    posts.push(post);

    return post;
  }

  updatePost(postId: number, author: string, title: string, content: string) {
    const postIndex = posts.findIndex((post) => post.id === postId);
    const post = posts[postIndex];
    if (!post) throw new NotFoundException('Post not found');
    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;
    return post;
  }

  deletePost(postId: number) {
    const index = posts.findIndex((el) => el.id === postId);
    if (index === -1) return -1;
    posts.splice(index, 1);
    return 1;
  }
}
