interface Author {
  _id: string;
  username: string;
  name: string;
  surname: string;
}

// Interface para os comentários (vazia por enquanto, pode ser expandida conforme necessário)
export interface Comment {
  _id: string;
  author: Author;
  content: string;
  // Adicione os campos relevantes para o comentário
}

interface Like {
  _id: string;
}

// Interface para o post
export interface Post {
  __v: number;
  _id: string;
  author: Author;
  comments: Comment[];
  content: string;
  createdAt: string; // ou `Date` se você preferir trabalhar com objetos Date
  likes: Like[]; // Pode ser mais especifico se você souber a estrutura dos likes
  updatedAt: string; // ou `Date` se você preferir trabalhar com objetos Date
}
