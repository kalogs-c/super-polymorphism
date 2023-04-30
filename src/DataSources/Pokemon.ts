import axios, { AxiosInstance } from "axios";
import DataSource, { MonsterData } from "./DataSource";

class Pokemon implements DataSource {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
      timeout: 2000,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  public async New(): Promise<Pokemon> {
    return this;
  }

  public async getMonster(pokemonName: string): Promise<MonsterData> {
    const pokeApiResponse = await this.client.get(`/${pokemonName}`);

    const pokemonData = pokeApiResponse.data;

    return {
      name: pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1),
      img: pokemonData.sprites.front_default,
    }
  }
}

export default Pokemon;
