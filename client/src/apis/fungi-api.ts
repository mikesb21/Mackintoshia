import { Fungi } from "@/interfaces";
import axios from "axios";

const fungiApi = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export default class FungiApi {
  async getFungiList() {
    let response;
    try {
      response = await fungiApi.get("/fungi/");
    } catch (error) {
      console.error(error);
    }
    return response?.data;
  }

  async getFungi(id: string) {
    let response;
    try {
      response = await fungiApi.get(`/fungi/${id}`);
    } catch (error) {
      console.error(error);
    }
    return response?.data;
  }

  async addFungi(fungi: Fungi) {
    let response;
    try {
      response = await fungiApi.post("/fungi/", fungi);
    } catch (error) {
      console.error(error);
    }
    return response;
  }

  async updateFungi(fungi: Fungi) {
    try {
      await fungiApi.put(`/fungi/${fungi.id}`, fungi);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteFungi(fungi: Fungi) {
    try {
      await fungiApi.delete(`/fungi/${fungi.id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
