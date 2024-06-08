export interface ErrorResponse {
    status: number;
    mess: string;
    content: {
        email: string;
        password: string;
    };
}