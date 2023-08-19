import "./style.css"

// PROCESO ASÍNCRONO
// http://api.exchangeratesapi.io/v1/latest?access_key=8bdb39aff203f7c9e1bd7a839607d1ed

const baseUrl = "http://api.exchangeratesapi.io/v1/latest?"
const additionalProperty = "&"

const accessKey = "access_key=8bdb39aff203f7c9e1bd7a839607d1ed"
const symbols = "symbols=USD,AUD"

const getData = async () => {
  const response = await fetch(
    `${baseUrl}${accessKey}${additionalProperty}${symbols}`
  )
  console.log("response", response)

  const data = await response.json()
  console.log("data", data)

  const { base, date, rates } = data
  console.log("rates", rates)

  const currencies = Object.entries(rates)
  console.log("currencies", currencies)

  document.querySelector("#app").innerHTML = /* HTML */ `
    <div>
      <h1>Tipo de cambio en divisas</h1>
      <p><b>Base: </b>${base}</p>
      <p><b>Fecha: </b>${date}</p>
      <table>
        <thead>
          <th>Divisa</th>
          <th>Valor</th>
        </thead>
        <tbody>
          ${currencies
            .map(
              ([currency, value]) => `
              <tr>
                <td>${currency}</td>
                <td>${value}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `
}

getData()