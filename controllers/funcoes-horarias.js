const { format } = require('date-fns')
const horaAtual = () => {
    const data = new Date();
    const hora = format(data, 'HH:mm')
    return hora
}
const saudacao = () => {
    const hora = horaAtual()
    if (hora >= '04:00' && hora < '12:00') {
        return 'Bom dia!'
    } else if (hora >= '12:00' && hora < '18:00') {
        return 'Boa Tarde!'
    } else if (hora >= '18:00' && hora <= '23:59' || hora >= '00:00' && hora < '04:00') {
        return 'Boa Noite!'
    }
}
module.exports = {
    saudacao,
    horaAtual
}