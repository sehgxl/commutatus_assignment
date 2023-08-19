import Employee from "./Employee"
import Team from "./Team"
/* eslint-disable react/prop-types */
const Division = ({ head, teams, division_name }) => {
  return (
    <>
      {" "}
      <h1
        className={`${
          head.position === "CEO" ? null : "ml-20"
        } text-xl font-bold`}
      >
        {division_name}
      </h1>
      <section
        className={`${
          head.position === "CEO" ? null : "ml-20"
        } border-l-2 border-neutral-300 pl-2`}
      >
        <div>
          <Employee
            emp_data={{
              name: head.name,
              position: head.position,
              team_name: head.team_name,
              emp_id: head.emp_id,
              phone: head.phone,
              email: head.email,
              division_name: division_name,
            }}
          />
        </div>

        {teams?.map((team, idx) => {
          const { name, lead, members } = team

          return (
            <Team
              division_name={division_name}
              key={idx}
              team_name={name}
              lead={lead}
              members={members}
            />
          )
        })}
      </section>
    </>
  )
}

export default Division
