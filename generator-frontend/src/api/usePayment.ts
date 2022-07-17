import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
 
interface RequestedData {
	name: string,
    amount: string,
    code: string,
    grid: any
}

export default function useRequest(urlAPI: string) {
	let defaultData = {
		name: '',
        amount: '',
        code: '',
        grid: []
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

	const reFetchPayment = async () => {
		setLoading(true);
		await axios
			.get(urlAPI)
			.then((response: AxiosResponse) => { setData(response.data as RequestedData); })
			.catch((err: any) => { setError(err); })
			.finally(() => { setLoading(false); });
	}

    const postPayment = async (name: string, amount: string, code: string, grid: any) => {
        await axios.post("http://localhost:3001/api/payment", {
            name: name,
            amount: amount,
            code: code,
            grid: grid
        });
    }

	return [data, loading, error, reFetchPayment, postPayment] as const;
}
