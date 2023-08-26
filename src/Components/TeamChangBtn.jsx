import { useEffect, useState } from "react"
import { getData } from "../utils/data_handlers"
import { change_team, update_team_list } from "../utils/form_handlers"
import { DataContext } from "../utils/datacontext"
import { useContext } from "react"
const TeamChangBtn = ({ emp_data, setChangeTeam }) => {
  const [Options, setOptions] = useState([])
  const Teams = useContext(DataContext)
  useEffect(() => {
    setOptions(Teams)
  }, [Teams])
  return (
    <>
      <select
        onChange={(e) => {
          change_team(emp_data, e.target.value, setChangeTeam)
        }}
        className="transiton rounded-lg px-3 py-1 text-lg text-black duration-150 ease-out hover:bg-blue-300"
        name=""
        id=""
      >
        <option disabled selected>
          Choose Team
        </option>
        {Options?.map((team, idx) => {
          return (
            <option value={team} key={idx}>
              {team}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default TeamChangBtn
