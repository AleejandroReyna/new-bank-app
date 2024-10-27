// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../components/common/AppTitle"
import { Button } from "react-bootstrap"

export const Profile = () => (
  <>
  <AppTitle title="Profile">
    <Link to='/profile/edit'>
      <Button type="button" role="button">Edit Profile</Button>
    </Link>
  </AppTitle>
  </>
)