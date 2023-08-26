import { clearData, getData } from "./data_handlers"
let count = 20

export function update_member_list(data, division_name, team_name) {
  let memberlist = []
  data.forEach((emp) => {
    if (emp.division_name === division_name && emp.team_name === team_name) {
      memberlist.push(emp)
    }
  })

  return memberlist
}

export function del_team_member(emp_data, setter) {
  const { emp_id, division_name, team_name } = emp_data
  let data = getData()
  data = data.filter((emp) => emp.emp_id !== emp_id)
  const member_list = update_member_list(data, division_name, team_name)
  setter(member_list)
  localStorage.setItem("emp_data", JSON.stringify(data))
}

export function add_team_member(emp, setter) {
  emp.emp_id = emp.emp_id || count++
  emp.position = "Team Member"

  const data = getData()
  data.push(emp)
  const memberlist = update_member_list(data, emp.division_name, emp.team_name)
  setter(memberlist)
  localStorage.setItem("emp_data", JSON.stringify(data))
}

export function change_team(emp_data, new_team, setChangeTeam) {
  let data = getData()
  data = data.filter((emp) => emp.emp_id !== emp_data.emp_id)
  data.push({ ...emp_data, team_name: new_team })
  localStorage.setItem("emp_data", JSON.stringify(data))
  setChangeTeam((old) => !old)
}

export function edit_team_member(emp_data, setter) {
  let data = getData()
  data = data.filter((emp) => emp.emp_id !== emp_data.emp_id)
  data.push(emp_data)
  const memberlist = update_member_list(
    data,
    emp_data.division_name,
    emp_data.team_name
  )
  setter(memberlist)
  localStorage.setItem("emp_data", JSON.stringify(data))
}

export function update_team_list(division_name, data) {
  let teamCount = new Map()
  data.forEach((emp) => {
    if (emp.division_name === division_name) {
      teamCount[emp.team_name] = teamCount[emp.team_name] + 1 || 1
    }
  })
  let teamlist = []
  for (const team in teamCount) {
    teamlist.push(team)
  }
  return teamlist.filter((team) => team !== "null")
}

export function add_team(emp_data, setter) {
  emp_data.emp_id = emp_data.emp_id || count++
  emp_data.position = "Team Leader"
  const data = getData()
  data.push(emp_data)
  const teamlist = update_team_list(emp_data.division_name, data)
  setter(teamlist)
  localStorage.setItem("emp_data", JSON.stringify(data))
}
export function del_team(team_name, division_name, setter) {
  let data = getData()
  data = data.filter((emp) => emp.team_name !== team_name)
  const teamlist = update_team_list(division_name, data)
  setter(teamlist)
  localStorage.setItem("emp_data", JSON.stringify(data))
}

export function change_team_name(
  division_name,
  team_name,
  new_team_name,
  setter
) {
  let data = getData()
  data.forEach((emp) => {
    if (emp.team_name === team_name) {
      emp.team_name = new_team_name
    }
  })
  const teamlist = update_team_list(division_name, data)
  setter(teamlist)
  localStorage.setItem("emp_data", JSON.stringify(data))
}

export function check_team_name(team_name, division_name) {
  const data = getData()
  for (const emp of data) {
    if (emp.division_name === division_name && emp.team_name === team_name) {
      return true
    }
  }

  return false
}
