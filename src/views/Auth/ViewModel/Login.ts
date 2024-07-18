import { useState } from 'react';
import { login } from '../../../services/auth';
import { navigation } from '../../../routes';
import { useForm } from '../../../hooks/useForm';

interface LoginProps {
  username: string;
  password: string;
}



export const useViewModel = () => {
  const mockUser = {
    username: 'euramfilho@gmail.com',
    password: 'Glockg19x',
  }

  const mock = {
    username: '',
    password: ''
  }

  const { navigate } = navigation();
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useForm<LoginProps>(mockUser)

  const signIn = async () => {
    try {
      setLoading(true);
      const response = await login(form);
      if (response) {
        setLoading(false)
        navigate('Home');
      }
    } catch (error) {
      setLoading(false)
    }
  };





  return { signIn, setForm, form, loading };
};