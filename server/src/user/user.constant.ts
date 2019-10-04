export namespace UserConstant {
    export enum ResultMessage {
        NOT_FOUND_USER = '해당 사용자를 찾을수 없습니다.',
        DUPLICATED_EMAIL = '해당 이메일을 이미 사용중 입니다.',
        SUCCESS_USER_CREATED = '사용자가 생성되었습니다.',
        SUCCESS_USER_REMOVED = '사용자가 제거되었습니다.',
    }

    export enum PasswordAlgorithm {
        SHA256 = 'sha256',
    }
}
