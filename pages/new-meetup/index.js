import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Layout from '../../components/layout/Layout'

function NewMeetupPage(props) {
	function addMeetupHandler(enteredMeetupData) {
		console.log(enteredMeetupData);
	}
	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
