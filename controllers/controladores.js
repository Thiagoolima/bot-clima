const axios = require('axios');
const { format, add, parseISO } = require('date-fns')
const dotenv = require('dotenv').config().parsed;
const { key, keyHours } = dotenv


const dadosMeteorologicos = async (latitude, longitude) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${key}`
    const resposta = await axios.get(apiWeatherUrl);
    const { data } = resposta
    const cidade = data.name
    const temp = (data.main.temp).toFixed(1)
    const condicaoTempo = data.weather[0].description
    const vento = data.wind.speed
    const icon = data.weather[0].icon
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`
    const resIcon = await axios.get(iconUrl)
    return {
        cidade,
        temp,
        condicaoTempo,
        vento
    }
}
const dadosMeteorologicosPorhora = async (latitude, longitude) => {
    const apiWeatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${keyHours}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no&lang=pt`
    const { data: { forecast: { forecastday } } } = await axios.get(apiWeatherUrl);
    const { hour } = forecastday[0]
    const { data: { location } } = await axios.get(apiWeatherUrl);
    const horaAtual = format(new Date(), 'yyyy-MM-dd HH:mm')
    const cidade = location.name
    const horaLimite = format(add(parseISO(horaAtual), { hours: 3 }), 'yyyy-MM-dd HH:mm')
    const Proximas3horas = hour.filter((hora) => {
        return hora.time > horaAtual && hora.time <= horaLimite
    })
    return {
        Proximas3horas,
        cidade
    }
}


module.exports = {
    dadosMeteorologicos,
    dadosMeteorologicosPorhora
}
