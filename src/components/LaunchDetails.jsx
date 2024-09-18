import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../services/launches';
import { Text, Box, Flex, Spacer, Tag } from '@chakra-ui/react';

export function LaunchDetails() {
	const [launch, setLaunch] = useState([]);

	const { launchId } = useParams();

	useEffect(() => {
		API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.error);
	}, [launchId]);

	return (
		<Box bg='gray.100' p={4} m={4} borderRadius='lg'>
			{launch.length == 0 ? (
				<div>Loading...</div>
			) : (
				<>
					<Flex>
						<Text fontSize='2xl'>
							Mission
							<strong>
								{launch.mission_name} ({launch.launch_year})
							</strong>
						</Text>
						<Spacer />
						<Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
							{launch.launch_success ? 'Success' : 'Failure'}
						</Tag>
					</Flex>
					<Box>
						Rocket:{' '}
						<Link to={`/rockets/${launch.rocket?.rocket_id}`}>
							{launch.rocket.rocket_name}
						</Link>
					</Box>
				</>
			)}
		</Box>
	);
}
