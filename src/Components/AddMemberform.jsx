// import handle_team_member from "../utils/handle_team_member."

import { useContext, useState } from "react"
import { DataContext } from "../utils/datacontext"
import { add_team_member } from "../utils/form_handlers"

const AddMemberform = ({ setOpen, team_name, division_name }) => {
  const setData = useContext(DataContext)
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState()

  return (
    <>
      <h1 className="text-xl"></h1>
      <form
        id="add_team_member"
        onSubmit={(e) => {
          e.preventDefault()
          add_team_member(
            {
              name: Name,
              email: Email,
              team_name: team_name,
              division_name: division_name,
              phone: Phone,
            },
            setData
          )
          setOpen(false)
        }}
        className="mt-4 flex flex-col gap-2"
      >
        <label className="" htmlFor="">
          Name
        </label>
        <input
          value={Name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Abhinav Sehgal"
          className="rounded-lg border-2 border-neutral-200 px-3 py-1 placeholder:text-neutral-200"
          type="text"
        />

        <label className="" htmlFor="">
          Email
        </label>
        <input
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="abhinav@email.com"
          className="rounded-lg border-2 border-neutral-200 px-3 py-1 placeholder:text-neutral-200"
          type="email"
        />

        <label className="" htmlFor="">
          Phone
        </label>
        <input
          value={Phone}
          onChange={(e) => {
            setPhone(e.target.value)
          }}
          placeholder="912839813"
          className="rounded-lg border-2 border-neutral-200 px-3 py-1 placeholder:text-neutral-200"
          type="number"
        />
      </form>
      <button
        className="mt-4 w-max rounded-lg bg-neutral-200 px-3 py-1"
        form="add_team_member"
        type="submit"
      >
        Submit
      </button>
    </>
  )
}

export default AddMemberform
