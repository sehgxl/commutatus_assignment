import { useState } from "react"
import { change_team_name, check_team_name } from "../utils/form_handlers"

const EditTeamForm = ({ setOpen, division_name, setter, team_name }) => {
  const [TeamName, setTeamName] = useState({
    value: team_name,
    error: false,
  })

  return (
    <>
      <h1 className="text-xl"></h1>
      <form
        id="edit_team"
        onSubmit={(e) => {
          e.preventDefault()
          if (!check_team_name(TeamName.value, division_name)) {
            change_team_name(division_name, team_name, TeamName.value, setter)
            setTeamName((old) => ({ ...old, error: false }))
            setOpen(false)
          } else {
            setTeamName((old) => ({ ...old, error: true }))
          }
        }}
        className="mt-4 flex flex-col gap-2"
      >
        {TeamName.error ? (
          <h1 className="text-lg text-red-500">Team name already exists!</h1>
        ) : null}
        <label className="" htmlFor="">
          Team Name
        </label>
        <input
          value={TeamName.value}
          onChange={(e) => {
            setTeamName((old) => ({ ...old, value: e.target.value }))
          }}
          placeholder="Devops"
          className="rounded-lg border-2 border-neutral-200 px-3 py-1 placeholder:text-neutral-200"
          type="text"
        />
      </form>

      <button
        className="mt-4 w-max rounded-lg bg-neutral-200 px-3 py-1 duration-150 ease-out hover:bg-green-300"
        form="edit_team"
        type="submit"
      >
        Submit
      </button>
    </>
  )
}

export default EditTeamForm
