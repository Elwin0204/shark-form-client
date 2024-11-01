export default {
  // eslint-disable-next-line no-unused-vars
  options(h, conf, key) {
    const list = [];
    conf.config.options.forEach((item) => {
      list.push(
        <el-option
          label={item.label}
          value={item.value}
          disabled={item.disabled}
        ></el-option>
      );
    });
    return list;
  },
};
