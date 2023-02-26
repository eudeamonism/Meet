import React, {Fragment} from 'react'
import MeetUpList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'First Meet Up',
		image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FuYt4XnMaHcVomSlDQ0h5gHaEo%26pid%3DApi&f=1&ipt=e6711384ab5317d9070afc13892c6684d4eab1b289c1d2b23ea7ded88d2b1f99&ipo=images',
        address: '12345 Alphabet Soup',
        description: 'First Meet Up'
	},
	{
		id: 'm2',
		title: 'Second Meet Up',
		image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FuYt4XnMaHcVomSlDQ0h5gHaEo%26pid%3DApi&f=1&ipt=e6711384ab5317d9070afc13892c6684d4eab1b289c1d2b23ea7ded88d2b1f99&ipo=images',
        address: '12345 Dumb Soup',
        description: 'Second Meet Up'
	},
];

function HomePage() {
    return (<Fragment>
        <h1>Home Page</h1>
        <MeetUpList meetups={DUMMY_MEETUPS } />
    </Fragment>

  )
}

export default HomePage