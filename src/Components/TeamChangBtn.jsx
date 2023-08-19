import { useEffect, useState } from "react"
import { getData } from "../utils/data_handlers"
import { change_team } from "../utils/form_handlers"
import { DataContext } from "../utils/datacontext"
import { useContext } from "react"
const TeamChangBtn = ({ emp_data }) => {
  const { division_name } = emp_data
  const [Options, setOptions] = useState([])
  const setData = useContext(DataContext)
  useEffect(() => {
    const divisions = getData()
    for (const division of divisions) {
      if (division["division_name"] === division_name) {
        setOptions(division["teams"])
      }
    }
  }, [])
  return (
    <>
      <select
        onChange={(e) => {
          change_team(emp_data, e.target.value, setData)
        }}
        className="rounded-lg px-3 py-1 text-base"
        name=""
        id=""
      >
        <option disabled selected>
          Choose Team
        </option>
        {Options?.map((team, idx) => {
          return (
            <option value={team.name} key={idx}>
              {team.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default TeamChangBtn
