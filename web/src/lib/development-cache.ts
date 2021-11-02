import { LowSync, JSONFileSync } from 'lowdb';
import type { CacheStorage, CacheItem } from 'p-memoize';
import path from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = 'cache.json';

type KeyType = string;
type DataType = any;
type ValueType = CacheItem<Promise<DataType>>;
type Data = Record<KeyType, CacheItem<DataType>>;

export class PersistentCache implements CacheStorage<KeyType, ValueType> {
  private db: LowSync<Data>;

  public constructor() {
    const file = path.join(DIRNAME, FILE_NAME);
    const adapter = new JSONFileSync<Data>(file);

    this.db = new LowSync(adapter);
    this.db.read();

    if (!this.db.data) {
      this.clear();
    }
  }

  public has(key: KeyType) {
    return !!this.db.data[key];
  }

  public get(key: KeyType) {
    const storedData = this.db.data[key];

    if (!storedData) return;

    return {
      ...storedData,
      data: new Promise<DataType>((resolve) => resolve(storedData.data)),
    };
  }

  public set(key: KeyType, value: ValueType) {
    (async () => {
      const storedData = {
        ...value,
        data: await value.data,
      };

      this.db.data[key] = storedData;
      this.db.write();
    })();
  }

  public delete(key: KeyType) {
    delete this.db.data[key];
    this.db.write;
  }

  public clear() {
    this.db.data = {};
    this.db.write();
  }
}
