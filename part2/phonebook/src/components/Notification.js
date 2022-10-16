const Notification = ({notification}) => {
    if(notification.message === null || notification.message === '') return null

    return ( notification.error ?
        <div className="error">
            {notification.message}
        </div> 
        :
        <div className="notification">
            {notification.message}
        </div>

    )
}

export default Notification