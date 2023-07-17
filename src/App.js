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

  // kullanıcı ekleme fonksyionu
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-5 d-flex flex-column gap-5">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
