export class Request {
    constructor(url) {
        this.url = url;
    }
    async get() {
        const response = await fetch(this.url);         // url den verileri al
        const responseData = await response.json();    // json formatına dönüştür ve return et 

        return responseData;
    }
    async post(data) {
        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();   // fetchden dönen değer response data ile oluşan veri tekrar gelecek.

        return responseData;
    }
    async put(id, data) { // id değerine göre güncellenir

        const response = await fetch(this.url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    }
    async delete(id){
        const response = await fetch(this.url + "/" + id,{
            method : "DELETE"
        });
            return "Veri Silindi";
    }


}