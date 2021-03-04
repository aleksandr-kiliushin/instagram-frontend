import React from 'react'
import { useHistory } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import { CurUser } from '../../types/types'
import CommonModal from '../Common/CommonModal'


interface Props {
  curUser: CurUser
  logout: () => void
}

const HeaderBtnPane: React.FC<Props> = ({curUser, logout}) => {

  const history = useHistory()
  const onLogin = () => history.push('/login')

  const options: {text: string, cb: () => void}[] = [
    {text: 'Profile', cb: () => {}},
    curUser.id === 0 ? {text: 'Login', cb: onLogin} : {text: 'Logout', cb: logout},
  ]

  const appearance = (
    <div className="roundContainer">
      <img alt="" src={curUser.avatar} />
    </div>
  )

  return (
    <div className="header__btnPane">
      <div><HomeIcon /></div>
      <div><SendRoundedIcon /></div>
      <div><ExploreOutlinedIcon /></div>
      <div><FavoriteBorderRoundedIcon /></div>

      <CommonModal appearance={appearance} options={options} />

    </div>
  )
}

export default HeaderBtnPane






// export default function Header() {
//   const [state, setState] = React.useState({drawer: false,});
//   const toggleDrawer = (open) => () => {
//     setState({'drawer': open,});
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Button onClick={toggleDrawer(true)} color="inherit" startIcon={<MenuIcon />}>Menu</Button>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={state['drawer']} onClose={toggleDrawer(false)}>
//         <div style={{width: 250,}} onClick={toggleDrawer(false)}>
//           <List>
//             <ListItem button={true} component={Link} to="/"         >Home     </ListItem>
//             <ListItem button={true} component={Link} to="/valves"   >Valves   </ListItem>
//             <ListItem button={true} component={Link} to="/tdu"      >TDU      </ListItem>
//             <ListItem button={true} component={Link} to="/converter">Converter</ListItem>
//           </List>
//           <Divider/>
//           <List>
//             <ListItem button={true} component={Link} to="/contacts">Contacts</ListItem>
//           </List>
//         </div>
//       </Drawer>

//     </div>
//   );
// }