import * as _ from 'lodash';

export class ResultResponse {
    private response: string | object;
    private status: number;
    private message?: string;

    constructor(response: string | object, status: number, message?: string) {
        this.response = response;
        this.status = status;
        // if not empty message
        if (!_.isNil(message)) {
            this.message = message;
        }
    }
}
