export namespace ShipConstant {
  export enum ResultMessage {
    NOT_FOUND_SHIP = '해당 함선을 찾을수 없습니다.',
    DUPLICATED_SHIP = '해당 함선이 이미 존재합니다.',
    SUCCESS_SHIP_CREATED = '함선이 등록되었습니다.',
    SUCCESS_SHIP_REMOVED = '함선이 제거되었습니다.',
    SUCCESS_SHIP_MODIFIED = '함선 정보가 변경되었습니다.',
  }

  export enum DTO {
    SHIP_NAME_MAX_LENGTH = 50,
  }
}
