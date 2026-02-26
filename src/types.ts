export interface Trend {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  styleTips: string[];
  colors: string[];
}

export interface Look {
  id: string;
  trendId: string;
  imageUrl: string;
  items: string[];
}

export interface Store {
  id: string;
  name: string;
  logoUrl: string;
  rating: number;
  distance: string;
  styles: string[];
}

export interface User {
  name: string;
  avatar: string;
  preferences: string[];
  favorites: string[];
}
