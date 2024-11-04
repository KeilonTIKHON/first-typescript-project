import React, { FC, useEffect, useState } from 'react';

interface IHeader {
  userName?: string,

}

const Header: FC<IHeader> = (userName) => {
  const [url, setUrl] = useState('https://6720e73498bbb4d93ca6983f.mockapi.io/api/v1/users')
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setUsers(data)
      })

    //const persons = JSON.parse(usersData)
    //setUser(usersData)
  },
    [])
  return (
    <div className='Header'>
      <div className='logoCont'>
        <div className='logo'></div>
        <div className='logoText'>Sofa Movies</div>
      </div>

      <ul className='PagesCont'>

        <li className='headerMenu'>Home</li>
        <li className='headerMenu'>Popular</li>
      </ul>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;