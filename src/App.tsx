/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from "motion/react";
import { Book, Feather, Map, Search, User } from "lucide-react";

interface Post {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Le Doute Méthodique : Tout balayer pour reconstruire",
    date: "14 Mars 1888",
    excerpt: "Pourquoi devrions-nous remettre en question tout ce que nous tenons pour vrai ? Plongée dans la méthode cartésienne.",
    content: "Le doute méthodique n'est pas un doute sceptique. Ce n'est pas le doute de celui qui ne croit en rien, mais celui de celui qui veut croire en tout avec certitude. Descartes nous invite à rejeter tout ce qui présente le moindre soupçon d'incertitude...",
    image: "https://picsum.photos/seed/philosophy-1/800/600?grayscale"
  },
  {
    id: 2,
    title: "Cogito Ergo Sum : La Pierre Angulaire",
    date: "2 Avril 1888",
    excerpt: "Comment une simple intuition est devenue le fondement de toute la philosophie moderne.",
    content: "Au milieu d'un océan de doutes, une seule chose reste indubitable : le fait même de douter. Si je doute, je pense. Et si je pense, j'existe. Cette révélation est le point de départ de toute la métaphysique de Descartes...",
    image: "https://picsum.photos/seed/philosophy-2/800/600?grayscale"
  },
  {
    id: 3,
    title: "Dualisme : L'Esprit et la Machine",
    date: "20 Mai 1888",
    excerpt: "L'homme est-il une machine ou une âme ? La séparation radicale entre la Res Cogitans et la Res Extensa.",
    content: "Pour Descartes, le monde se divise en deux substances distinctes : la pensée (l'esprit) et l'étendue (la matière). Cette vision a façonné notre compréhension du corps humain comme une horlogerie complexe habitée par une âme immatérielle...",
    image: "https://picsum.photos/seed/philosophy-3/800/600?grayscale"
  }
];

const NoteManuscrite = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/40 p-6 border-l-4 border-rust rotate-1 shadow-sm mb-12">
    <p className="font-script text-2xl text-rust leading-relaxed text-center">
      {children}
    </p>
  </div>
);

const OrnateDivider = () => (
  <div className="flex items-center justify-center gap-4 my-12 opacity-30">
    <div className="h-[1px] w-24 bg-ink"></div>
    <div className="rotate-45 w-2 h-2 bg-ink"></div>
    <div className="h-[1px] w-24 bg-ink"></div>
  </div>
);

const MenuItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <li className="group flex items-center gap-3 cursor-pointer py-2 border-b border-ink/10 hover:bg-gold/10 transition-colors px-2">
    <Icon className="w-4 h-4 text-rust" />
    <span className="font-display text-sm uppercase tracking-tighter group-hover:text-deep-burgundy">{text}</span>
  </li>
);

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 relative bg-parchment overflow-x-hidden">
      {/* Decorative Ornaments */}
      <div className="fixed top-0 left-0 w-full h-8 bg-burgundy/10 border-b border-gold/30 flex justify-center items-center gap-12 font-gothic text-gold text-sm z-20">
        <span>A.D. MDCXXXVII</span>
        <span className="text-xl">✠</span>
        <span>RENE DES CARTES</span>
      </div>

      <div className="max-w-7xl mx-auto pt-12 relative z-10">
        {/* Manuscript Header */}
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="medieval-title text-5xl md:text-8xl"
          >
            SCRIPTORIVM CARTESII
          </motion.div>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
          <p className="font-script text-3xl text-burgundy opacity-80 italic">La Sagesse Royale de René Descartes</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar / Profile Area */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="gold-frame p-4 bg-white/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full border border-walnut/10 pointer-events-none"></div>
              <div className="aspect-[4/5] bg-walnut grayscale contrast-125 border-2 border-gold/50 overflow-hidden relative">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg" 
                  alt="René Descartes - Frans Hals" 
                  className="w-full h-full object-cover opacity-90 sepia-[.2]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-burgundy/10 mix-blend-overlay"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-gothic text-2xl text-burgundy mb-1">René Des Cartes</h3>
                <p className="font-script text-xl text-gold">Philosophus ac Mathematicus</p>
                <div className="h-[1px] w-full bg-gold/30 my-4"></div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">
                  Le Maître de la Méthode
                </p>
              </div>
            </div>

            <div className="manuscript-border p-6 bg-white/10 italic">
              <h4 className="font-gothic text-xl text-burgundy border-b border-gold/50 mb-3">Index Librorum</h4>
              <ul className="space-y-3 font-serif text-sm">
                <li className="flex items-center gap-2 hover:text-burgundy transition-colors cursor-pointer">
                  <span className="text-gold">✦</span> Discours de la Méthode
                </li>
                <li className="flex items-center gap-2 hover:text-burgundy transition-colors cursor-pointer">
                  <span className="text-gold">✦</span> Méditations Métaphysiques
                </li>
                <li className="flex items-center gap-2 hover:text-burgundy transition-colors cursor-pointer">
                  <span className="text-gold">✦</span> Les Principes de la Philosophie
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Chronicle */}
          <main className="lg:col-span-9 space-y-16">
            <div className="bg-white/30 manuscript-border p-8 md:p-12">
              <NoteManuscrite>
                "Je pense donc je suis — Cogito ergo sum"
              </NoteManuscrite>
              
              {posts.map((post, idx) => (
                <div key={post.id}>
                  <motion.article 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group py-8"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-gothic text-gold text-lg">§ {post.id}</span>
                      <div className="h-px flex-grow bg-walnut/20"></div>
                      <span className="font-script text-xl text-burgundy">{post.date}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-gothic text-burgundy mb-8 group-hover:text-gold transition-colors duration-500">
                      {post.title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="gold-frame p-1 group-hover:rotate-1 transition-transform">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full grayscale sepia brightness-75 contrast-125"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <p className="illuminated-letter text-lg leading-relaxed text-justify mb-6 font-serif">
                          {post.content}
                        </p>
                        <button className="relative py-2 px-6 border-2 border-burgundy text-burgundy font-gothic text-xl hover:bg-burgundy hover:text-parchment transition-all duration-300">
                          Examinez le Parchemin
                        </button>
                      </div>
                    </div>
                  </motion.article>
                  {idx < posts.length - 1 && (
                    <div className="flex justify-center py-4 opacity-40">
                      <div className="text-gold shadow-sm">❧ ❧ ❧</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-20 pb-12 text-center">
          <div className="h-px bg-gold/30 mb-8"></div>
          <p className="font-gothic text-3xl text-burgundy mb-2">Finis Operis</p>
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-60">
            Impressum Lugduni • MDCXXXVII • René Descartes
          </p>
        </footer>
      </div>
    </div>
  );
}

