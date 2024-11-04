<template>
  <textarea :id="tinymceId" style="visibility: hidden" />
</template>
<script>
import loadTinymce from "@/utils/loadTinymce";
import { plugins, toolbar } from "./config.js";
import { debounce } from "throttle-debounce";
import { mapGetters } from "vuex";
import settings from "@/config/settings.config";
let num = 1;
export default {
  name: "VueTinymce",
  props: {
    id: {
      type: String,
      default: () => {
        if (num === 10000) num = 1;
        return `tinymce${+new Date()}${num++}`;
      },
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tinymceId: this.id,
    };
  },
  computed: {
    ...mapGetters({
      token: "user/token",
    }),
  },
  mounted() {
    loadTinymce((tinymce) => {
      const uploadUrl = settings.uploadUrl;
      const token = this.token;
      require("./lang/zh_CN.js");
      let conf = {
        selector: `#${this.tinymceId}`,
        language: "zh_CN",
        menubar: "false",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: "/tinymce/skins/content/default",
        cache_suffix: "?v=0.0.1",
        plugins,
        toolbar,
        toolbar_drawer: "slidng",
        toolbar_mode: "sliding",
        height: 200,
        branding: false,
        object_resizing: false,
        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        default_link_target: "_blank",
        link_title: false,
        statusbar: false,
        nonbreaking_force_tab: true,
        images_upload_handler: function (blobInfo, successFunc, failFunc) {
          let xhr, formData;
          const file = blobInfo.blob(); // 转换为file对象
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", uploadUrl);
          xhr.setRequestHeader("token", token);
          xhr.onload = function () {
            let json;
            if (xhr.status !== 200) {
              failFunc("HTTP Error: " + xhr.status);
              return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.data !== "string") {
              failFunc("Invalid JSON: " + xhr.responseText);
              return;
            }
            successFunc(json.data);
          };
          formData = new FormData();
          formData.append("file", file, file.name);
          xhr.send(formData);
        },
      };
      conf = Object.assign(conf, this.$attrs);
      conf.init_instance_callback = (editor) => {
        if (this.value) editor.setContent(this.value);
        this.vModel(editor);
      };
      tinymce.init(conf);
    });
  },
  methods: {
    vModel(editor) {
      const debounceSetContent = debounce(250, editor.setContent);
      this.$watch("value", (newVal, oldVal) => {
        if (editor && newVal !== oldVal && newVal !== editor.getContent()) {
          if (typeof newVal !== "string") {
            newVal = newVal.toString();
          }
          debounceSetContent.call(editor, newVal);
        }
      });

      editor.on("change keyup undo redo", () => {
        this.$emit("input", editor.getContent());
      });

      editor.on("blur", () => {
        this.$emit("blur");
      });
    },
    destroyTinymce() {
      if (!window.tinymce) return;
      const tinymce = window.tinymce.get(this.tinymceId);
      if (tinymce) {
        tinymce.destroy();
      }
    },
  },
};
</script>
