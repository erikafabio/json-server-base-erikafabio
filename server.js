const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  workouts:600,   
  dbworkouts:444
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */

/* 
teste user

{
      "email": "test@mail.com",
      "password": "123567",
      "name": "Testinho",
      "age": 88
 }

     {
      "email": "michael.scott@dm.com",
      "password": "123456",
      "name": "Michael Scott",
      "age": 25,
			"cellphone": "41998765432",
			"url": "https://c.tenor.com/bIWKGrYb0FIAAAAC/crazy-dance-funny-dance.gif"
    }

    {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pY2hhZWwuc2NvdHRAZG0uY29tIiwiaWF0IjoxNjYyMTI2NzQ2LCJleHAiOjE2NjIxMzAzNDYsInN1YiI6IjcifQ.zPkBRtaeMxASnw2XHSc7NZII2e-pGzNUgIq79DCZabE",
	"user": {
		"email": "michael.scott@dm.com",
		"name": "Michael Scott",
		"age": 25,
		"cellphone": "41998765432",
		"url": "https://c.tenor.com/bIWKGrYb0FIAAAAC/crazy-dance-funny-dance.gif",
		"id": 7
	}
}


 ideia para a api/aplicação toTraning

 uma api que permite o usuário cadastrar sua rotina de treino, com rota para login, que segue para o dash onde o usuario ira cadastrar seu treino, e rota para uma area comun onde outros usuario podem ver todos os exercicios cadastrados na base de dados e ter uma noção de como fazer.
 os exercicios serão objetos com nome, tipo/categoria do exercicio, com ou sem peso, com ou sem aparelho, foto ilustrativa, musculo de atuação do exercicio, e nivel de dificuldade.
 os usuarios usarao nome, email, telefone, idade, senha e confirmação de senha, para o cadastro, e apenas email e senha para o login.
 o dash tera um header com o nome do usuario, seguido pela foto que ira abrir um dropdonw menu com opcao para a area dos exercicios cadastrados e sair da aplicação, no corpo da pagina tera separado em colunas os dias da semana com uma lista de exercicios que sera cadastrada pelo usuario atraves de um modal que abre ao apertar em adicionar treino, no modal o usuário colocara o nome do exercicio, repetições, serie, tempo de descanço e pelo select escolher o dia da semana em que ira cadastrar o exercicio.
 no card do exercicio cadsatrado no treino, tera os dados passado pelo modal e mais a imagem do exercicio(ver a possibilidade de usar o id dos exercicios cadastrados para puxar os dados da lista da base de dados para o treino do usuario, deixando mais dinamico, na hora de escrever o exercicio no modal ja aparecer a opcao correspondente no db)
opção de tema escuro,
paleta de cor com tons azulados para lembrar saude/ ou exverdeados para vitalidade,
pagina de login com formulario a direita e animaçao de boneco com pesos/praticando exercicio a esquerda, 
animacao nas mudanças de rotas com um loading em formato de halter(ver se o framer motion podera ajudar nisso),
hover e outros efeitos basicos conforme necessidade.
usar o figma para um esboço do projeto, fluxo de pages e design do mobile first.

fução tomar agua
função calcular quantidade de agua por kg
funcao guardar peso e kilo
*/