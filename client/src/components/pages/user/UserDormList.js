import React from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import { Link } from "react-router-dom";

// function
import { listDorm } from '../../functions/dorm'

// redux
import { useSelector } from 'react-redux';

const UserDormList = () => {
	const { user } = useSelector((state) => ({ ...state }))
	return (
		<div>
			<NavbarUser />
			<div className='container py-5'>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center experience">
						<h3>รายชื่อหอพักทั้งหมด</h3>
					</div><br />
				</div><hr />
				<div className="row d-flex justify-content-between">
					<div class="card col-sm-4">
						<img src="https://www.csc.ku.ac.th/th/wp-content/uploads/2019/01/Untitled-1.jpg" class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDormList