import Constants from '@Utilities/Constants';

export default fetching = async (url = '', method= 'get', body = null, page= null) =>{
    let link  = `${Constants.apiUrl}${url}`+ (page? '?page='+page: '' );
    let params = {};
    params.method =  method;
    params.headers = Constants.headers;
    body? params.body = JSON.stringify({...body}) : null;

    let response = await fetch(`${link}`, params);
    response = response.json();
    return response;
}