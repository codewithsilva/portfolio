import { User } from '@/app/client/user/User'
import { PswRecovery } from '@/app/client/user/resources/PswRecovery'

const outBoard = [
  {path:'/login', component:<User/>, wrapper:true},
  {path:'/passwordrecovery', component:<PswRecovery/>, wrapper:true}
]

export default outBoard
