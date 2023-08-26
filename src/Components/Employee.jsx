import { del_team_member } from "../utils/form_handlers"
import TeamChangeBtn from "./TeamChangBtn"
import { useState } from "react"
import Sidepanel from "./Sidepanel"
const Employee = ({ emp_data, setter, setChangeTeam }) => {
  const { name, position, email, phone } = emp_data
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sidepanel
        open={open}
        setOpen={setOpen}
        setter={setter}
        form="edit_team_member"
        emp_data={emp_data}
      />
      <section className="flex w-max flex-col justify-between gap-6 rounded-lg bg-neutral-50 px-4 py-3 drop-shadow-lg transition duration-150 ease-out hover:scale-105">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>
          <p className="font-semibold">{position}</p>
          <p className=" w-40 break-words text-gray-900">{email}</p>
          <p>{phone}</p>
        </div>
        <div className="flex flex-col gap-3">
          {position === "Team Member" ? (
            <>
              <TeamChangeBtn
                setChangeTeam={setChangeTeam}
                emp_data={emp_data}
                setter={setter}
              />

              <button
                className=" transiton rounded-lg bg-gray-200 px-3 py-1 text-lg duration-150 ease-out hover:bg-red-300 "
                onClick={() => {
                  del_team_member(emp_data, setter)
                }}
              >
                Delete
              </button>
            </>
          ) : null}
          <button
            onClick={() => {
              setOpen(true)
            }}
            className=" transiton rounded-lg bg-gray-200 px-3 py-1 text-lg duration-150 ease-out hover:bg-purple-300"
          >
            Edit
          </button>
        </div>
      </section>
    </>
  )
}

export default Employee
