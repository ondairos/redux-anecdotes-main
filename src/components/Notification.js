import { useSelector } from 'react-redux'
// notification reducer

const Notification = () => {
  const notificationRedux = useSelector(state => state.notification.message)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notificationRedux}    </div>
  )
}

export default Notification