import { useContext, useEffect, useState } from "react"
import Employee from "./Employee"
import Team from "./Team"
import Sidepanel from "../Components/Sidepanel"
import { getData } from "../utils/data_handlers"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { update_team_list } from "../utils/form_handlers"
/* eslint-disable react/prop-types */
import { DataContext, SearchContext } from "../utils/datacontext"
const Division = ({ division_name }) => {
  const [Child, setChild] = useState(true)
  const [open, setOpen] = useState(false)
  const [Teams, setTeams] = useState([])
  const [TeamLead, setTeamLead] = useState()
  const [changeTeam, setChangeTeam] = useState(false)
  const searchField = useContext(SearchContext)
  useEffect(() => {
    let data = getData()
    data = data.filter((emp) => {
      return (
        emp.name.toLowerCase().includes(searchField.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchField.toLowerCase()) ||
        emp.phone.includes(searchField)
      )
    })
    const teamlist = update_team_list(division_name, data)
    data.forEach((emp) => {
      if (emp.division_name === division_name && emp.team_name === null) {
        setTeamLead(emp)
      } else if (data.length === 1) {
        setTeamLead(undefined)
      }
    })

    setTeams(teamlist)
  }, [division_name, searchField])
  return (
    <DataContext.Provider value={Teams}>
      <section className="ml-20">
        <Sidepanel
          key={division_name}
          open={open}
          setOpen={setOpen}
          setter={setTeams}
          form="add_team"
          division_name={division_name}
        />
        <div className={`flex flex-row gap-2  `}>
          <button
            className=""
            onClick={() => {
              setChild((old) => !old)
            }}
          >
            {Child ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </button>

          <h1 className={`text-xl font-bold`}>{division_name}</h1>
        </div>

        {
          <section className="flex flex-col gap-4">
            {Child ? (
              <>
                <div className="flex flex-row gap-4">
                  {TeamLead ? <Employee emp_data={TeamLead} /> : null}
                  <button
                    onClick={() => {
                      setOpen(true)
                    }}
                    className="transiton h-max self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-blue-300"
                  >
                    Add a Team
                  </button>
                </div>

                {Teams.map((team, idx) => {
                  return (
                    <Team
                      key={team}
                      team_name={team}
                      division_name={division_name}
                      setter={setTeams}
                      changeTeam={changeTeam}
                      setChangeTeam={setChangeTeam}
                    />
                  )
                })}
              </>
            ) : null}
          </section>

          /* {Child ? (
        <section
          className={`${
            head.position === "CEO" ? null : "ml-20"
          } mt-2 border-l-2 border-neutral-300 pl-2`}
        >
          <div className="flex flex-row gap-4">
            <Employee
              emp_data={{
                name: head.name,
                position: head.position,
                team_name: head.team_name,
                emp_id: head.emp_id,
                phone: head.phone,
                email: head.email,
                division_name: division_name,
              }}
            />
            <button
              onClick={() => {
                setOpen(true)
              }}
              className="transiton h-max self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-blue-300"
            >
              Add a Team
            </button>
          </div>

          {teams?.map((team, idx) => {
            const { name, lead, members } = team

            return (
              <Team
                division_name={division_name}
                key={idx}
                team_name={name}
                lead={lead}
                members={members}
              />
            )
          })}
        </section>
      ) : null} */
        }
      </section>
    </DataContext.Provider>
  )
}

export default Division
