export namespace UserConstant {
    export enum ResultMessage {
        NOT_FOUND_USER = '해당 사용자를 찾을수 없습니다.',
        DUPLICATED_EMAIL = '해당 이메일을 이미 사용중 입니다.',
        SUCCESS_USER_CREATED = '사용자가 생성되었습니다.',
        SUCCESS_USER_REMOVED = '사용자가 제거되었습니다.',
        SUCCESS_USER_MODIFIED = '사용자 정보가 변경되었습니다.',
        FAIL_LOGIN = '이메일과 패스워드를 확인해주세요.',
        SUCCESS_LOGIN = '로그인에 성공하였습니다.',
    }

    export enum PasswordAlgorithm {
        SHA256 = 'sha256',
    }
}
