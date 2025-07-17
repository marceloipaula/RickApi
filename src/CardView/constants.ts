
export interface characterData {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
};

export interface ApiResponse {
    characters: characterData[];
}

export const CHARACTER_URL = 'https://rickandmortyapi.com/api/character';