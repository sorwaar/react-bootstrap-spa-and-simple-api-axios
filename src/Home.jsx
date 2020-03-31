import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Container } from 'react-bootstrap';

const Home = (props) => {

	const initialUserState = {
    user: {},
    loading: true,
  	}
    const [user, setUser] = useState(initialUserState)

    useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)

      setUser(data)
    }
    getUser()
  }, [props.match.params.id])

  return user.loading ? (
  	<div>
    	<h1>Welcome To website</h1>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<p>
        	<Link to="/contact">Contact with Sorwar</Link> on GitHub.
      </p>
      <div>Loading...</div>
    </div>

  ) : (
    <div>
    	<h1>Welcome To website</h1>
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<p>
        	<Link to="/contact">Contact with Sorwar</Link> on GitHub.
      </p>
      <h1>{props.match.params.id}</h1>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
};

export default Home;
