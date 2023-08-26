import { dummyData } from "./dummy_data"

export function updateData() {}
export function clearData() {
  localStorage.setItem("emp_data", "")
}
export function getData() {
  const data = localStorage.getItem("emp_data")
  return JSON.parse(data)
}

export function popuplateData() {
  localStorage.setItem("emp_data", JSON.stringify(dummyData))
}
