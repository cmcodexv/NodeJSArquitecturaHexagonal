import { ApiConst } from "../Utils/ApiConst";
export class ApplicationException extends Error {
    constructor(message: string = ApiConst.UNEXPECTED_ERROR) {
        super(message);
    }
}