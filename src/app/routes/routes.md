# Routes
Esse diretório é utilizado para gestionar os componentes que compõem as routas da aplicação


## Detalhando os arquivos e diretórios

### menu.js
<p style="text-align:justify"> 
Esse arquivo é utilizado para definir as rotas que devem aparecer no menu. O template só suporta dois níveis, caso você crie mais eles não serão apresentados na tela.
</p> 
 
#### Como criar um menu
Para criar um novo item no menu é necessário adicionar um objeto no array **menus**

Esse objeto deve está no formato:
 
    "path":(string) "rota de acesso",
    "name":(string) "nome da rota, deve ser único",
    "component":(component) "componente que será instanciado" ,
    "meta": {
        "icon":(string) "Icone que será apresentado no menu" ,
        "smallTitle":(string) "texto que aparecerá no bradcroump, ao lado do titulo",
        "publicTitle":(string) "Título da página"
    },
     "children": (route[]) "lista de rotas internas"
      
> Existe uma constante (routePrefix) que define um prefixo padrão para as rotas do menu. 
>daf


 