import { useContext, useState } from "react"
import { DataContext } from "../utils/datacontext"
import { edit_team } from "../utils/form_handlers"

const EditMemberForm = ({ setOpen, emp_data }) => {
  const { name, email, phone, position, team_name, division_name, emp_id } =
    emp_data
  const setData = useContext(DataContext)
  const [Name, setName] = useState(name)
  const [Email, setEmail] = useState(email)
  const [Phone, setPhone] = useState(phone)
  return (
    <>
      <h1 className="text-xl"></h1>
      <form
        id="edit_team_member"
        onSubmit={(e) => {
          e.preventDefault()

          edit_team(
            {
              name: Name,
              email: Email,
              team_name: team_name,
              division_name: division_name,
              phone: Phone,
              emp_id: emp_id,
              position: position,
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
        className="mt-4 w-max rounded-lg bg-neutral-200 px-3 py-1 duration-150 ease-out hover:bg-green-300"
        form="edit_team_member"
        type="submit"
      >
        Submit
      </button>
    </>
  )
}

export default EditMemberForm
