## LABEDDIT

Link para o site criado por meio do surge: http://labeddit-leonardo.surge.sh/
  
### DESCRIÇÃO
Projeto em React criado para uma atividade do curso de programação da Labenu com o intuito de ser uma simulação de uma rede social similar ao Reddit, chamada **Labeddit**. Para tanto, foi utilizada a seguinte API: 

https://documenter.getpostman.com/view/7549981/TzRLkAfr

Segue uma descrição das páginas e de suas funcionalidades:  

#### Login

Inicialmente, o usuário é conduzido a uma página de login, no qual será possível acessar as páginas principais da aplicação por meio do preenchimento de dois campos de input (um referente ao email e outro, à senha), ambos dentro de um formulário que será enviado ao clicar em um botão **LOGIN** ou na tecla Enter. Ressalta-se que a validação de ambos os campos impede que o formulário seja enviado caso um deles ou ambos estejam vazios ou caso o email não contenha um **@**; e que, caso o usuário já esteja logado no sistema, essa página estará indisponível e ele será direcionado à página de Feed, explanada posteriormente.  
Os botões exibidos nesta página são:
- **LOGIN:** permite efetuar o login e acessar as páginas protegidas do site, caso o formulário da página seja preenchido. Se o usuário já tiver um cadastro na API, o botão irá direcioná-lo à página de Feed (explanada posteriormente); se não tiver, irá exibir uma mensagem de "usuário ou senha incorreto";
- **DEFINIR IDIOMA:** exibirá um menu responsivo na lateral esquerda da tela por meio do qual é possível selecionar o idioma com o qual as funcionalidades do site são exibidas. Tal funcionalidade se faz presentes em todas as páginas da aplicação. Os idiomas disponíveis são português, inglês e espanhol;
- **CADASTRE-SE:** direcionará o usuário à página de cadastro, explanada posteriormente.    

#### Cadastro
Permite ao usuário realizar um cadastro na API de modo que possa acessar as páginas protegidas. Tal cadastro exigirá o preenchimento de um formulário com os seguintes campos e regras de validação:
- **NOME DE USUÁRIO:** deve conter ao menos 3 caracteres, incluindo espaços e caracteres especiais;
- **EMAIL:** deve conter um **@**;
- **SENHA:** deve conter ao menos 3 caracteres, incluindo espaços e caracteres especiais.  

Caso o formulário seja preenchido obedecendo as regras explicitadas, o cadastro na API será realizado ao clicar na tecla Enter ou no botão **CADASTRAR**. Além disso, tal como na página de login, caso o usuário já esteja logado no sistema, essa página estará indispoível e irá direcioná-lo à página de Feed, explanada posteriormente.  
Os botões exibidos nesta página são:  
- **CADASTRAR:** realizará o cadastro do usuário caso todos os campos do formulário estejam corretamente preenchidos. Nesse caso, o usuário estará automaticamente logado e será direcionado à página de Feed, explanado posteriormente;
- **DEFINIR IDIOMA:** mesma funcionalidade supracitada;
- **IR PARA LOGIN:** direcionará o usuário à página de login, explanada posteriormente.     

#### Feed
Exibirá todos os posts da API em ordem aleatória. Como tal página está protegida, ela apenas será acessível caso o usuário esteja logado; em caso contrário, ele será automaticamente conduzido à página de login.   
Na parte superior da página, há um header no qual constam o logo do site e três botões:  
- **VOLTAR:** permite voltar à página anterior. Tal botão não possui funcionalidade efetiva nesta página, pois, uma vez que a página anterior será inevitavelmente a de login, o usuário será automaticamente redirecionado ao Feed. Todavia, ele ainda foi incluído por questão de padronização;
- **DEFINIR IDIOMA:** mesma funcionalidade supracitada;
- **LOG OUT:** permite desfazer o login. Nesse caso, o usuário será automaticamente direcionado à página de login.    

Logo abaixo, é exibido o botão **EXIBIR CAMPOS DE BUSCA E CRIAÇÃO DE POST**, que, se clicado, exibirá dois formulários:  
- **CRIE SEU POST:** permitirá ao usuário criar um post por meio do preenchimento dois campos, um de título e um de texto. Ambos devem ser obrigatoriamente preenchidos, sendo que o campo de título suportará até 100 caracteres. A criação do post será feita ao clicar na tecla Enter ou no botão **CRIAR POST**, exibido logo abaixo;
- **BUSQUE UM POST:** exibirá um campo opcional que, assim que for preenchido, filtrará os posts renderizados, exibindo somente aqueles cujos título, texto ou nome de usuário coincidam com o valor digitado.    

Logo abaixo, são exibidos os posts, cada um apresentado em um card contendo:  
- **TÍTULO**
- **NOME DE USUÁRIO**
- **TEXTO**
- **CAMPO DE CURTIR** exibirá um botão com formato de coração (que permite "curtir" o post), um com formato de X (que permite "descurtir" o post) e, entre ambos, a quantidade total de curtidas, constante na API. Tal quantidade será a subtração entre a quantidade total de curtidas e a de descurtidas, incluindo as ações de todos os usuários cadastrados na API e permitindo números negativos. Nesse campo, caso o usuário clique no ícone de coração, ele será contabilizado como um usuário que curtiu o post e o ícone será preenchido com a cor preta; caso clique no de X, será contabilizado como um que descurtiu e este ícone será prenchido com a cor preta. Tais ações são livres para o usuário, permitindo-lhe curtir e descurtir os posts à vontade e na ordem desejada;
- **COMENTÁRIOS:** exibirá a quantidade total de comentários daquele post. Caso clicado, tal campo direcionará o usuário à página de detalhes do referido post, explanada posteriormente.    
Ressalta-se que o resgate das informações dos posts na API leva alguns segundos, período no qual não serão exibidos os posts nem os campos de busca e criação. Em vez disso, será apresentado um símbolo de carregamento, consistindo em um círculo rotacional com as cores da paleta selecionada.   

#### Detalhes de post
Exibirá as informações de um post selecionado pelo usuário no Feed. Na parte superior, será exibido o mesmo headers do Feed, sendo que, nesse caso, o botão **VOLTAR** funcionará, retornando o usuário ao Feed. 
Logo abaixo, caso a requisição que busca os dados do post na API ainda esteja em andamento, será exibido o mesmo símbolo de carregamento supracitado; caso contrário, será exibido o post selecionado no mesmo card apresentado no Feed, com as mesmas funcionalidades de curtir e descurtir. O clique no campo de comentários permitirá exibir e ocultar os seguintes campos:  
- **CAMPO DE CRIAÇÃO DE COMENTÁRIO** apresenta um formulário com um único campo que deve mandatoriamente ser preenchido para a criação de comentário. Caso preenchido, o comentário poderá ser enviado por meio do clique na tecla Enter ou em um botão **COMENTAR**, localizado ao lado;
- **COMENTÁRIOS:** apresenta uma lista de todos os comentários daquele post, contendo cada um o nome do usuário que comentou, o texto do comentário e um campo de curtir e descurtir com as mesmas funcionalidades do card de post, porém aplicadas ao referido comentário.    

#### Página de erro
Será exibida caso o link digitado pelo usuário não corresponda a nenhuma das páginas supracitadas e apresentará uma mensagem de erro orientando o usuário a acessar a Home, bem como dois botões:  
- **IR PARA HOME:** direcionará o usuário à página de login, caso não esteja logado; ou ao Feed, caso esteja;
- **DEFINIR IDIOMA:** mesma funcionalidade supracitada, permitindo alterar o idioma da mensagem e dos botões exibidos.    

### REQUISITOS TÉCNICOS

Algumas das ferramentas utilizadas foram:
- **ESTADO GLOBAL:** as ferramentas **React.createContext** e **useContext** foram usadas para disponibilizar as versões em português, inglês e espanhol do site;
- **REACT ROUTER:** a navegação entre páginas utilizou as tags BrowserRouter, Switch e Route, bem como os hooks **useHistory** e **useParams**, próprios do React Router;
- **COMPONENTES FUNCIONAIS:** não foram usados componentes de classe, visando ao melhor desempenho do código;
- **HOOKS:** os hooks useState e useEffect foram amplamente utilizados;
- **ESTILIZAÇÃO:** a estilização foi realizada por meio do Design System **MATERIAL UI** - cujos recursos também foram usados para elaborar o menu responsivo relativo à seleção de idiomas - e do **styled-components**. As tags estilizadas criadas concentram-se no arquivo **style.js**, encontrado na pasta **style**.    

### O QUE FUNCIONA

Todas as funcionalidades supracitadas estão em pleno desempenho. A aplicação também está responsiva para todos os tipos de aparelhos, tanto para a posição vertical quanto para a horizontal, e persistirá os dados de curtir e descurtir de cada usuário, visto estar ligada a uma API. Além disso, há também uma funcionalidade de filtro que removerá das listas de posts e comentários todos aqueles cujo tipo não seja string - e, logo, não sejam textos capazes de serem renderizados. 

### O QUE NÃO FUNCIONA

A funcionalidade de curtir e descurtir possui um bug. Caso o usuário clique duas vezes rapidamente no botão de curtir, a quantidade de curtidas irá aumentar em duas unidades em vez de uma, o que também ocorre no botão de descurtir. Caso o botão de curtir já esteja selecionado e o de descurtir for clicado duas vezes rapidamente, a quantidade de curtidas será reduzida em quatro unidades e vice-versa.  
Ademais, a imagem de fundo da tela de cadastro possui leves falhas de responsividade para a posição horizontal do aparelho Surface Duo. 
