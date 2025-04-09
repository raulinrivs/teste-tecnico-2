import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import router from '../router';
import { jwtDecode } from 'jwt-decode';

export const useAuth = defineStore('auth', () => {

  const token = ref(localStorage.getItem("token"));
  const refreshToken = ref(localStorage.getItem("refreshToken"))
  const user = ref({});
  const isAuth = ref(false);

  function setToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
    token.value = tokenValue;
  }

  function setRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue);
    token.value = tokenValue;
  }

  interface JwtPayload {
    user_id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    funcao: string;
    associado: string;
  }

  function setUser() {
    const jwtDecript = jwtDecode<JwtPayload>(token.value)
    user.value = {
      user_id: jwtDecript.user_id,
      username: jwtDecript.username,
      email: jwtDecript.email,
      first_name: jwtDecript.first_name,
      last_name: jwtDecript.last_name,
      funcao: jwtDecript.funcao,
      associado: jwtDecript.associado
    };
  }

  function getUser<JwtPayload>(){
    return user.value
  }

  function setIsAuth(auth: boolean) {
    isAuth.value = auth;
  }

  const isAuthenticated = computed(() => {
    return token.value;
  })
  
//   async function refreshAuthToken(refreshToken: string) {
//     try {
//       const response = await axiosInstance.post('token/refresh/', {refresh: refreshToken});
//       return response
//     } catch (error: any) {
//       return error.response
//     }
//   }

async function checkToken() {
    try {
      const tokenAuth = 'Bearer ' + token.value;
      const { data } = await axiosInstance.post("token/verify/", {
        headers: {
          Authorization: tokenAuth,
        },
        token: token.value,
      });
      return data;
    } catch (error) {
      const response = await refreshAuthToken(refreshToken.value)
      if (response.status === 200){
        const authStore = useAuth();
        authStore.setToken(response.data.access);
      } else {
        clear()
        router.push({ name: 'login'});
      }
    }
  }

  function clear() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    isAuth.value = false;
    token.value = '';
    user.value = '';
  }

  function logout() {
    this.clear();
    router.push({ name: 'login' });
}

  return {
    token,
    setToken,
    checkToken,
    refreshToken,
    setRefreshToken,
    user,
    setUser,
    isAuthenticated,
    getUser,
    clear,
    setIsAuth,
    isAuth,
    logout,
  }
})
