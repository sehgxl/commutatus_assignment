import { useState } from "react"
import Employee from "./Employee"
import Team from "./Team"
import Sidepanel from "../Components/Sidepanel"

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
/* eslint-disable react/prop-types */
const Division = ({ head, teams, division_name }) => {
  const [Child, setChild] = useState(true)
  const [open, setOpen] = useState(false)

  return (
    <section>
      <Sidepanel open={open} setOpen={setOpen} division_name={division_name} />

      <div
        className={`${
          head.position === "CEO" ? null : "ml-20"
        } flex flex-row gap-2  `}
      >
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

        <h1 className={` text-xl font-bold`}>{division_name}</h1>
      </div>

      {Child ? (
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
      ) : null}
    </section>
  )
}

export default Division
