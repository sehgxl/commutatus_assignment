import { useContext, useState } from "react"
import Sidepanel from "../Components/Sidepanel"
import Employee from "./Employee"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { add_team, del_team, update_member_list } from "../utils/form_handlers"
import { DataContext, SearchContext } from "../utils/datacontext"
import { useEffect } from "react"
import { getData } from "../utils/data_handlers"

const Team = ({
  team_name,
  division_name,
  setter,
  setChangeTeam,
  changeTeam,
}) => {
  const [open, setOpen] = useState(false)
  const [Child, setChild] = useState(true)
  const [Members, setMembers] = useState([])
  const [Form, setForm] = useState("add_team_member")
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
    const memberlist = update_member_list(data, division_name, team_name)
    setMembers(memberlist)
  }, [division_name, team_name, changeTeam, searchField])

  return (
    <section className="ml-20">
      {
        {
          add_team_member: (
            <Sidepanel
              open={open}
              setOpen={setOpen}
              division_name={division_name}
              team_name={team_name}
              setter={setMembers}
              form={Form}
            />
          ),
          edit_team_form: (
            <Sidepanel
              open={open}
              setOpen={setOpen}
              division_name={division_name}
              team_name={team_name}
              setter={setter}
              form={Form}
            />
          ),
        }[Form]
      }

      <div className="flex flex-row gap-2">
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
        <h1 onClick={() => {}} className="text-xl">
          {team_name}
        </h1>
      </div>

      {Child ? (
        <section className="mt-2 flex flex-col gap-4 border-l-2 border-neutral-300 pl-2">
          <div className="flex flex-row flex-wrap gap-4">
            {Members.filter(
              (member) =>
                member.team_name !== "null" && member.position === "Team Leader"
            ).map((member, idx) => {
              return (
                <Employee
                  setter={setMembers}
                  setChangeTeam={setChangeTeam}
                  emp_data={member}
                  key={idx}
                />
              )
            })}

            <div className="flex flex-col gap-4 ">
              <button
                onClick={() => {
                  del_team(team_name, division_name, setter)
                }}
                className="transiton w-full self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-red-300"
              >
                Delete this team
              </button>

              <button
                onClick={() => {
                  setForm("edit_team_form")
                  setOpen(true)
                }}
                className="transiton w-full self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-red-300"
              >
                Edit this team
              </button>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-4">
            {Members.filter(
              (member) =>
                member.team_name !== "null" && member.position !== "Team Leader"
            )
              .sort((a, b) => a.emp_id - b.emp_id)
              .map((member, idx) => {
                return (
                  <Employee
                    emp_data={member}
                    setter={setMembers}
                    setChangeTeam={setChangeTeam}
                    key={idx}
                  />
                )
              })}
            <button
              onClick={() => {
                setForm("add_team_member")
                setOpen(true)
              }}
              className="transiton h-max self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-blue-300"
            >
              Add a Member
            </button>
          </div>
        </section>
      ) : null}

      {/* <div className=" flex w-max flex-col">
        <div className="flex flex-row gap-2 py-3">
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
          <h1 className="text-2xl">{team_name}</h1>
        </div>

        {Child ? (
          <div className="border-l-2 border-neutral-300 pl-2">
            <div className="flex flex-row gap-4">
              <Employee
                emp_data={{
                  name: lead.name,
                  position: lead.position,
                  team_name: team_name,
                  emp_id: lead.emp_id,
                  phone: lead.phone,
                  email: lead.email,
                  division_name: division_name,
                }}
              />
              <button
                onClick={() => {
                  del_team(team_name, division_name, setData)
                }}
                className="transiton h-max self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-red-300"
              >
                Delete this team
              </button>
            </div>

            <section className="mt-4 flex flex-row items-start gap-4">
              {members?.map((member, idx) => {
                return (
                  <Employee
                    emp_data={{
                      name: member.name,
                      position: member.position,
                      team_name: team_name,
                      emp_id: member.emp_id,
                      phone: member.phone,
                      email: member.email,
                      division_name: division_name,
                    }}
                    key={idx}
                  />
                )
              })}

              <button
                onClick={() => {
                  setOpen(true)
                }}
                className="transiton h-max self-start rounded-lg bg-gray-300 px-5 py-2 duration-150 ease-out hover:scale-105 hover:bg-blue-300"
              >
                Add a Member
              </button>
            </section>
          </div>
        ) : null} */}
      {/* </div> */}
    </section>
  )
}

export default Team
