// import { data } from "../data"
import { dummyData } from "./dummy_data"

export function updateData() {}
export function clearData() {
  localStorage.setItem("data", "")
}
export function getData() {
  const data = localStorage.getItem("data")
  return JSON.parse(data)
}

export function popuplateData() {
  localStorage.setItem("data", JSON.stringify(dummyData))
}
