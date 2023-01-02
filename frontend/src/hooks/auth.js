import { createContext } from `react`

export const AuthContext = createContext({})

function AuthProvider({children}){
  <AuthContext.Provider value={{name: 'Daniel', email: 'daniel@email.com'}}>
    {children}
  </AuthContext.Provider>
}