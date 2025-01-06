import TesterSidebar from './TesterSidebar'

const page = () => {

    const current_user = {name : "marwa" , role : "tester"}
  return (
     <div className=''>
        <div>
         <TesterSidebar role={current_user.role} />
        </div>
        <div className=''></div>
     </div>
  )
}

export default page