import { useAuth } from "@/stores/auth";

export default async function routes(to: any, from: any, next: any) {
  document.title = to.meta.title || 'Default Title';

  let permissionsResult = {
    auth: false,
  }

  const toNeedAuth = to.meta?.auth

  if (toNeedAuth) {
    const auth = useAuth();

    if (auth.isAuth) permissionsResult.auth = true

    if (permissionsResult.auth ) 
        next(); 
    else 
        next({ name: 'login', query: { next_page: to.name } });
    
  } else next();
}
