import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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

export default function ListDividers() {
  return (
    <List sx={style} aria-label="mailbox folders">
    <ListItem>
        <div className='memberbox_li'>아이디</div>
        <div>설명 텍스트</div>
    </ListItem>
      <Divider component="li" />
      <ListItem>
        <div className='memberbox_li'>비밀번호</div>
        <div>설명 텍스트</div>
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <div className='memberbox_li'>전화번호</div>
        <div>설명 텍스트</div>
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <div className='memberbox_li'>생년월일</div>
        <div>설명 텍스트</div>
      </ListItem>
    </List>
  );
}