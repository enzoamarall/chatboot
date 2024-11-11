// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! ' + name.split(" ")[0]  + ', Sou o assistente virtual da JetSalvador. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Habilitação Motonauta(JetSki)\n2 - Habilitação Arrais(Lancha)\n3 - Aluguel de JetSki(Para Habilitados)\n4 - Aluguel de Lanchas\n5 - Passeios com JetSki(Para não habilitados)\n6 - Acessórios\n7 - Cotas compartilhadas\n'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    }


    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Para se habilitar como Motonauta o aluno precisa seguir um processo que consiste em três etapas:\n1 - Aula teórica e prática com a JetSalvador.\n2 - Agendamento na capitania dos portos para entrega de documentos e marcação da prova teórica.\n3 - Realização da prova objetiva na capitania dos portos, realizando no computador contendo 20 questões, sendo necessário acertar 10 questões para aprovação(50% da prova).\n\nApós a confirmação de pagamento no valor de R$599, o aluno iniciará imediatamente a aula teórica e agendará sua aula prática.\nLembrando que habilitação náutica tem validade 10 anos.\n\nA JetSalvador oferece suporte em todas as etapas do processo ao aluno ⚓​');
       
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Para se habilitar como Arrais o aluno precisa seguir um processo que consiste em três etapas:\n1 - Aula teórica e prática com a JetSalvador.\n2 - Agendamento na capitania dos portos para entrega de documentos e marcação da prova teórica.\n3 - Realização da prova objetiva na capitania dos portos, realizando no computador contendo 40 questões, sendo necessário acertar 20 questões para aprovação(50% da prova).\n\nApós a confirmação de pagamento no valor de R$799, o aluno iniciará imediatamente a aula teórica e agendará sua aula prática.\n\nA JetSalvador oferece suporte em todas as etapas do processo ao aluno ⚓');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Locação das 09:30hs às 17:30hs, com 02 coletes, chave, âncora ⚓️, documento e infraestrutura da marina Jet Up, na avenida beira mar número 181, Ribeira\n - Seadoo GTISe 170 (novo) R$ 1.000\n - Seadoo Wake Pro 230 R$ 1.300\n\n Obs: Fora o combustível ⛽️ 60 litros o tanque do Jet.');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Locação das 09:30hs às 17:30hs, incluso marinheiro e combustível com capacidade máxima de 10 pessoas.\nRoteiro\n- Saindo da marina aratu com destino a prainha e ilhas das neves\n A partir de R$2.500 reais.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');

    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Passeio Náutico saindo da Ribeira (Jet Up) na avenida beira mar número 181, ou Porto da Barra com agendamento prévio.\n\nRoteiro:\nPorto da Barra ao farol da Barra e navegamos até o Forte de São Marcelo, Elevador Lacerda, Mercado Modelo, Terminal Náutico e Palácio do Rio Branco, com paradas para fotos e vídeos.\nDuração do passeio fica entre 1 a 2 horas dependendo da velocidade empregada na navegação.\n\nPasseio com uma pessoa R$500 e R$600 com duas pessoas');

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');

    }

    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Acessórios \n\n1 - Camisa UV JetSalvador (P ao G) R$100 \n2 - Colete Xfloat 2024 (P ao G1) R$699\n3 - Âncora inox R$799\n4 - Camisa UV Xfloat R$299\n5 - Bolsa térmica(25 litros) Jet Cooler R$699 e com 18 litros R$499\n6 - Cooler(20 litros) R$1.990\n7 - Suporte de copo orginal para seadoo GTI e GTX R$499\n\n Qualquer peças BRP seadoo original sob consulta');

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');

    }

    if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'As cotas compartilhadas de jetski permitem que várias pessoas compartilhem a posse e os custos de um jetski novo\n\n Para mais informações sob consulta');


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite "Menu" para voltar as opções ou digite alguma das opções');

    }
    
});