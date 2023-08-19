import { useEffect, useState } from "react"
import { DataContext } from "./utils/datacontext"
import "./App.css"
import Division from "./Components/Division"
// import { data } from "./data"
import { getData, popuplateData } from "./utils/data_handlers"
function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    if (localStorage.getItem("data") === "" || null) {
      popuplateData()
    }
    setdata(getData())
  }, [])
  return (
    <DataContext.Provider value={setdata}>
      <section className="min-h-screen bg-neutral-200 px-5 py-3 text-neutral-900">
        <section className="mt-5 flex flex-col gap-4 rounded-lg  bg-neutral-100 p-4">
          <h1 className="text-center text-3xl">Employees</h1>
          {data.map((division, idx) => {
            const { head, teams = [], division_name } = division
            return (
              <Division
                division_name={division_name}
                key={idx}
                head={head}
                teams={teams}
              />
            )
          })}
        </section>
      </section>
    </DataContext.Provider>
  )
}

export default App
