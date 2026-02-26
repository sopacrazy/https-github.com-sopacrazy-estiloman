import { Trend, Look, Store } from './types';

export const TRENDS: Trend[] = [
  {
    id: '1',
    name: 'Old Money',
    description: 'Elegância atemporal com peças clássicas e tecidos nobres.',
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop',
    tags: ['#classico', '#luxo', '#alfaiataria'],
    styleTips: ['Invista em camisas de linho', 'Mocassins são essenciais', 'Cores neutras como bege e marinho'],
    colors: ['#F5F5DC', '#000080', '#FFFFFF', '#8B4513']
  },
  {
    id: '2',
    name: 'Streetwear Urbano',
    description: 'Conforto e estilo das ruas com toques modernos e oversized.',
    imageUrl: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=800&auto=format&fit=crop',
    tags: ['#urbano', '#conforto', '#sneakers'],
    styleTips: ['Camisetas oversized', 'Calças cargo', 'Sneakers de edição limitada'],
    colors: ['#000000', '#808080', '#FFFFFF', '#FF0000']
  },
  {
    id: '3',
    name: 'Minimalista Moderno',
    description: 'O menos é mais. Peças essenciais com corte impecável.',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop',
    tags: ['#minimalismo', '#essencial', '#clean'],
    styleTips: ['Foque na qualidade do tecido', 'Evite logos grandes', 'Paleta monocromática'],
    colors: ['#FFFFFF', '#E0E0E0', '#424242', '#000000']
  },
  {
    id: '4',
    name: 'Casual Premium',
    description: 'O equilíbrio perfeito entre o despojado e o sofisticado.',
    imageUrl: 'https://images.unsplash.com/photo-1516257984877-a03a0152aa39?q=80&w=800&auto=format&fit=crop',
    tags: ['#casual', '#trabalho', '#versatil'],
    styleTips: ['Blazers com jeans escuro', 'Botas Chelsea', 'Relógios clássicos'],
    colors: ['#2F4F4F', '#A52A2A', '#708090', '#F0F8FF']
  }
];

export const LOOKS: Look[] = [
  {
    id: 'l1',
    trendId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
    items: ['Camisa Polo Branca', 'Calça Chino Bege', 'Mocassim Marrom']
  },
  {
    id: 'l2',
    trendId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop',
    items: ['Suéter de Lã Azul Marinho', 'Camisa Oxford', 'Calça de Alfaiataria Cinza']
  },
  {
    id: 'l3',
    trendId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=600&auto=format&fit=crop',
    items: ['Hoodie Oversized Preto', 'Calça Jogger Cinza', 'Air Jordan 1']
  }
];

export const STORES: Store[] = [
  {
    id: 's1',
    name: 'Zara Men',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg',
    rating: 4.5,
    distance: '1.2 km',
    styles: ['Old Money', 'Minimalista Moderno', 'Casual Premium']
  },
  {
    id: 's2',
    name: 'Reserva',
    logoUrl: 'https://picsum.photos/seed/reserva/100/100',
    rating: 4.8,
    distance: '2.5 km',
    styles: ['Casual Premium', 'Minimalista Moderno']
  },
  {
    id: 's3',
    name: 'Nike Store',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    rating: 4.9,
    distance: '0.8 km',
    styles: ['Streetwear Urbano']
  }
];

export const INSPIRATIONS = [
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=600&auto=format&fit=crop'
];
