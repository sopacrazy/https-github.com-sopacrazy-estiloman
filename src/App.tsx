/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  Compass, 
  User, 
  Heart, 
  ChevronRight, 
  Star, 
  MapPin, 
  ArrowLeft,
  Share2,
  Bookmark,
  ShoppingBag,
  Filter,
  X
} from 'lucide-react';
import { TRENDS, LOOKS, STORES, INSPIRATIONS } from './mockData';
import { Trend, Look, Store } from './types';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'inspiration', icon: Compass, label: 'Inspira' },
    { id: 'search', icon: Search, label: 'Busca' },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex justify-between items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === tab.id ? 'text-white' : 'text-white/40'
          }`}
        >
          <tab.icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
          <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

const Header = ({ title, onSearchClick }: { title: string, onSearchClick?: () => void }) => (
  <header className="sticky top-0 left-0 right-0 bg-brand-bg/80 backdrop-blur-md z-40 px-6 py-6 flex justify-between items-center">
    <h1 className="text-2xl font-display italic font-semibold tracking-tight">{title}</h1>
    <div className="flex gap-4">
      {onSearchClick && (
        <button onClick={onSearchClick} className="p-2 bg-white/5 rounded-full">
          <Search size={20} />
        </button>
      )}
      <button className="p-2 bg-white/5 rounded-full">
        <Heart size={20} />
      </button>
    </div>
  </header>
);

interface TrendCardProps {
  trend: Trend;
  onClick: () => void;
  key?: React.Key;
}

const TrendCard = ({ trend, onClick }: TrendCardProps) => (
  <motion.div 
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 group cursor-pointer"
  >
    <img 
      src={trend.imageUrl} 
      alt={trend.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex gap-2 mb-3">
        {trend.tags.map(tag => (
          <span key={tag} className="text-[10px] font-semibold bg-white/20 backdrop-blur-md px-2 py-1 rounded-full uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-display italic font-bold mb-1">{trend.name}</h3>
      <p className="text-white/70 text-sm line-clamp-2 mb-4">{trend.description}</p>
      <button className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
        Ver Looks <ChevronRight size={16} />
      </button>
    </div>
  </motion.div>
);

interface StoreCardProps {
  store: Store;
  key?: React.Key;
}

const StoreCard = ({ store }: StoreCardProps) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 mb-3">
    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden p-2">
      <img src={store.logoUrl} alt={store.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-sm">{store.name}</h4>
      <div className="flex items-center gap-3 mt-1">
        <div className="flex items-center gap-1 text-yellow-500 text-xs">
          <Star size={12} fill="currentColor" />
          <span>{store.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-white/40 text-xs">
          <MapPin size={12} />
          <span>{store.distance}</span>
        </div>
      </div>
    </div>
    <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">
      Ir para Loja
    </button>
  </div>
);

// --- Views ---

const HomeView = ({ onTrendClick }: { onTrendClick: (trend: Trend) => void }) => (
  <div className="px-6 pb-24">
    <div className="mb-8">
      <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Tendências de Hoje</p>
      <h2 className="text-4xl font-display italic font-bold">Descubra seu Estilo</h2>
    </div>
    {TRENDS.map(trend => (
      <TrendCard key={trend.id} trend={trend} onClick={() => onTrendClick(trend)} />
    ))}
  </div>
);

const InspirationView = () => (
  <div className="px-4 pb-24">
    <div className="columns-2 gap-4">
      {INSPIRATIONS.map((img, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="relative mb-4 rounded-2xl overflow-hidden group"
        >
          <img src={img} alt="Inspiration" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full"><Heart size={20} /></button>
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full"><Bookmark size={20} /></button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SearchView = () => {
  const categories = ['Streetwear', 'Casual', 'Social', 'Minimalista', 'Old Money', 'Academia', 'Festa'];
  const [query, setQuery] = useState('');

  return (
    <div className="px-6 pb-24">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
        <input 
          type="text" 
          placeholder="Buscar estilos, roupas, ocasiões..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-white/30 transition-colors"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <h3 className="text-lg font-semibold mb-4">Categorias Populares</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button key={cat} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white hover:text-black transition-all">
            {cat}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4">Ocasiões</h3>
      <div className="grid grid-cols-2 gap-4">
        {['Trabalho', 'Encontro', 'Viagem', 'Casamento'].map(occ => (
          <div key={occ} className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
            <img src={`https://picsum.photos/seed/${occ}/400/225`} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bold tracking-wider uppercase text-sm">{occ}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileView = () => (
  <div className="px-6 pb-24">
    <div className="flex flex-col items-center mb-10">
      <div className="w-24 h-24 rounded-full border-2 border-white/20 p-1 mb-4">
        <img 
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <h2 className="text-2xl font-bold">Adriano Borges</h2>
      <p className="text-white/40 text-sm">Minimalista & Casual Premium</p>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-10 text-center">
      <div>
        <div className="text-xl font-bold">128</div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest">Salvos</div>
      </div>
      <div>
        <div className="text-xl font-bold">42</div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest">Seguindo</div>
      </div>
      <div>
        <div className="text-xl font-bold">15</div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest">Lojas</div>
      </div>
    </div>

    <div className="space-y-4">
      <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl">
        <div className="flex items-center gap-3">
          <Heart size={20} className="text-white/60" />
          <span>Meus Favoritos</span>
        </div>
        <ChevronRight size={18} className="text-white/20" />
      </button>
      <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl">
        <div className="flex items-center gap-3">
          <ShoppingBag size={20} className="text-white/60" />
          <span>Minhas Compras</span>
        </div>
        <ChevronRight size={18} className="text-white/20" />
      </button>
      <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl">
        <div className="flex items-center gap-3">
          <Filter size={20} className="text-white/60" />
          <span>Preferências de Estilo</span>
        </div>
        <ChevronRight size={18} className="text-white/20" />
      </button>
    </div>
  </div>
);

const TrendDetailView = ({ trend, onBack }: { trend: Trend, onBack: () => void }) => {
  const trendLooks = LOOKS.filter(l => l.trendId === trend.id);
  const relatedStores = STORES.filter(s => s.styles.includes(trend.name));

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-brand-bg z-50 overflow-y-auto no-scrollbar pb-24"
    >
      <div className="relative h-[60vh]">
        <img src={trend.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/40" />
        
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <button onClick={onBack} className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-3">
            <button className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <Share2 size={20} />
            </button>
            <button className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <Bookmark size={20} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-5xl font-display italic font-bold mb-2">{trend.name}</h2>
          <div className="flex gap-2">
            {trend.tags.map(tag => (
              <span key={tag} className="text-[10px] font-semibold bg-white/20 backdrop-blur-md px-2 py-1 rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-white/70 leading-relaxed mb-8">{trend.description}</p>

        <h3 className="text-xl font-bold mb-4">Dicas de Estilo</h3>
        <ul className="space-y-3 mb-10">
          {trend.styleTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-white/80">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
              {tip}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mb-4">Cores Predominantes</h3>
        <div className="flex gap-4 mb-10">
          {trend.colors.map(color => (
            <div key={color} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/10 shadow-lg" style={{ backgroundColor: color }} />
              <span className="text-[10px] text-white/40 font-mono">{color}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Looks Completos</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-10 -mx-6 px-6">
          {trendLooks.map(look => (
            <div key={look.id} className="min-w-[280px] bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <img src={look.imageUrl} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-4">
                <h4 className="font-semibold text-sm mb-2">Peças do Look:</h4>
                <div className="flex flex-wrap gap-2">
                  {look.items.map(item => (
                    <span key={item} className="text-[10px] bg-white/10 px-2 py-1 rounded-md text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {trendLooks.length === 0 && (
            <div className="w-full py-10 text-center text-white/40 italic">Mais looks em breve...</div>
          )}
        </div>

        <h3 className="text-xl font-bold mb-4">Onde Comprar</h3>
        <div className="space-y-4">
          {relatedStores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null);

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <HomeView onTrendClick={setSelectedTrend} />;
      case 'inspiration': return <InspirationView />;
      case 'search': return <SearchView />;
      case 'profile': return <ProfileView />;
      default: return <HomeView onTrendClick={setSelectedTrend} />;
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'home': return 'TrendMen';
      case 'inspiration': return 'Inspiração';
      case 'search': return 'Explorar';
      case 'profile': return 'Meu Perfil';
      default: return 'TrendMen';
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-white selection:text-black">
      <Header 
        title={getHeaderTitle()} 
        onSearchClick={activeTab !== 'search' ? () => setActiveTab('search') : undefined} 
      />
      
      <main className="animate-in fade-in duration-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedTrend && (
          <TrendDetailView 
            trend={selectedTrend} 
            onBack={() => setSelectedTrend(null)} 
          />
        )}
      </AnimatePresence>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
