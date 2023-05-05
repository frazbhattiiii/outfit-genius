import Auth from '../common/Auth';
import Login from '../common/Login';
import Signup from '../common/Signup';
import { UserProvider } from '../../context/userContext';
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
