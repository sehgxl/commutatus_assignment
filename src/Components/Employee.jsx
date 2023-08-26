import { useContext } from "react"
import { del_team_member } from "../utils/form_handlers"
import TeamChangeBtn from "./TeamChangBtn"
import { DataContext } from "../utils/datacontext"
import { useState } from "react"
import Sidepanel from "./Sidepanel"
const Employee = ({ emp_data, setter, setChangeTeam }) => {
  const { name, position, email } = emp_data
  const [open, setOpen] = useState(false)

  const setData = useContext(DataContext)
  return (
    <>
      <Sidepanel
        open={open}
        setOpen={setOpen}
        setter={setter}
        form="edit_team_member"
        emp_data={emp_data}
      />
      <section className="flex max-w-[240px] flex-col gap-6 rounded-lg bg-neutral-50 px-4 py-3 drop-shadow-lg transition duration-150 ease-out hover:scale-105">
        <div className="flex flex-col gap-2 break-words">
          <h1 className="text-xl">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>
          <p className="font-semibold">{position}</p>
          <p className=" text-gray-900">{email}</p>
        </div>

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
      </section>
    </>
  )
}

export default Employee
