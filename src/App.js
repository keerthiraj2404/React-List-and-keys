import UserProfile from './components/UserProfile'

const userDetailsList = [
  {
    id: 1,
    name: 'Esther',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    role: 'S/W Engineer',
  },

  {
    id: 2,
    name: 'Floyd',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    role: 'S/W Engineer',
  },

  {
    id: 3,
    name: 'Jacob',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    role: 'S/W Engineer',
  },

  {
    id: 4,
    name: 'Devon',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    role: 'S/W Engineer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  </div>
)

export default App
