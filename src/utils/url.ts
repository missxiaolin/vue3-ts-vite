
const url: any = {

    getQueryObject(url: any) {

        return {
            baseUrl: '',
            query: {}
        }
    },

    /**
     * 组装url query
     * @param queryObject 
     * @returns 
     */
    makeQuery(queryObject: any) {
        let query: any = Object.entries(queryObject)
            .reduce((result: any, entry: any) => {
                result.push(entry.join('='))
                return result
            }, []).join('&')
        return `?${query}`
    },

    /**
     * 解析url
     * @param url 
     * @returns 
     */
    getQueryUrlObj(url: any) {
        let search = url.substring(url.lastIndexOf("?") + 1),
            obj = {},
            reg = /([^?&=]+)=([^?&=]*)/g,
            base_url = url.split("?")[0]
        search.replace(reg, (rs: any, $1: any, $2: any) => {
            let name = decodeURIComponent($1),
                val = decodeURIComponent($2);
            val = String(val);
            // @ts-ignore
            obj[name] = val;
        })

        return {
            baseUrl: base_url,
            query: obj
        }
    }
}

export default url