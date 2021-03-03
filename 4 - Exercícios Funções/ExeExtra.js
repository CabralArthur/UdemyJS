//Calcular Ano, Meses, Dias, Horas e segundos

function calculaData(string) {
    testDate = new Date(string)

    min = testDate.getMinutes()

    console.log(min)

    currentDate = new Date()

    final = currentDate - testDate

    console.log(final / 1000)
}

'2001-03-13T03:40:00.000Z'

calculaData('2001-03-13T03:40:00.000Z')