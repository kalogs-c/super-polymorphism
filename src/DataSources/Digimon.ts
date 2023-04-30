import axios, { AxiosInstance } from "axios";
import DataSource, { MonsterData } from "./DataSource";

class Digimon implements DataSource {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://digimon-api.vercel.app/api/digimon/name/",
      timeout: 2000,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  public async New(): Promise<Digimon> {
    return this;
  }

  public async getMonster(digimonName: string): Promise<MonsterData> {
    const digimonApiResponse = await this.client.get(`/${digimonName}`);

    const [digimonData] = digimonApiResponse.data;

    return {
      name: digimonData.name,
      img: digimonData.img,
    }
  }
}

export default Digimon;
