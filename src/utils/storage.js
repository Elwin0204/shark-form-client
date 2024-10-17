/**
 *
 * @param {String} type
 * @param {String} storagePrefix
 * @returns
 */
export function createStorage(type, storagePrefix) {
  const stg = type === "session" ? window.sessionStorage : window.localStorage;

  const storage = {
    /**
     * Set session
     *
     * @param {String} key Session key
     * @param {String} value Session value
     */
    set(key, value) {
      const json = JSON.stringify(value);

      stg.setItem(`${storagePrefix}${key}`, json);
    },
    /**
     * Get session
     *
     * @param {String} key Session key
     */
    get(key) {
      const json = stg.getItem(`${storagePrefix}${key}`);
      if (json) {
        let storageData = null;

        try {
          storageData = JSON.parse(json);
        } catch {}
        if (storageData) {
          return storageData;
        }
      }

      stg.removeItem(`${storagePrefix}${key}`);

      return null;
    },
    remove(key) {
      stg.removeItem(`${storagePrefix}${key}`);
    },
    clear() {
      stg.clear();
    },
  };
  return storage;
}

const storagePrefix = process.env.VUE_APP_STORAGE_PREFIX || "";

export const localStg = createStorage("local", storagePrefix);
export const sessionStg = createStorage("session", storagePrefix);
