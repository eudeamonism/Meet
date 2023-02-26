import React, { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F82%2Fcb%2Fda82cbbe0148d1356bf145a889229b37.jpg&f=1&nofb=1&ipt=317ee14cc082556a6d5216df45c2274f8310b50a8522b7f7b30cefa76d70e178&ipo=images"
			title="Classic Garfield"
			description="When you are the king of the lawn."
			address="123 ABC Street"
		/>
	);
}

export default MeetupDetails;
