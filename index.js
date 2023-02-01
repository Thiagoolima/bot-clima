const { Telegraf } = require('telegraf');
require('dotenv').config();
const { token } = process.env
const bot = new Telegraf(token);
const { dadosMeteorologicos, dadosMeteorologicosPorhora } = require('./controllers/controladores')
const { saudacao, horaAtual } = require('./controllers/funcoes-horarias')

bot.start((content) => {
    const from = content.update.message.from
    content.reply(`${saudacao()} ${from.first_name}, seja bem vindo(a) ao bot de previsão climática!`)
})
bot.on('location', async (content) => {
    const latitude = content.update.message.location.latitude
    const longitude = content.update.message.location.longitude
    let dados = await dadosMeteorologicos(latitude, longitude)
    let dadosHours = await dadosMeteorologicosPorhora(latitude, longitude)
    const { cidade, temp, condicaoTempo, vento } = dados
    await content.reply(`Tempo AGORA: Cidade: ${cidade} Temperatura: ${temp} Condição do tempo: ${condicaoTempo} Vento: ${vento}`)
    if (horaAtual() < '23:00') {
        await content.reply(
            `
            Cidade: ${dadosHours.cidade}
            Horário Local: ${dadosHours.Proximas3horas[0].time},
            Temperatura: ${dadosHours.Proximas3horas[0].temp_c},
            Condição Climática: ${dadosHours.Proximas3horas[0].condition.text},
            Chance de chover: ${dadosHours.Proximas3horas[0].chance_of_rain}%`
        )
    }
    if (horaAtual() < '22:00') {
        await content.reply(
            `
            Cidade: ${dadosHours.cidade}
            Horário Local: ${dadosHours.Proximas3horas[1].time},
            Temperatura: ${dadosHours.Proximas3horas[1].temp_c},
            Condição Climática: ${dadosHours.Proximas3horas[1].condition.text},
            Chance de chover: ${dadosHours.Proximas3horas[1].chance_of_rain}%`
        )
    }
    if (horaAtual() < '21:00') {
        await content.reply(
            `
            Cidade: ${dadosHours.cidade}
            Horário Local: ${dadosHours.Proximas3horas[2].time},
            Temperatura: ${dadosHours.Proximas3horas[2].temp_c},
            Condição Climática: ${dadosHours.Proximas3horas[2].condition.text},
            Chance de chover: ${dadosHours.Proximas3horas[2].chance_of_rain}%`
        )
    }
})

bot.startPolling()

// const resposta = () => {
//     bot.telegram.sendMessage(1204696911, "agora são exatamente" + " " + new Date())
// }
// bot.on('location', (content) => {
//     setInterval(console.log(content.message.location),
// })



// const dados = require('https://api.telegram.org/bot5966822182:AAFEKaGs1DS6QgU9AfoUTZWX4YK5CGBM1Vw/getUpdates')
// console.log(dados)
