## Getting Started

Projeto moveit-next

### Links

[Projeto moveit - Origem](https://github.com/ederpbj/moveit)

[whimsical - criar fluxogramas](https://whimsical.com/MJrLar3fMC9vvTzVBxHMxZ)

[Figma - Prototipar](https://www.figma.com/file/W62VId1hckJ2uMHfKg4XNj/Move.it-1.0-(Copy)?node-id=160%3A2761)

[Protitipo da aplicação 2.0](https://www.figma.com/file/4DD3ceEhSdn2tPl3b8hIHn/Move.it-2.0-(Copy)?node-id=160%3A2761)

[Fontes google](https://fonts.google.com/)

[Notificações mozila](https://developer.mozilla.org/pt-BR/docs/Web/API/Notification)

[Netlify - Para deploy](https://www.netlify.com/)

[Vercel - deploy](http://vercel.com/)

[Moveit Vercel Dev](https://moveit-next-ederpbj.vercel.app/)

[Moveit Vercel Prod](https://moveit-next-peach.vercel.app/)

### Outros videos

[Equipe Rocket](https://www.youtube.com/watch?v=5CZmkjFHe4U&ab_channel=Rocketseat)

[Daniele Leao](https://www.youtube.com/user/SuperDsystem)

### Aulas NLW

[Meus videos](...\Videos\DEV\NLW)

[Aula 1 - NLW](https://nextlevelweek.com/episodios/react/1/edicao/4?utm_source=convertkit&utm_medium=email&utm_campaign=NLW4+Aulas+dispon%C3%ADveis&utm_term=Leads+cadastrados&utm_content=Aula+01+React)

[Aula 2 - Desvendando o Next.js](https://www.youtube.com/watch?v=7ceWRavb6Ac&feature=emb_title&ab_channel=DiegoFernandes)

[NLW#4 Trilha ReactJS – Desvendando o Next.js](https://www.youtube.com/watch?v=7ceWRavb6Ac&feature=emb_title&ab_channel=DiegoFernandes)

### Comandos

`yarn create next-app moveit-next` >> Cria projeto next

`yarn add typescript @types/react-dom @types/node -D` >> instalar dependências de desenvolvimento

`yarn dev` >> rodar em modo dev

`yarn add js-cookie` >> trabalhar com armazenamento nos cookies

`yarn add @types/js-cookie -D` >> tipagem para cookies, no impor aparece ..., D: dependencia de desenvolvimento

>> Só para projetos front-end

`npm i -g vercel` instalar version

`vercel -h` abre as opções

`vercel login` para logar

`yarn run build` para refatorar antes do deploy

`vercel` para iniciar o deploy

`vercel --prod` para iniciar o deploy direto para produção, endereço final.



`` >>

### Obs

* _app.js 

    * serve para criar uma página prévia, Ex: para side-bar

* O servidor node não tem acesso ao browser
    
    * Por isso é melhor usar cookes, do que LocalStorage

    * Quando for usar next, melhor usar cookes, para armazenar dados

* Pesquisar sobre TWA - aplicação responsiva