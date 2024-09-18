import { useParams } from 'react-router-dom';

export function RocketDetails() {
	const { rocketId } = useParams();

	return <>Rocket: {rocketId}</>;
}
