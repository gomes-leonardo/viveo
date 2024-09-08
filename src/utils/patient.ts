export const getRandomDate = () => {
  const currentDate = new Date()
  const pastYear = new Date().setFullYear(currentDate.getFullYear() - 1)
  const randomDate = new Date(
    pastYear + Math.random() * (currentDate.getTime() - pastYear),
  )
  return randomDate.toLocaleDateString()
}

export const getRandomMedication = () => {
  const medications = [
    'Paracetamol',
    'Ibuprofeno',
    'Amoxicilina',
    'Azitromicina',
    'Cetirizina',
    'Dipirona',
    'Omeprazol',
  ]
  const randomIndex = Math.floor(Math.random() * medications.length)
  return medications[randomIndex]
}

export const getRandomVaccines = () => {
  const vaccines = [
    'COVID-19',
    'Tétano',
    'Hepatite B',
    'Influenza',
    'Febre Amarela',
    'Sarampo',
  ]
  const vaccineStatuses = vaccines.map((vaccine) => {
    const status = Math.random() > 0.5 ? 'Completa' : 'Incompleta'
    return `${vaccine}: ${status}`
  })
  return vaccineStatuses.join(', ')
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const exportToCSV = (userData: any) => {
  const csvData = [
    ['Nome', `${userData.name.first} ${userData.name.last}`],
    ['E-mail', userData.email],
    ['Localização', `${userData.location.city}, ${userData.location.country}`],
    ['Telefone', userData.phone],
    ['Última Consulta', getRandomDate()],
    ['Vacinas', getRandomVaccines()],
    ['Medicação Atual', getRandomMedication()],
  ]

  const csvContent =
    'data:text/csv;charset=utf-8,' + csvData.map((e) => e.join(',')).join('\n')
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'user_data.csv')
  document.body.appendChild(link)
  link.click()
}
