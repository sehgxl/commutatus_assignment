import { getData } from "./data_handlers"
let count = 10
export function del_team_member(emp_data, setData) {
  const { name, email, division_name, team_name } = emp_data
  const divisions = getData()

  for (const division of divisions) {
    if (division["division_name"] === division_name) {
      for (const team of division["teams"]) {
        if (team["name"] === team_name) {
          let updateMembers = []
          team.members.forEach((member) => {
            if (member.name !== name && member.email !== email) {
              updateMembers.push(member)
            }
          })
          team.members = updateMembers
        }
      }
    }
  }
  localStorage.setItem("data", JSON.stringify(divisions))
  setData(divisions)
}

export function add_team_member(emp_data, setData) {
  const { name, emp_id, email, division_name, team_name, phone } = emp_data

  const divisions = getData()

  for (const division of divisions) {
    if (division["division_name"] === division_name) {
      for (const team of division["teams"]) {
        if (team["name"] === team_name) {
          team.members.push({
            name: name,
            position: "Team Member",
            emp_id: emp_id || count++,
            email: email,
            phone: phone,
          })
        }
      }
    }
  }
  localStorage.setItem("data", JSON.stringify(divisions))
  setData(divisions)
}

export function change_team(emp_data, new_team, setData) {
  del_team_member(emp_data, setData)
  add_team_member({ ...emp_data, team_name: new_team }, setData)
}

export function edit_team(emp_data, setData) {
  const { division_name, position, emp_id, team_name } = emp_data

  const divisions = getData()

  for (const division of divisions) {
    if (division["division_name"] === division_name) {
      if (position === "Head" || position === "CEO") {
        division.head = emp_data
      } else if (position === "Team Leader") {
        for (const team of division.teams) {
          if (team.name === team_name) {
            team.lead = emp_data
          }
        }
      } else if (position === "Team Member") {
        for (const team of division.teams) {
          if (team.name === team_name) {
            let updateMembers = []
            for (const member of team.members) {
              if (member.emp_id !== emp_id) {
                updateMembers.push(member)
              }
            }
            updateMembers.push(emp_data)
            team.members = updateMembers
          }
        }
      }
    }
  }
  localStorage.setItem("data", JSON.stringify(divisions))
  setData(divisions)
}
