import { User } from '@/app/user/User'
import { PswRecovery } from '@/app/user/resources/PswRecovery'

const outBoard = [
  {path:'/login', component:<User/>, wrapper:true},
  {path:'/passwordrecovery', component:<PswRecovery/>, wrapper:true}
]

export default outBoard
