import { useContext, useState } from "react"
import { DataContext } from "../utils/datacontext"
import { add_team, check_team_name } from "../utils/form_handlers"

const AddTeamForm = ({ setOpen, division_name, setter }) => {
  const setData = useContext(DataContext)
  const [TeamName, setTeamName] = useState({
    value: "",
    error: false,
  })
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState()
  return (
    <>
      <h1 className="text-xl"></h1>
      <form
        id="add_team"
        onSubmit={(e) => {
          e.preventDefault()
          if (!check_team_name(TeamName.value, division_name)) {
            add_team(
              {
                name: Name,
                email: Email,
                phone: Phone,
                team_name: TeamName.value,
                division_name: division_name,
              },
              setter
            )
            setTeamName((old) => ({ ...old, error: false }))
            setOpen(false)
          } else {
            setTeamName((old) => ({ ...old, error: true }))
          }
        }}
        className="mt-4 flex flex-col gap-2"
      >
        <label className="" htmlFor="">
          Team Name
        </label>
        <input
          value={TeamName.value}
          onChange={(e) => {
            setTeamName((old) => ({ ...old, value: e.target.value }))
          }}
          placeholder="Frontend"
          className="rounded-lg border-2 border-neutral-200 px-3 py-1 placeholder:text-neutral-200"
          type="text"
        />

        {TeamName.error ? (
          <h1 className="text-lg text-red-500">Team name already exists!</h1>
        ) : null}
        <h1 className="font-semibold text-gray-800">Team Lead Details</h1>
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
        form="add_team"
        type="submit"
      >
        Submit
      </button>
    </>
  )
}

export default AddTeamForm
