import {createContext, useContext} from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage';
import axios from 'axios';
import { toast } from 'react-toastify';
import i18next, { t } from 'i18next';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type UserContextType = {
  user: User,
  handleSignUp: (data: FieldValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>)=>void,
  handleLogin: (data: FieldValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>)=>void,
  handleLogout: ()=>void
}

const UserContext = createContext({} as UserContextType);

export const useUser = ()=>{
  return useContext(UserContext);
}

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useLocaleStorage<User>('fenzo-user', {} as User)
  const navigate = useNavigate();

  const handleSignUp = (data: FieldValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
      ...data,
      name: data.full_name,
      phone: data.phone_number,
    }).then(res => {
      toast.success(t('resgistered_successfully'), {
        position: "bottom-left",
        rtl: i18next.language === 'ar'
      })
      navigate('/login')
      setLoading(false)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t('smth_went_wrong'), {
        position: "bottom-left",
        rtl: i18next.language === 'ar'
      })
      setLoading(false)
    })
  }

  const handleLogin = (data: FieldValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
      phone: data.phone_number,
      password: data.password,
    }).then(res => {
      setUser(res.data?.data)
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data?.data?.token}`;
      setLoading(false)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t('smth_went_wrong'), {
        position: "bottom-left",
        rtl: i18next.language === 'ar'
      })
      setLoading(false)
    })
  }

  const handleLogout = () => {
    setUser({} as User)

    axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`)
    .then(res => {
      delete axios.defaults.headers.common["Authorization"];
    })
    .catch(err => {
      delete axios.defaults.headers.common["Authorization"];
      toast.error(err?.response?.data?.message ?? t('smth_went_wrong'), {
        position: "bottom-left",
        rtl: i18next.language === 'ar'
      })
    })
  }


  return <UserContext.Provider value={{user, handleSignUp, handleLogin, handleLogout}}>
    {children}
  </UserContext.Provider>
}