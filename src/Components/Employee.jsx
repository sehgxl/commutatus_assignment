import { useContext } from "react"
import { del_team_member } from "../utils/form_handlers"
import TeamChangeBtn from "./TeamChangBtn"
import { DataContext } from "../utils/datacontext"
import { useState } from "react"
import Sidepanel from "./Sidepanel"
const Employee = ({ emp_data }) => {
  const { name, position, emp_id, email } = emp_data
  const [open, setOpen] = useState(false)

  const setData = useContext(DataContext)
  return (
    <>
      <Sidepanel open={open} setOpen={setOpen} emp_data={emp_data} />
      <section className="relative flex w-max flex-col gap-2 rounded-lg bg-neutral-50 px-4 py-3 drop-shadow-lg">
        <h1>{name}</h1>
        <p>{emp_id}</p>
        <p>{email}</p>
        <p>{position}</p>
        {position === "Team Member" ? (
          <>
            <TeamChangeBtn emp_data={emp_data} />

            <button
              className="rounded-lg bg-gray-200 px-3 py-1 text-lg"
              onClick={() => {
                del_team_member(emp_data, setData)
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
          className="rounded-lg bg-gray-200 px-3 py-1 text-lg"
        >
          Edit
        </button>
      </section>
    </>
  )
}

export default Employee
