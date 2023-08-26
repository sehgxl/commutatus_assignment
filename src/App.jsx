import { useEffect, useState } from "react"
import { DataContext, SearchContext } from "./utils/datacontext"
import "./App.css"
import Division from "./Components/Division"
// import { data } from "./data"
import { getData, popuplateData } from "./utils/data_handlers"
import Employee from "./Components/Employee"
import SearchBar from "./Components/SearchBar"
function App() {
  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState(false)
  const [Divisions, setDivisions] = useState([])
  const [searchField, setSearchField] = useState("")
  useEffect(() => {
    try {
      setLoading(true)
      if (
        localStorage.getItem("emp_data") === "" ||
        localStorage.getItem("emp_data") === null
      ) {
        popuplateData()
      }
      let data = getData()
      data = data.filter((emp) => {
        return (
          emp.name.toLowerCase().includes(searchField.toLowerCase()) ||
          emp.email.toLowerCase().includes(searchField.toLowerCase()) ||
          emp.phone.includes(searchField)
        )
      })
      setData(data)
      let divisionCount = new Map()
      data.forEach((emp) => {
        divisionCount[emp.division_name] =
          divisionCount[emp.division_name] + 1 || 1
      })
      let divisionList = []
      for (const division in divisionCount) {
        divisionList.push(division)
      }
      setDivisions(divisionList.filter((division) => division !== "null"))
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }, [searchField])

  return (
    <SearchContext.Provider value={searchField}>
      <section className="min-h-screen bg-neutral-200 px-5 py-3 text-neutral-900">
        <section className="mt-5 flex flex-col gap-4 rounded-lg  bg-neutral-100 p-4">
          {Error ? (
            <h1>Something went wrong</h1>
          ) : Loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h1 className="text-center text-3xl">Employees</h1>
              <SearchBar setSearchField={setSearchField} />
              {Data.filter((emp) => emp.position === "CEO").map((emp) => (
                <Employee key={"CEO"} emp_data={emp} />
              ))}
              {Divisions.map((division_name, idx) => {
                return <Division key={idx} division_name={division_name} />
              })}
            </>
          )}
        </section>
      </section>
    </SearchContext.Provider>
  )
}

export default App
