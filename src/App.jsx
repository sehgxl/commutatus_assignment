import { useEffect, useState } from "react"
import { DataContext } from "./utils/datacontext"
import "./App.css"
import Division from "./Components/Division"
// import { data } from "./data"
import { getData, popuplateData } from "./utils/data_handlers"
function App() {
  const [data, setdata] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      if (
        localStorage.getItem("data") === "" ||
        localStorage.getItem("data") === null
      ) {
        console.log(localStorage.getItem("data"))
        popuplateData()
      }
      setdata(getData())
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }, [])
  return (
    <DataContext.Provider value={setdata}>
      <section className="min-h-screen bg-neutral-200 px-5 py-3 text-neutral-900">
        <section className="mt-5 flex flex-col gap-4 rounded-lg  bg-neutral-100 p-4">
          {Error ? (
            <h1>Something went wrong</h1>
          ) : Loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h1 className="text-center text-3xl">Employees</h1>
              {data?.map((division, idx) => {
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
            </>
          )}
        </section>
      </section>
    </DataContext.Provider>
  )
}

export default App
