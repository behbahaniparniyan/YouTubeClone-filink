import axios from "axios";

class Service {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  async getComments() {
    const response = await this.http.get("/comments");
    return response.data;
  }

  async addComment(body) {
    const response = await this.http.post(
      "/comments",
      { body },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
}

export default new Service();

//  , {headers: {
// 'Content-Type': 'application/json'
//  }}
