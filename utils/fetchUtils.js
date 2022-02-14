export async function unWrap(response){
    console.log(response)
    const json = await response.json()
    const { ok, status, statusText } = response

    return {
        json,
        ok,
        status,
        statusText,
    }
}

export function getErrorResponse(error) {
    return {
        ok: false,
        status: 500,
        statusText: error.message,
        json: {}
    }
}

export function parseQuery(url) {
    let arr = url.replace(/(^.*)?\?/gm, "").split("&");
    let result = {};
  
    for(const item of arr) {
      let str = item.split('=');
      result[str[0]] = str[1]
    }
  
    return result;
}