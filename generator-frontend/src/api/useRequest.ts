import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
 
interface RequestedData {
	code: any,
	secret: string
}

export default function useRequest(urlAPI: string) {
	let defaultData = {
		code: [],
		secret: ''
	}

	const [data, setData] = useState<RequestedData>(defaultData);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		axios
			.get(urlAPI)
			.then((response: AxiosResponse) => { setData(response.data as RequestedData); })
			.catch((err: any) => { setError(`${err.response.status} - ${err.message}`); })
			.finally(() => { setLoading(false); });
	}, [urlAPI]);

	const reFetch = async () => {
		setLoading(true);
		await axios
			.get(urlAPI)
			.then((response: AxiosResponse) => { setData(response.data as RequestedData); })
			.catch((err: any) => { setError(err); })
			.finally(() => { setLoading(false); });
	}

	return [data, loading, error, reFetch] as const;
}
