import Auth from '../components/common/Auth';
import Login from '../components/common/Login';
import Signup from '../components/common/Signup';
import { UserProvider } from '../context/userContext';
const Authentication = () => {
  return (
    <div>
      <UserProvider>
      <Auth login={<Login />} signup={<Signup />} />
      </UserProvider>
    </div>
  )
}

export default Authentication
