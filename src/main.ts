import DataSource from "./DataSources/DataSource"

(async () => {
  const [dsName, monsterName] = process.argv.slice(2);

  if (!dsName || !monsterName) throw new Error("Usage: node main.js <DataSouce> <MonsterName>");

  const dataSource: DataSource = await (
    new (await import(`./DataSources/${dsName}`)).default
  ).New()

  console.log(await dataSource.getMonster(monsterName));
})()
