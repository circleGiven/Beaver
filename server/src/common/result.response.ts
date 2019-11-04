import * as _ from 'lodash';

export class ResultResponse {
    private result: string | object;
    private statusCode: number;
    private message?: string;

    constructor(result: string | object, status: number, message?: string) {
        this.result = result;
        this.statusCode = status;
        // if not empty message
        if (!_.isNil(message)) {
            this.message = message;
        }
    }
}
