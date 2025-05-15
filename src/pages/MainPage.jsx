import CheckBox from '../components/public/CheckBox';
import Loading from '../components/Join/Loading';
import CountingBtn from '../components/public/CountingBtn';
import InputBox from '../components/public/InputBox';
import PayInputBox from '../components/public/PayInputBox';

function mainPage() {
  return (
    <div>
      <CheckBox/>
      <InputBox label='로그인'/>
      <CountingBtn/>
      <Loading/>
      <PayInputBox placeholder='주소'/>
    </div>
  )
}

export default mainPage