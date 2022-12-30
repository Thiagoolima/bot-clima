const { Telegraf } = require('telegraf');
const { key, keyHours, token } = require("./.env");
const bot = new Telegraf(token);
const axios = require('axios');
const fs = require('fs/promises')
const { format, add, parseISO } = require('date-fns')
const { dadosMeteorologicos, dadosMeteorologicosPorhora } = require('./weather')


bot.start((content) => {
    const from = content.update.message.from
    content.reply(`Muito Bem vindo, ${from.first_name}`)
})
bot.on('location', async (content) => {
    const latitude = content.update.message.location.latitude
    const longitude = content.update.message.location.longitude
    let dados = await dadosMeteorologicos(latitude, longitude)
    let dadosHours = await dadosMeteorologicosPorhora(latitude, longitude)
    const { cidade, temp, condicaoTempo, vento } = dados
    await content.reply(`Tempo AGORA: Cidade: ${cidade} Temperatura: ${temp} Condição do tempo: ${condicaoTempo} Vento: ${vento}`)
    await content.reply(
        `
            Cidade: ${dadosHours.cidade}
            Horário Local: ${dadosHours.Proximas3horas[0].time},
            Temperatura: ${dadosHours.Proximas3horas[0].temp_c},
            Condição Climática: ${dadosHours.Proximas3horas[0].condition.text},
            Chance de chover: ${dadosHours.Proximas3horas[0].chance_of_rain}%`
    )
    await content.reply(
        `
            Cidade: ${dadosHours.cidade}
            Horário Local: ${dadosHours.Proximas3horas[1].time},
            Temperatura: ${dadosHours.Proximas3horas[1].temp_c},
            Condição Climática: ${dadosHours.Proximas3horas[1].condition.text},
            Chance de chover: ${dadosHours.Proximas3horas[1].chance_of_rain}%`
    )
    content.reply(
        `
            Cidade: ${dadosHours.cidade}
            Horário Local: ${dadosHours.Proximas3horas[2].time},
            Temperatura: ${dadosHours.Proximas3horas[2].temp_c},
            Condição Climática: ${dadosHours.Proximas3horas[2].condition.text},
            Chance de chover: ${dadosHours.Proximas3horas[2].chance_of_rain}%`
    )
})


bot.startPolling()
// const dados = require('https://api.telegram.org/bot5966822182:AAFEKaGs1DS6QgU9AfoUTZWX4YK5CGBM1Vw/getUpdates')
// console.log(dados)
//bot.telegram.sendMessage(1204696911, "agora são exatamente" + " " + new Date())