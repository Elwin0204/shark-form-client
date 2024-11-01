export default {
  // eslint-disable-next-line no-unused-vars
  prepend(h, conf, key) {
    return <template slot="prepend">{conf.config[key]}</template>;
  },
  // eslint-disable-next-line no-unused-vars
  append(h, conf, key) {
    return <template slot="append">{conf.config[key]}</template>;
  },
};
