
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const style = {
  p: 0,
  margin: '20px auto 30px',
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: '#C3C3C3',
  backgroundColor: '#FFF2FA',
};

export default function ListDividers({ user }) {

  return (
    <List sx={style} aria-label="mailbox folders">
    <ListItem>
        <div className='memberbox_li'>아이디</div>
        <div>{user?.m_id}</div>
    </ListItem>
      <Divider component="li" />
      <ListItem>
        <div className='memberbox_li'>전화번호</div>
        <div>{user?.m_tel}</div>
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <div className='memberbox_li'>생년월일</div>
        <div>{user?.m_date}</div>
      </ListItem>
    </List>
  );
}