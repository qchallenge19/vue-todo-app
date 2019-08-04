import api from './api';

/**
 * please modify accordingly in case rest end point are different for different operations
 * @type {{LOAD_TODO: string, DELETE_TODO: string, UPDATE_TODO: string, ADD_TODO: string}}
 */
const RestEndPoint = {
    LOAD_TODO: '/todos',
    ADD_TODO: '/todos',
    DELETE_TODO: '/todos',
    UPDATE_TODO: '/todos',
};
/**
 * main function to handle the all server call of the application
 * @param restEndPoint
 * @param reqType
 * @param body
 * @returns {Promise<AxiosResponse>}
 */
function baseService(restEndPoint, reqType, body = {}) {
    const url = restEndPoint;
    let resultPromise;
    switch (reqType) {
        case 'GET':
            resultPromise = _get(url);
            break;
        case 'PUT':
            resultPromise = _put(url, body);
            break;
        case 'POST':
            resultPromise = _post(url, body);
            break;
        case 'DELETE':
            resultPromise = _delete(url);
            break;
        default :
            resultPromise = _get(url);
    }
    return resultPromise.then((data) => data).catch(handleError);
}

/**
 * executes GET method to fetch result
 * @param url
 * @returns {Promise<AxiosResponse>}
 * @private
 */
function _get(url) {
    return api().get(url);
}

/**
 * executes PUT method to insert record
 * @param url
 * @param body
 * @returns {Promise<AxiosResponse>}
 * @private
 */
function _put(url, body) {
    return api().put(url, body);
}

/**
 * executes POST method to update record
 * @param url
 * @param body
 * @returns {Promise<AxiosResponse>}
 * @private
 */
function _post(url, body) {
    return api().post(url, body);
}

/**
 * executes DELETE method to delete record
 * @param url
 * @returns {Promise<AxiosResponse>}
 * @private
 */
function _delete(url) {
    return api().delete(url);
}

/**
 * function to handle the error
 * @param err
 * @returns {*}
 */
function handleError(err) {
    throw new Error(err);
}

export { RestEndPoint, baseService };
