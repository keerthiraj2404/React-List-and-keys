import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, role, name} = userDetails
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="img" />
      <div className="user-details-container">
        <p className="user-name">{name}</p>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
