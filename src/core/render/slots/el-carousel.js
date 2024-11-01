export default {
  // eslint-disable-next-line no-unused-vars
  options(h, conf, key) {
    const list = [];
    let style = "height: 100%;";
    conf.config.options.forEach((item) => {
      list.push(
        <el-carousel-item style={"text-align: center;"}>
          <p>{item.label}</p>
          <el-image fit="contain" style={style} src={item.image}></el-image>
        </el-carousel-item>
      );
    });
    return list;
  },
};
