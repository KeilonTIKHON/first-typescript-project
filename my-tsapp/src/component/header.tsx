import React, { FC, useEffect, useReducer, useState } from 'react';

import { Link } from 'react-router-dom'

import {store, LogOut, LogIn} from '../assets/store'

interface IHeader {
  userName?: string,
  classname?: string
}

const Header: FC<IHeader> = (classname) => {
  const [url, setUrl] = useState('https://6720e73498bbb4d93ca6983f.mockapi.io/api/v1/users')
  const [users, setUsers] = useState<any>([])
  const [bgimg, setBgimg] = useState('')
  const [,forceUpdate] = useReducer((x)=> x + 1, 0)
  //const [headercl, setHeadercl] = useState(classname)
  useEffect(() => {
    const unsubscribe = store.subscribe(()=>{
      forceUpdate()
      
    })
    
   
    //console.log(store.getState().usericon)
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        console.log(classname)
        setUsers(data)
      })

    //const persons = JSON.parse(usersData)
    //setUser(usersData)
    return unsubscribe;
  },
    [])
    setTimeout(()=>{
      setBgimg(store.getState().usericon)
      console.log(bgimg)
    },100)
  return (
    <div className={classname.classname}>
      <div className='logoCont'>
        <div className='logo'></div>
        <div className='logoText'>Sofa Movies</div>
      </div>

      <ul className='PagesCont'>

        <li className='headerMenu'><Link to={'/'} style={{ textDecoration: 'none', color:'antiquewhite'}}>Home</Link></li>
        <li className='headerMenu'>Popular</li>
      </ul>
      <div>
        <div></div>
        <Link to={store.getState().username==='default'?'/login':'/user'} style={{ textDecoration: 'none', color:'antiquewhite'}}>
        <div className='PlLogo' style={{backgroundImage:`url(${store.getState().usericon})`, backgroundSize:'contain'}}></div>
        <div className='PlName'>{store.getState().username}</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;