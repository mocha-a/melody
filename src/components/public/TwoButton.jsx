
import Button from './Button'

function TwoButton({ btn1, btn2 }) {
  return (
    <div className='TwoBtn'>
        <Button className={"btn1"} btn={btn1}/>
        <Button className={"btn2"} btn={btn2}/>
    </div>
  )
}

export default TwoButton