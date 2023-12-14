import express from 'express'; //gerenciador do servidor
import dotenv from 'dotenv'; //gerenciador de senhas e portas
import mustache from 'mustache-express'; //gerenciador de views
import path from 'path'; //gerenciador de pastas/arquivos
import mainRoutes from './routes/index'; //importando o Router da pagina index.ts

dotenv.config(); //config de acesso do arquivo .env

const server = express(); //servidor

//configs do template engine
server.set('view engine', 'mustache'); //definição do template engine = 'mustache'
server.set('views', path.join(__dirname, 'views')); //definição da pasta de views = 'views'
server.engine('mustache', mustache()); //definição da engine = 'mustache'

server.use(express.static(path.join(__dirname, '../public'))) //config da pasta dos arquivos estaticos

server.use(mainRoutes); //utilizando o arquivo de rotas.
server.use((req, res)=>{
    res.send('Pagina não encontrada!');
})


server.listen(process.env.PORT,()=>{
    console.log('Server is running ok!');
})
