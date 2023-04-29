import Auth from '../components/common/Auth';
import Login from '../components/common/Login';
import Signup from '../components/common/Signup';
const Authentication = () => {
  return (
    <div>
      <Auth login={<Login />} signup={<Signup />} />
    </div>
  )
}

export default Authentication
