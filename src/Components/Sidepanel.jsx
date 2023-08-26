import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import AddMemberform from "./AddMemberform"
import EditMemberForm from "./EditMemberForm"
import AddTeamForm from "./AddTeamForm"
import EditTeamForm from "./EditTeamForm"
export default function Sidepanel(props) {
  const { open, setOpen, setter, form, division_name, team_name, emp_data } =
    props

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white "
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        {
                          {
                            add_team: "Add team details",
                            add_team_member: "Add team member details",
                            edit_team_member: "Edit Team Member details",
                            edit_team_form: "Edit Team Name",
                          }[form]
                        }
                      </Dialog.Title>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6">
                      {
                        {
                          add_team: (
                            <AddTeamForm
                              division_name={division_name}
                              setter={setter}
                              setOpen={setOpen}
                            />
                          ),
                          add_team_member: (
                            <AddMemberform
                              division_name={division_name}
                              team_name={team_name}
                              setter={setter}
                              setOpen={setOpen}
                            />
                          ),
                          edit_team_member: (
                            <EditMemberForm
                              emp_data={emp_data}
                              setter={setter}
                              setOpen={setOpen}
                            />
                          ),
                          edit_team_form: (
                            <EditTeamForm
                              division_name={division_name}
                              setter={setter}
                              setOpen={setOpen}
                              team_name={team_name}
                            />
                          ),
                        }[form]
                      }
                      {/* {emp_data !== undefined ? (
                        <EditMemberForm
                          // setter={setter}
                          setOpen={setOpen}
                          emp_data={emp_data}
                        />
                      ) : team_name ? (
                        <AddMemberform
                          division_name={division_name}
                          // setter={setter}
                          setOpen={setOpen}
                          team_name={team_name}
                        />
                      ) : (
                        <AddTeamForm
                          division_name={division_name}
                          setter={setter}
                          setOpen={setOpen}
                        />
                      )} */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
