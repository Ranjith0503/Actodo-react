import Header from '../Component/Header'
import Tcard from '../Component/Tcard'
import TodoContainer from '../Component/TodoContainer'
import { useLocation } from 'react-router-dom'

function Landing(props) {
    const data=useLocation()
    //console.log(data)
    // console.log(data.state.users)
  return (

    <div>
    <div className='bg-black p-16 border rounded-sm m-3'>
    <div className='bg-slate-200 p-10 border rounded-md'>
    
    <Header uname={data.state.users}/>
    <Tcard />
    <TodoContainer />
  </div>
  </div>
  </div>
  )
}

export default Landing