import { useState } from "react"
import Sidepanel from "../Components/Sidepanel"
import Employee from "./Employee"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
const Team = ({ team_name, lead, members, division_name }) => {
  const [open, setOpen] = useState(false)
  const [Child, setChild] = useState(true)

  return (
    <section className="ml-20">
      <Sidepanel
        open={open}
        setOpen={setOpen}
        division_name={division_name}
        team_name={team_name}
      />

      <div className=" flex w-max flex-col">
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
        ) : null}
      </div>
    </section>
  )
}

export default Team
