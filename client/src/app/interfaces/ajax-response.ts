export interface AjaxResponse<T> {
  statusCode?: number;
  message?: string;
  error?: string;
  result?: T;
}
