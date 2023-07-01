/* eslint-disable no-constant-condition */
import TasksPage from './Tasks/TasksPage'
import PhotosPage from './Photos/PhotosPage'
import CountriesPage from './Countries/CountriesPage'
import ProfileCardPage from './ProfileCard/ProfileCardPage'

function App() {
  return (
    <main className="container">
      {(true)
        ? <TasksPage />
        : <>
            <PhotosPage />
            <CountriesPage />
            <ProfileCardPage />
          </>
      }
    </main>
  )
}

export default App
