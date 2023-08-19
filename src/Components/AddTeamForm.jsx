import { useContext, useState } from "react"
import { DataContext } from "../utils/datacontext"
import { add_team } from "../utils/form_handlers"

const AddTeamForm = ({ setOpen, division_name }) => {
  const setData = useContext(DataContext)
  const [TeamName, setTeamName] = useState("")
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
          add_team(
            {
              team_name: TeamName,
              division_name: division_name,
              emp_data: {
                name: Name,
                email: Email,
                phone: Phone,
                team_name: TeamName,
                division_name: division_name,
                position: "Team Leader",
              },
            },
            setData
          )
          setOpen(false)
        }}
        className="mt-4 flex flex-col gap-2"
      >
        <label className="" htmlFor="">
          Team Name
        </label>
        <input
          value={TeamName}
          onChange={(e) => {
            setTeamName(e.target.value)
          }}
          placeholder="Frontend"
          className="rounded-lg border-2 border-neutral-200 px-3 py-1 placeholder:text-neutral-200"
          type="text"
        />
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
