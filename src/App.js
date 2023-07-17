import UserList from './components/list/UserList';
import UserForm from './components/form/UserForm';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Mehmet',
      email: 'mhmet67@gmail.com',
    },
    {
      name: 'Ali',
      email: 'alikurt@gmail.com',
    },
  ]);

  return (
    <div className="App">
      <UserForm />
      <UserList users={users} />
    </div>
  );
}

export default App;
