export interface IUser {
    id: string;
    name?: string;
    email: string;
    password?: string;
    address?: string;
    city?: string;
    country?: string;
    enterprise?: string;
    discount?: number;
    phone?: number;
    type?: CostumerType
}

enum CostumerType {
    PLATINO = 'Platino',
    PARTNER = 'Partner',
    DIAMANTE = 'Diamante',
    ORO = 'Oro'
}