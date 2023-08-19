import { useState } from "react"
import Employee from "./Employee"
import Team from "./Team"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
/* eslint-disable react/prop-types */
const Division = ({ head, teams, division_name }) => {
  const [Child, setChild] = useState(true)
  return (
    <section>
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
          <div>
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
