interface DataSource {
  New: () => Promise<DataSource>;

  getMonster: (name: string) => Promise<MonsterData>;
}

export type MonsterData = {
  name: string,
  img: string,
}

export default DataSource;
