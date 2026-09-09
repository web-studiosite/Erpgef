# GEF - Gestão Financeira & PDV

**ERP para Ferragens e Materiais de Construção**

Sistema completo de gestão financeira e ponto de venda (PDV), otimizado para lojas de ferragens e materiais de construção.

---

## 📁 Estrutura do Deploy

```
gef-erp-deploy/
├── index.html              # Página principal (entry point)
├── manifest.json            # PWA manifest
├── sw.js                    # Service Worker (cache offline)
├── .nojekyll                # Obrigatório para GitHub Pages
├── css/
│   └── app.css              # Tailwind CSS (86KB)
├── js/
│   ├── entry.js             # Bootstrap da aplicação (7KB)
│   ├── vendor/
│   │   ├── react.js         # React 19 + ReactDOM (219KB)
│   │   ├── lucide.js        # Lucide icons runtime (34KB)
│   │   ├── supabase.js      # Supabase Client (221KB)
│   │   └── other.js         # Motion + utilitários (10KB)
│   └── app/
│       ├── core.js          # Lógica de negócio (5KB)
│       ├── components.js    # Componentes UI (139KB)
│       └── views.js         # Telas/Páginas (256KB)
├── icons/                   # 35 ícones SVG individuais (Lucide)
│   ├── AlertCircle.svg
│   ├── Package.svg
│   ├── Receipt.svg
│   └── ...
├── img/                     # Ícones PWA e app
│   ├── app-icon.svg
│   ├── apple-touch-icon.png
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── pwa-maskable-512x512.png
├── sql/                     # Schema do banco de dados
│   ├── supabase_schema.sql  # Schema principal (13KB)
│   └── migration_saas.sql   # Migração SaaS multi-loja
└── data/
    └── .env.example         # Template de configuração
```

---

## 🚀 Deploy no GitHub Pages

### Passo a passo

1. **Crie um repositório** no GitHub (ex: `gef-erp`)

2. **Clone o repositório** e copie todo o conteúdo desta pasta para a raiz:
   ```bash
   git clone https://github.com/SEU_USER/gef-erp.git
   cp -r gef-erp-deploy/* gef-erp/
   cd gef-erp
   ```

3. **Configure o GitHub Pages**:
   - Vá em **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / pasta: `/ (root)`
   - Salve

4. **Faça commit e push**:
   ```bash
   git add .
   git commit -m "Deploy GEF ERP"
   git push origin main
   ```

5. **Acesse**: `https://SEU_USER.github.io/gef-erp/`

> ⚠️ O arquivo `.nojekyll` é **obrigatório** — sem ele, o GitHub Pages ignora pastas com underscore.

---

## ⚙️ Configuração do Supabase

O GEF requer um projeto [Supabase](https://supabase.com) para funcionar com dados reais.

### 1. Criar projeto no Supabase

- Acesse [supabase.com](https://supabase.com) e crie um novo projeto
- Anote a **URL** e a **anon key** do projeto

### 2. Executar o schema SQL

- No Supabase Dashboard, vá em **SQL Editor**
- Execute o conteúdo de `sql/supabase_schema.sql`
- Depois execute `sql/migration_saas.sql` para suporte multi-loja

### 3. Configurar credenciais

As credenciais são configuradas **dentro da aplicação** na tela de Configurações, ou via variáveis de ambiente antes do build:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

> 💡 O sistema possui **modo demo** com dados simulados (mock) caso as credenciais não estejam configuradas. Para produção, configure o Supabase.

---

## 🎨 Ícones SVG

A pasta `icons/` contém **35 ícones SVG** individuais extraídos do Lucide, prontos para uso em documentação, marketing ou personalização visual:

- `AlertCircle.svg`, `AlertTriangle.svg` — Alertas
- `Package.svg`, `Scale.svg` — Produtos/Pesagem
- `Receipt.svg`, `Printer.svg` — PDV/Vendas
- `Building.svg`, `Building2.svg` — Empresas
- `Coins.svg`, `Landmark.svg` — Financeiro
- `User.svg`, `ShieldCheck.svg` — Usuários/Segurança
- E mais 24 ícones...

Cada ícone é um SVG puro, otimizado, pronto para uso em qualquer contexto.

---

## 📱 PWA (Progressive Web App)

O GEF é uma PWA completa:

- **Instalável** no celular e desktop
- **Funciona offline** (service worker com cache)
- **Ícones** adaptativos para Android e iOS
- O `sw.js` faz cache de todos os assets estáticos

---

## 🛠️ Stack Técnica

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI Framework |
| TypeScript | 5.x | Linguagem |
| Tailwind CSS | 4 | Estilização |
| Vite | 6 | Build tool |
| Supabase | 2.x | Backend/Banco |
| Lucide React | latest | Ícones |
| Motion | 11.x | Animações |

---

## 📋 Funcionalidades

- ✅ **PDV (Ponto de Venda)** — Venda rápida com busca de produtos
- ✅ **Gestão de Estoque** — Cadastro e controle de ferragens
- ✅ **Financeiro** — Contas a pagar/receber, fluxo de caixa
- ✅ **Clientes & Fornecedores** — Cadastro completo
- ✅ **Multi-loja (SaaS)** — Suporte a múltiplas lojas/filiais
- ✅ **Dashboard** — Indicadores em tempo real
- ✅ **PWA Offline** — Funciona sem internet
- ✅ **Modo Demo** — Dados simulados para testes

---

## 📄 Licença

Projeto proprietário. Todos os direitos reservados.
