// import { data } from "../data"
export function updateData() {}
export function clearData() {
  localStorage.setItem("data", "")
}
export function getData() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("data")
    return JSON.parse(data)
  }
}
export function popuplateData() {
  const data = [
    {
      division_name: "Bussiness",
      head: {
        name: "abhinav",
        position: "CEO",
        team: "Bussiness",
        emp_id: 1,
        phone: "129381293",
        email: "abhinav@email.com",
      },
    },
    {
      division_name: "Engineering",
      head: {
        name: "james",
        position: "Head",
        team: "Enginnering",
        emp_id: 2,
        phone: "129381293",
        email: "james@email.com",
      },
      teams: [
        {
          name: "team1",
          lead: {
            name: "toby",
            position: "Team Leader",
            emp_id: 3,
            phone: "129381293",
            email: "toby@email.com",
          },
          members: [
            {
              name: "mark",
              position: "Team Member",
              emp_id: 4,
              phone: "129381293",
              email: "mark@email.com",
            },
            {
              name: "andrew",
              position: "Team Member",
              emp_id: 5,
              phone: "129381293",
              email: "andrew@email.com",
            },
          ],
        },
        {
          name: "team2",
          lead: {
            name: "elon",
            position: "Team Leader",
            emp_id: 6,
            phone: "129381293",
            email: "elon@email.com",
          },
          members: [
            {
              name: "jeff",
              position: "Team Member",
              emp_id: 7,
              phone: "129381293",
              email: "jeff@email.com",
            },
            {
              name: "jordan",
              position: "Team Member",
              emp_id: 8,
              phone: "129381293",
              email: "jordan@email.com",
            },
          ],
        },
      ],
    },

    {
      division_name: "Design",
      head: {
        name: "laila",
        position: "Head",
        team: "Design",
        emp_id: 9,
        phone: "129381293",
        email: "laila@email.com",
      },
      teams: [
        {
          name: "team1",
          lead: {
            name: "paul",
            position: "Team Leaderer",
            emp_id: 10,
            phone: "129381293",
            email: "paul@email.com",
          },
          members: [
            {
              name: "jeff",
              position: "Team Member",
              emp_id: 11,
              phone: "129381293",
              email: "jeff@email.com",
            },
            {
              name: "sam",
              position: "Team Member",
              emp_id: 12,
              phone: "129381293",
              email: "sam@email.com",
            },
          ],
        },
      ],
    },
  ]
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(data))
  }
}
