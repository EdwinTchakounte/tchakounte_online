import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag, Twitter, Linkedin, MessageCircle, Copy, Check } from 'lucide-react';

// Simulation des données d'article
const blogPosts = {
  '1': {
    title: 'Architecture Microservices avec Python et Docker',
    content: `
      <h2>Introduction</h2>
      <p>Dans le monde du développement moderne, l'architecture microservices est devenue incontournable pour créer des applications scalables et maintenables. Ce guide vous accompagne dans la création d'une architecture complète avec Python et Docker.</p>
      
      <h2>1. Conception de l'Architecture</h2>
      <p>Une architecture microservices bien conçue commence par la décomposition fonctionnelle. Chaque service doit avoir une responsabilité unique et bien définie. Nous utiliserons FastAPI pour créer des services légers et performants.</p>
      
      <h2>2. Containerisation avec Docker</h2>
      <p>Docker permet d'encapsuler chaque microservice dans un conteneur isolé. Cela garantit la cohérence entre les environnements de développement, test et production. Nous créerons des Dockerfiles optimisés pour Python.</p>
      
      <h2>3. Communication Inter-Services</h2>
      <p>Les microservices communiquent via des APIs REST ou des messages asynchrones. Nous implémenterons des patterns comme Circuit Breaker et Retry pour assurer la résilience du système.</p>
      
      <h2>4. Monitoring et Observabilité</h2>
      <p>Un système distribué nécessite une observabilité complète. Nous intégrerons des outils de logging, métriques et tracing pour surveiller la santé de nos services.</p>
      
      <h2>Conclusion</h2>
      <p>L'architecture microservices avec Python et Docker offre une base solide pour des applications modernes. Cette approche favorise la scalabilité, la maintenabilité et l'agilité de développement.</p>
    `,
    date: '21 Août 2025 - 09:15',
    readTime: '12 min',
    category: 'Architecture',
    author: 'Edwin Tchamba',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Python', 'FastAPI', 'Docker', 'Microservices', 'Architecture']
  },
  '2': {
    title: 'Développement d\'API REST avec FastAPI et PostgreSQL',
    content: `
      <h2>Introduction à FastAPI</h2>
      <p>FastAPI révolutionne le développement d'APIs en Python avec sa syntaxe moderne, sa validation automatique et sa documentation interactive. Ce framework combine performance et simplicité d'utilisation.</p>
      
      <h2>1. Configuration de l'Environnement</h2>
      <p>Nous commençons par configurer un environnement virtuel Python et installer FastAPI, Uvicorn, SQLAlchemy et Pydantic. Cette stack offre tout le nécessaire pour créer des APIs robustes.</p>
      
      <h2>2. Modélisation des Données</h2>
      <p>SQLAlchemy nous permet de définir nos modèles de données avec une approche ORM. Nous créerons des relations complexes et optimiserons les requêtes pour PostgreSQL.</p>
      
      <h2>3. Authentification JWT</h2>
      <p>L'authentification JWT sécurise nos endpoints. Nous implémenterons un système complet avec refresh tokens, gestion des rôles et middleware de sécurité.</p>
      
      <h2>4. Validation et Sérialisation</h2>
      <p>Pydantic assure la validation automatique des données d'entrée et de sortie. Cette approche garantit la cohérence et la sécurité de notre API.</p>
      
      <h2>Tests et Documentation</h2>
      <p>FastAPI génère automatiquement une documentation interactive. Nous ajouterons des tests unitaires et d'intégration pour assurer la qualité du code.</p>
    `,
    date: '21 Août 2025 - 14:30',
    readTime: '15 min',
    category: 'Backend',
    author: 'Edwin Tchamba',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['FastAPI', 'PostgreSQL', 'JWT', 'Pydantic', 'API']
  },
  '3': {
    title: 'Machine Learning avec Python : Classification d\'Images',
    content: `
      <h2>Introduction au Deep Learning</h2>
      <p>L'intelligence artificielle transforme notre façon de traiter les données visuelles. Ce guide pratique vous accompagne dans la création d'un modèle de classification d'images avec TensorFlow et Keras.</p>
      
      <h2>1. Préparation des Données</h2>
      <p>La qualité des données détermine la performance du modèle. Nous explorerons les techniques de préprocessing, normalisation et augmentation de données pour optimiser l'entraînement.</p>
      
      <h2>2. Architecture CNN</h2>
      <p>Les réseaux de neurones convolutionnels (CNN) excellent dans la reconnaissance d'images. Nous construirons une architecture optimisée avec des couches de convolution, pooling et dropout.</p>
      
      <h2>3. Entraînement et Optimisation</h2>
      <p>L'entraînement nécessite une stratégie d'optimisation. Nous utiliserons des techniques comme l'early stopping, la réduction du learning rate et la validation croisée.</p>
      
      <h2>4. Évaluation et Déploiement</h2>
      <p>L'évaluation du modèle utilise des métriques comme l'accuracy, la précision et le recall. Nous déploierons le modèle avec FastAPI pour créer une API de prédiction.</p>
      
      <h2>Conclusion</h2>
      <p>La classification d'images avec Python ouvre de nombreuses possibilités. Cette approche peut être adaptée à divers domaines : médical, automobile, sécurité, etc.</p>
    `,
    date: '21 Août 2025 - 16:45',
    readTime: '18 min',
    category: 'IA/ML',
    author: 'Edwin Tchamba',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Deep Learning']
  },

  '4': {
  title: 'React : Guide Complet pour Développeurs Modernes (Édition Longue)',
  content: `
    <div class="article-content">

      <p><em>Mise à jour : 25 août 2025 • Difficulté : Intermédiaire → Avancée • Durée de lecture : ~60 minutes</em></p>

      <h2>Table des matières</h2>
      <ol>
        <li><a href="#intro">Introduction & objectifs</a></li>
        <li><a href="#bases">Bases de React : composants, JSX, Virtual DOM</a></li>
        <li><a href="#hooks">Hooks essentiels et patterns</a></li>
        <li><a href="#etat-avance">Gestion d’état avancée (Context, Reducer, Redux Toolkit, React Query)</a></li>
        <li><a href="#routing">Routing, Layouts et code splitting</a></li>
        <li><a href="#perf">Performance : mémoïsation, Suspense, lazy, virtualisation</a></li>
        <li><a href="#forms">Formulaires (React Hook Form, Zod) & accessibilité</a></li>
        <li><a href="#tests">Tests (RTL/Jest), MSW, couverture</a></li>
        <li><a href="#archi">Architecture & dossiers, conventions, DX</a></li>
        <li><a href="#prod">Build, CI/CD, Docker, monitoring</a></li>
        <li><a href="#rsc">React 18+, Concurrency & Server Components (aperçu)</a></li>
        <li><a href="#recettes">Recettes pratiques (E-commerce, Dashboard, Chat temps réel)</a></li>
        <li><a href="#checklist">Checklist finale & ressources</a></li>
      </ol>

      <hr/>

      <h2 id="intro">1) Introduction & objectifs</h2>
      <p>
        Ce guide condensé mais complet vous accompagne de la base aux patterns avancés.
        Vous verrez comment structurer une app, optimiser les rendus, gérer l’état (local, global, serveur),
        tester et déployer en production. Tous les exemples sont en JavaScript/TypeScript prêt à copier.
      </p>

      <div class="callout" style="border-left:4px solid #3b82f6;padding:12px;background:#f8fafc">
        <strong>À la fin</strong> : vous saurez architecturer une application React moderne,
        choisir la bonne stratégie d’état, écrire des composants performants et testables,
        et mettre en production avec un pipeline robuste.
      </div>

      <h2 id="bases">2) Bases de React : composants, JSX, Virtual DOM</h2>
      <p>React est centré sur des composants déclaratifs. Le <em>Virtual DOM</em> permet des mises à jour minimales et performantes.</p>

      <h3>Composant fonctionnel minimal</h3>
      <pre><code class="language-jsx">
import React from 'react';

export function Hello({ name }) {
  return &lt;h1&gt;Bonjour, {name}!&lt;/h1&gt;;
}
      </code></pre>

      <h3>État local & événements</h3>
      <pre><code class="language-jsx">
import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () =&gt; setCount(c =&gt; c + 1);
  const decrement = () =&gt; setCount(c =&gt; Math.max(0, c - 1));

  return (
    &lt;div className="space-y-2"&gt;
      &lt;h2&gt;Compteur : {count}&lt;/h2&gt;
      &lt;div className="flex gap-2"&gt;
        &lt;button onClick={decrement}&gt;-&lt;/button&gt;
        &lt;button onClick={increment}&gt;+&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>JSX : expressions et conditions</h3>
      <pre><code class="language-jsx">
function Welcome({ user }) {
  return (
    &lt;header&gt;
      &lt;h1&gt;{user ? \`Salut, \${user.name}\` : 'Bienvenue'}&lt;/h1&gt;
      {user &amp;&amp; &lt;p&gt;Rôle : {user.role}&lt;/p&gt;}
    &lt;/header&gt;
  );
}
      </code></pre>

      <hr/>

      <h2 id="hooks">3) Hooks essentiels et patterns</h2>

      <h3>useState + useEffect (fetch avec annulation)</h3>
      <pre><code class="language-jsx">
import React, { useEffect, useState } from 'react';

export function Weather({ city }) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =&gt; {
    const ctrl = new AbortController();
    async function run() {
      try {
        setLoading(true);
        const res = await fetch(\`/api/weather?city=\${encodeURIComponent(city)}\`, { signal: ctrl.signal });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        setData(json);
        setErr(null);
      } catch (e) {
        if (e.name !== 'AbortError') setErr(e.message);
      } finally {
        setLoading(false);
      }
    }
    run();
    return () =&gt; ctrl.abort();
  }, [city]);

  if (loading) return &lt;p&gt;Chargement...&lt;/p&gt;;
  if (err) return &lt;p className="text-red-600"&gt;Erreur : {String(err)}&lt;/p&gt;;
  return (
    &lt;div&gt;
      &lt;h3&gt;{data.city}&lt;/h3&gt;
      &lt;div&gt;Temp: {data.temp}°C&lt;/div&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>useMemo & useCallback : mémoïsation ciblée</h3>
      <pre><code class="language-jsx">
import React, { useMemo, useCallback } from 'react';

export function SearchableList({ items, onPick }) {
  const [q, setQ] = React.useState('');
  const filtered = useMemo(
    () =&gt; items.filter(i =&gt; i.label.toLowerCase().includes(q.toLowerCase())),
    [items, q]
  );
  const handlePick = useCallback((id) =&gt; onPick(id), [onPick]);

  return (
    &lt;div&gt;
      &lt;input value={q} onChange={e =&gt; setQ(e.target.value)} placeholder="Rechercher..." /&gt;
      &lt;ul&gt;
        {filtered.map(i =&gt; (
          &lt;li key={i.id}&gt;&lt;button onClick={() =&gt; handlePick(i.id)}&gt;{i.label}&lt;/button&gt;&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>useRef : référence mutable + mesure DOM</h3>
      <pre><code class="language-jsx">
import React, { useRef, useEffect, useState } from 'react';

export function MeasureBox() {
  const ref = useRef(null);
  const [rect, setRect] = useState(null);

  useEffect(() =&gt; {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setRect({ w: Math.round(r.width), h: Math.round(r.height) });
  }, []);

  return (
    &lt;div&gt;
      &lt;div ref={ref} style={{ width: 300, height: 120, background: '#eef' }} /&gt;
      {rect &amp;&amp; &lt;p&gt;Taille: {rect.w}x{rect.h}&lt;/p&gt;}
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>Hook personnalisé (fetch générique)</h3>
      <pre><code class="language-jsx">
import { useEffect, useState } from 'react';

export function useApi(url, deps = []) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() =&gt; {
    let cancel = false;
    async function run() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        if (!cancel) setData(json);
      } catch (e) {
        if (!cancel) setErr(e);
      } finally {
        if (!cancel) setLoading(false);
      }
    }
    run();
    return () =&gt; { cancel = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, err, loading };
}
      </code></pre>

      <hr/>

      <h2 id="etat-avance">4) Gestion d’état avancée</h2>

      <h3>Context + useReducer (store léger)</h3>
      <pre><code class="language-jsx">
import React, { createContext, useReducer, useContext } from 'react';

const StateCtx = createContext(null);
const DispatchCtx = createContext(null);

const initial = { user: null, cart: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'login': return { ...state, user: action.payload };
    case 'logout': return { ...state, user: null, cart: [] };
    case 'add': return { ...state, cart: [...state.cart, action.payload] };
    default: return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    &lt;StateCtx.Provider value={state}&gt;
      &lt;DispatchCtx.Provider value={dispatch}&gt;{children}&lt;/DispatchCtx.Provider&gt;
    &lt;/StateCtx.Provider&gt;
  );
}

export const useAppState = () =&gt; useContext(StateCtx);
export const useAppDispatch = () =&gt; useContext(DispatchCtx);
      </code></pre>

      <h3>Redux Toolkit (slice moderne)</h3>
      <pre><code class="language-jsx">
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const todos = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    add: (state, action) =&gt; { state.items.push({ id: Date.now(), text: action.payload, done: false }); },
    toggle: (state, action) =&gt; {
      const t = state.items.find(x =&gt; x.id === action.payload);
      if (t) t.done = !t.done;
    }
  }
});

export const { add, toggle } = todos.actions;

const store = configureStore({ reducer: { todos: todos.reducer } });

export function TodoApp() {
  const items = useSelector(s =&gt; s.todos.items);
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  return (
    &lt;div&gt;
      &lt;input value={text} onChange={e =&gt; setText(e.target.value)} placeholder="Nouvelle tâche..." /&gt;
      &lt;button onClick={() =&gt; { if (text) dispatch(add(text)); setText(''); }}&gt;Ajouter&lt;/button&gt;
      &lt;ul&gt;{items.map(t =&gt; (
        &lt;li key={t.id}&gt;&lt;label&gt;&lt;input type="checkbox" checked={t.done} onChange={() =&gt; dispatch(toggle(t.id))} /&gt; {t.text}&lt;/label&gt;&lt;/li&gt;
      ))}&lt;/ul&gt;
    &lt;/div&gt;
  );
}

export function AppRoot() {
  return &lt;Provider store={store}&gt;&lt;TodoApp /&gt;&lt;/Provider&gt;;
}
      </code></pre>

      <h3>Gestion des données serveur (React Query)</h3>
      <pre><code class="language-jsx">
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const qc = new QueryClient();

function Products() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () =&gt; (await fetch('/api/products')).json(),
    staleTime: 60_000
  });

  if (isLoading) return &lt;p&gt;Chargement...&lt;/p&gt;;
  if (error) return &lt;p&gt;Erreur&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; refetch()}&gt;Rafraîchir&lt;/button&gt;
      &lt;ul&gt;{data.map(p =&gt; &lt;li key={p.id}&gt;{p.name} - {p.price}€&lt;/li&gt;)}&lt;/ul&gt;
    &lt;/div&gt;
  );
}

export function DataApp() {
  return &lt;QueryClientProvider client={qc}&gt;&lt;Products /&gt;&lt;/QueryClientProvider&gt;;
}
      </code></pre>

      <hr/>

      <h2 id="routing">5) Routing, Layouts et code splitting</h2>
      <pre><code class="language-jsx">
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = () =&gt; &lt;h1&gt;Accueil&lt;/h1&gt;;
const Product = lazy(() =&gt; import('./Product'));

function RootLayout() {
  return (
    &lt;div&gt;
      &lt;nav className="flex gap-3"&gt;
        &lt;Link to="/"&gt;Home&lt;/Link&gt;
        &lt;Link to="/product/42"&gt;Produit&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;main&gt;&lt;Outlet /&gt;&lt;/main&gt;
    &lt;/div&gt;
  );
}

export function RouterApp() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route element={&lt;RootLayout /&gt;}&gt;
          &lt;Route index element={&lt;Home /&gt;} /&gt;
          &lt;Route path="product/:id" element={
            &lt;Suspense fallback={&lt;p&gt;Chargement du produit...&lt;/p&gt;}&gt;
              &lt;Product /&gt;
            &lt;/Suspense&gt;
          } /&gt;
        &lt;/Route&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}
      </code></pre>

      <hr/>

      <h2 id="perf">6) Performance : mémoïsation, Suspense, virtualisation</h2>

      <h3>React.memo + comparaison personnalisée</h3>
      <pre><code class="language-jsx">
import React from 'react';

const Item = React.memo(function Item({ value, onClick }) {
  return &lt;button onClick={() =&gt; onClick(value.id)}&gt;{value.label}&lt;/button&gt;;
}, (prev, next) =&gt; prev.value.id === next.value.id &amp;&amp; prev.onClick === next.onClick);

export default Item;
      </code></pre>

      <h3>Virtualisation (liste large)</h3>
      <pre><code class="language-jsx">
import React, { useRef, useState, useMemo, useEffect } from 'react';

export function VirtualList({ items, row = 48, height = 480 }) {
  const ref = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const total = items.length * row;
  const start = Math.floor(scrollTop / row);
  const visibleCount = Math.ceil(height / row) + 2;
  const slice = useMemo(() =&gt; items.slice(start, start + visibleCount), [items, start, visibleCount]);

  useEffect(() =&gt; {
    const el = ref.current;
    if (!el) return;
    const onScroll = (e) =&gt; setScrollTop(e.target.scrollTop);
    el.addEventListener('scroll', onScroll);
    return () =&gt; el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    &lt;div ref={ref} style={{ height, overflow: 'auto' }}&gt;
      &lt;div style={{ height: total, position: 'relative' }}&gt;
        {slice.map((it, i) =&gt; (
          &lt;div key={start + i} style={{ position: 'absolute', top: (start + i) * row, height: row, left: 0, right: 0 }}&gt;
            {it.label}
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <hr/>

      <h2 id="forms">7) Formulaires (React Hook Form + Zod) & a11y</h2>
      <pre><code class="language-jsx">
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean().optional()
});

export function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: { email: '', password: '', remember: false }
  });

  const onSubmit = (values) =&gt; new Promise(r =&gt; setTimeout(() =&gt; r(console.log(values)), 800));

  return (
    &lt;form onSubmit={handleSubmit(onSubmit)} aria-label="Formulaire de connexion"&gt;
      &lt;label&gt;Email&lt;/label&gt;
      &lt;input type="email" {...register('email')} aria-invalid={!!errors.email} /&gt;
      {errors.email &amp;&amp; &lt;span role="alert"&gt;{errors.email.message}&lt;/span&gt;}

      &lt;label&gt;Mot de passe&lt;/label&gt;
      &lt;input type="password" {...register('password')} aria-invalid={!!errors.password} /&gt;
      {errors.password &amp;&amp; &lt;span role="alert"&gt;{errors.password.message}&lt;/span&gt;}

      &lt;label&gt;&lt;input type="checkbox" {...register('remember')} /&gt; Se souvenir de moi&lt;/label&gt;

      &lt;button disabled={isSubmitting}&gt;Se connecter&lt;/button&gt;
    &lt;/form&gt;
  );
}
      </code></pre>

      <hr/>

      <h2 id="tests">8) Tests (RTL, Jest), MSW</h2>
      <pre><code class="language-jsx">
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

test('incrémente et décrémente', async () =&gt; {
  const u = userEvent.setup();
  render(&lt;Counter /&gt;);
  await u.click(screen.getByText('+'));
  await u.click(screen.getByText('+'));
  expect(screen.getByText(/Compteur : 2/)).toBeInTheDocument();
  await u.click(screen.getByText('-'));
  expect(screen.getByText(/Compteur : 1/)).toBeInTheDocument();
});
      </code></pre>

      <h3>MSW (mocker une API)</h3>
      <pre><code class="language-jsx">
// setupTests.ts
import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
  rest.get('/api/products', (_req, res, ctx) =&gt; res(
    ctx.json([{ id: 1, name: 'Livre', price: 12 }])
  ))
);

beforeAll(() =&gt; server.listen());
afterEach(() =&gt; server.resetHandlers());
afterAll(() =&gt; server.close());
      </code></pre>

      <hr/>

      <h2 id="archi">9) Architecture & dossiers</h2>
      <pre><code class="language-txt">
src/
├─ app/                # Entrée, providers globaux, routes
├─ components/         # UI réutilisable (boutons, cartes, modals…)
├─ features/           # Domaines (cart, auth, products…)
│  └─ &lt;feature&gt;/
│     ├─ components/
│     ├─ hooks/
│     ├─ api/
│     └─ store/
├─ hooks/              # Hooks transverses
├─ lib/                # utilitaires (date, i18n, fetcher…)
├─ pages/              # (si React Router) pages/route units
├─ styles/             # CSS/Tailwind/tokens
└─ tests/              # setup tests + mocks
      </code></pre>

      <hr/>

      <h2 id="prod">10) Build, CI/CD, Docker, monitoring</h2>

      <h3>Vite config</h3>
      <pre><code class="language-js">
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2018',
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
});
      </code></pre>

      <h3>Dockerfile multi-stage</h3>
      <pre><code class="language-docker">
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
      </code></pre>

      <h3>Error Boundary + monitoring</h3>
      <pre><code class="language-jsx">
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) {
    // Envoyer à Sentry/LogRocket selon NODE_ENV
    console.error('Captured', error, info);
  }
  render() {
    if (this.state.hasError) return &lt;p&gt;Une erreur est survenue.&lt;/p&gt;;
    return this.props.children;
  }
}

export default ErrorBoundary;
      </code></pre>

      <hr/>

      <h2 id="rsc">11) React 18+, Concurrency & Server Components (aperçu)</h2>
      <pre><code class="language-jsx">
import { startTransition, useDeferredValue, useState } from 'react';

export function Search() {
  const [q, setQ] = useState('');
  const deferred = useDeferredValue(q);
  const [results, setResults] = useState([]);

  React.useEffect(() =&gt; {
    startTransition(() =&gt; {
      fetch('/api/search?q=' + encodeURIComponent(deferred))
        .then(r =&gt; r.json()).then(setResults);
    });
  }, [deferred]);

  return (
    &lt;div&gt;
      &lt;input value={q} onChange={e =&gt; setQ(e.target.value)} placeholder="Tapez..." /&gt;
      &lt;ul&gt;{results.map(r =&gt; &lt;li key={r.id}&gt;{r.title}&lt;/li&gt;)}&lt;/ul&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <hr/>

      <h2 id="recettes">12) Recettes pratiques</h2>

      <h3>E-commerce (catalogue + panier local)</h3>
      <pre><code class="language-jsx">
import React from 'react';

function useCart() {
  const [cart, setCart] = React.useState([]);
  const add = (p) =&gt; setCart(c =&gt; {
    const e = c.find(i =&gt; i.id === p.id);
    if (e) return c.map(i =&gt; i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
    return [...c, { ...p, qty: 1 }];
  });
  const total = cart.reduce((s, i) =&gt; s + i.price * i.qty, 0);
  return { cart, add, total };
}

export function Catalog() {
  const [products, setProducts] = React.useState([]);
  const { cart, add, total } = useCart();

  React.useEffect(() =&gt; { fetch('/api/products').then(r =&gt; r.json()).then(setProducts); }, []);

  return (
    &lt;div className="grid grid-cols-3 gap-6"&gt;
      &lt;section className="col-span-2"&gt;
        &lt;h2&gt;Produits&lt;/h2&gt;
        &lt;div className="grid grid-cols-2 gap-4"&gt;
          {products.map(p =&gt; (
            &lt;article key={p.id} className="border p-3"&gt;
              &lt;h3&gt;{p.name}&lt;/h3&gt;&lt;p&gt;{p.price}€&lt;/p&gt;
              &lt;button onClick={() =&gt; add(p)}&gt;Ajouter&lt;/button&gt;
            &lt;/article&gt;
          ))}
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;aside&gt;
        &lt;h2&gt;Panier&lt;/h2&gt;
        &lt;ul&gt;{cart.map(i =&gt; &lt;li key={i.id}&gt;{i.name} x {i.qty}&lt;/li&gt;)}&lt;/ul&gt;
        &lt;div&gt;Total : {total.toFixed(2)}€&lt;/div&gt;
      &lt;/aside&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>Dashboard (charts pseudo-données)</h3>
      <pre><code class="language-jsx">
import React from 'react';

export function Dashboard() {
  const [metrics, setMetrics] = React.useState(null);
  React.useEffect(() =&gt; {
    (async () =&gt; setMetrics(await (await fetch('/api/metrics')).json()))();
  }, []);
  if (!metrics) return &lt;p&gt;Chargement...&lt;/p&gt;;
  return (
    &lt;div className="grid grid-cols-3 gap-4"&gt;
      &lt;div className="p-4 border"&gt;Visiteurs: {metrics.visitors}&lt;/div&gt;
      &lt;div className="p-4 border"&gt;Pages vues: {metrics.pageViews}&lt;/div&gt;
      &lt;div className="p-4 border"&gt;Conversion: {metrics.conversion}%&lt;/div&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>Chat temps réel (WebSocket)</h3>
      <pre><code class="language-jsx">
import React from 'react';

export function Chat() {
  const [ws, setWs] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState('');

  React.useEffect(() =&gt; {
    const sock = new WebSocket('wss://example.com/chat');
    sock.onopen = () =&gt; setWs(sock);
    sock.onmessage = (e) =&gt; setMessages(m =&gt; [...m, JSON.parse(e.data)]);
    return () =&gt; sock.close();
  }, []);

  const send = (e) =&gt; {
    e.preventDefault();
    if (ws &amp;&amp; text.trim()) {
      ws.send(JSON.stringify({ text }));
      setText('');
    }
  };

  return (
    &lt;div&gt;
      &lt;ul&gt;{messages.map((m,i) =&gt; &lt;li key={i}&gt;{m.text}&lt;/li&gt;)}&lt;/ul&gt;
      &lt;form onSubmit={send}&gt;
        &lt;input value={text} onChange={e =&gt; setText(e.target.value)} placeholder="Tapez votre message..." /&gt;
        &lt;button&gt;Envoyer&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <hr/>

      <h2 id="checklist">13) Checklist finale & bonnes pratiques</h2>
      <ul>
        <li>Composants purs, petits et nommés selon leur rôle</li>
        <li>État local vs global : choisissez la solution la plus simple qui marche</li>
        <li>Data-fetching : cachez et invalidez (React Query)</li>
        <li>Performance : mémoïser <em>après</em> profilage, pas avant</li>
        <li>a11y : labels, rôles ARIA, focus management</li>
        <li>Tests : unités (composants), intégration (workflows), mocks réseau (MSW)</li>
        <li>Build : découpage des bundles, lazy loading, sourcemaps prod privées</li>
        <li>Sécurité : .env, CORS, CSP, limites API, logs sans secrets</li>
        <li>Monitoring : erreurs, lenteurs, métriques clés</li>
      </ul>

      <p><strong>Ressources</strong> : docs React, React Router, Redux Toolkit, TanStack Query, React Hook Form, Testing Library.</p>

    </div>
  `,
  date: '25 Août 2025 - 14:30',
  readTime: '60 min',
  category: 'Frontend',
  author: 'Edwin Tchamba',
  image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tags: ['React', 'JavaScript', 'Hooks', 'Performance', 'Architecture', 'Testing', 'React Query', 'Redux Toolkit', 'WebSocket', 'Vite']
}

};

const BlogPost = () => {
  const { postId } = useParams();
  const { t } = useTranslation();
  const [copied, setCopied] = React.useState(false);

  const currentUrl = window.location.href;
  const post = blogPosts[postId as keyof typeof blogPosts];

  const shareOnTwitter = () => {
    const text = `Découvrez cet article intéressant: ${post?.title}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const text = `Découvrez cet article: ${post?.title} - ${currentUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-blue-500 hover:text-blue-600">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-500 hover:text-blue-500 transition-colors font-light"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('blog.backToBlog', 'Retour au blog')}
            </Link>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium tracking-wide uppercase rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 font-light">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button 
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors font-light"
              >
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Share2 className="h-4 w-4 mr-2" />}
                {copied ? 'Copié!' : 'Partager'}
              </button>
              <button 
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors font-light"
              >
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Lien copié' : 'Copier le lien'}
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors font-light">
                <BookOpen className="h-4 w-4 mr-2" />
                Sauvegarder
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boutons de partage flottants */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        <motion.button
          onClick={shareOnTwitter}
          className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Partager sur Twitter"
        >
          <Twitter className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={shareOnLinkedIn}
          className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Partager sur LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={shareOnWhatsApp}
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Partager sur WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={copyToClipboard}
          className={`w-12 h-12 ${copied ? 'bg-green-500' : 'bg-gray-600'} text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Copier le lien"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* Image principale */}
      <section className="px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg aspect-[16/9]"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-32 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Contenu principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div 
                className="prose prose-lg max-w-none font-light leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Tags */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-light text-gray-900 mb-4 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-gray-600 text-sm font-light rounded border hover:border-blue-200 hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Partage */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-light text-gray-900 mb-4">
                  Partager cet article
                </h3>
                <div className="space-y-3">
                  <button 
                    onClick={shareOnTwitter}
                    className="w-full flex items-center justify-center px-4 py-3 bg-blue-500 text-white font-light hover:bg-blue-600 transition-colors"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </button>
                  <button 
                    onClick={shareOnLinkedIn}
                    className="w-full flex items-center justify-center px-4 py-3 bg-blue-700 text-white font-light hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </button>
                  <button 
                    onClick={shareOnWhatsApp}
                    className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white font-light hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                  <button 
                    onClick={copyToClipboard}
                    className={`w-full flex items-center justify-center px-4 py-3 ${copied ? 'bg-green-500' : 'bg-gray-600'} text-white font-light hover:bg-gray-700 transition-colors`}
                  >
                    {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copied ? 'Lien copié!' : 'Copier le lien'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Articles <span className="text-blue-500">similaires</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([id]) => id !== postId)
              .slice(0, 3)
              .map(([id, relatedPost], index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Link to={`/blog/${id}`} className="block">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="p-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium tracking-wide uppercase rounded-full">
                          {relatedPost.category}
                        </span>
                        
                        <h3 className="text-lg font-light text-gray-900 mt-4 mb-3 group-hover:text-blue-500 transition-colors leading-tight">
                          {relatedPost.title}
                        </h3>
                        
                        <div className="flex items-center text-sm text-gray-500 font-light">
                          <Clock className="h-4 w-4 mr-2" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;