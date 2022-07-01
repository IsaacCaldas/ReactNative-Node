import 'react-native-gesture-handler'

import Routes from './src/routes/app.routes'
import { UsersProvider } from './src/context/users_context'


const App = () => (
  <UsersProvider>
    <Routes/>
  </UsersProvider>
)

export default App


