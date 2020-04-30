import axios from 'axios';

const base = axios.create({
    baseURL: 'https://lorris-bnb-db.herokuapp.com'
});

export interface IResident {
    id: number;
    name: string;
    address: string;
    beds: number;
    toilets: number;
    square: number;
    img: string;
}

export async function fetchResidents() {
    const response = await base.get<IResident[]>('/residents');

    return response.data;
}

export async function fetchResidentById(id: string) {
    const response = await base.get<IResident>(`/residents/${id}`);

    return response.data;
}

export async function editResident(id: string, resident: IResident) {
    const response = await base.patch(`/residents/${id}`, resident);
    return `Yaay: ${response}`
}