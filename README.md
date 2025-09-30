# 🎮 Mario Jump Game

Um jogo web inspirado no clássico Flappy Bird, mas com o tema do Mario! Pule sobre os canos e tente alcançar a maior pontuação possível.

## 🎯 Sobre o Jogo

O Mario Jump é um jogo de plataforma simples onde você controla o Mario pulando sobre obstáculos (canos). O objetivo é sobreviver o máximo de tempo possível e acumular pontos passando pelos canos sem colidir com eles.

### 🎮 Como Jogar

- **Pular**: Pressione a tecla `ESPAÇO` ou clique no Mario para fazer ele pular
- **Objetivo**: Evite colidir com os canos verdes
- **Pontuação**: Você ganha 1 ponto cada vez que passa por um cano
- **Game Over**: O jogo termina quando o Mario colide com um cano

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Framework JavaScript para interface
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS Modules** - Estilização modular
- **Netlify** - Hospedagem e deploy automático

## 📁 Estrutura do Projeto

```
mario_jogo/
├── src/
│   ├── components/
│   │   ├── Menu/           # Componente do menu de game over
│   │   └── MaxPontos/      # Componente de pontuação máxima
│   ├── App.tsx            # Componente principal do jogo
│   ├── App.module.css     # Estilos do jogo
│   └── main.tsx          # Ponto de entrada da aplicação
├── public/
│   └── image/            # Assets do jogo (sprites)
│       ├── clouds.png    # Nuvens de fundo
│       ├── game-over.png # Sprite de game over
│       ├── mario.gif     # Sprite animado do Mario
│       └── pipe.png      # Sprite do cano
├── dist/                 # Build de produção
└── netlify.toml         # Configuração do Netlify
```

## 🎨 Recursos do Jogo

- **Animações Fluidas**: Sistema de pulo suave com CSS animations
- **Sistema de Pontuação**: Contador de pontos em tempo real
- **Recorde Persistente**: Pontuação máxima salva no localStorage
- **Detecção de Colisão**: Sistema preciso de colisão entre Mario e canos
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **Efeitos Visuais**: Nuvens animadas e gradiente de céu

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar localmente

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd marioJump/mario_jogo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra o navegador**
   - Acesse `http://localhost:5173` (ou a porta indicada no terminal)

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/` e estará pronto para deploy.

## 🌐 Deploy

O projeto está configurado para deploy automático no Netlify:

- **Build Command**: `npm ci && npm run build`
- **Publish Directory**: `dist`
- **Base Directory**: `mario_jogo`

A configuração está no arquivo `netlify.toml` na raiz do projeto.

## 🎯 Funcionalidades Implementadas

- ✅ Sistema de pulo com animação
- ✅ Movimento automático dos canos
- ✅ Detecção de colisão
- ✅ Sistema de pontuação
- ✅ Persistência do recorde máximo
- ✅ Menu de game over
- ✅ Reiniciar jogo
- ✅ Controles por teclado e mouse
- ✅ Animações de nuvens de fundo

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter ESLint

## 🎨 Personalização

Para personalizar o jogo, você pode:

- **Alterar sprites**: Substitua as imagens na pasta `public/image/`
- **Modificar velocidade**: Ajuste a propriedade `animation-duration` no CSS
- **Mudar dificuldade**: Altere a altura dos canos ou velocidade de movimento
- **Adicionar sons**: Implemente efeitos sonoros com Web Audio API

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (com controles touch)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Richard Moraes Souza**
- GitHub: [@richardmoraessouza](https://github.com/richardmoraessouza)
- Projeto: [Timer Interativo](https://richardmoraessouza.github.io/timer-interativo/)

---

**Divirta-se jogando! 🎮**
