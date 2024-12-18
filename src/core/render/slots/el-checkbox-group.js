export default {
  // eslint-disable-next-line no-unused-vars
  options(h, conf, key, that) {
    const list = [];
    conf.config.options.forEach((item) => {
      if (conf.config.optionType === "button") {
        list.push(
          <el-checkbox-button label={item.value}>
            {item.label}
          </el-checkbox-button>
        );
      } else {
        if (item.value == 0) {
          list.push(
            <div style="display: flex;align-items: center;">
              <el-checkbox label={item.value} border={conf.border}>
                {item.label}
              </el-checkbox>
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
            </div>
          );
        } else {
          list.push(
            <el-checkbox label={item.value} border={conf.border}>
              {item.label}
            </el-checkbox>
          );
        }
      }
    });
    return list;
  },
};
