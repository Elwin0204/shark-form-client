export default {
  // eslint-disable-next-line no-unused-vars
  options(h, conf, key, that) {
    const list = [];
    conf.config.options.forEach((item) => {
      if (conf.config.optionType === "button") {
        list.push(
          <el-radio-button label={item.value}>{item.label}</el-radio-button>
        );
      } else {
        if (item.value == 0) {
          list.push(
            <el-radio label={item.value} border={conf.border}>
              {item.label}
              <input
                class="item-other-input"
                onInput={(event) => {
                  console.log(event);
                  that.$emit("otherChange", event.target.value, conf);
                }}
                onChange={(event) => {
                  that.$emit("otherChange", event.target.value, conf);
                }}
              />
            </el-radio>
          );
        } else {
          list.push(
            <el-radio label={item.value} border={conf.border}>
              {item.label}
            </el-radio>
          );
        }
      }
    });
    return list;
  },
};
